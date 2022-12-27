{
  description = "A Discord Ship Database using Fleetyards.net.";

  inputs.flake-compat = {
    url = "github:edolstra/flake-compat";
    flake = false;
  };

  outputs = { self, nixpkgs, ... }:
    let
      version = "${nixpkgs.lib.substring 0 8 self.lastModifiedDate}-${
          self.shortRev or "dirty"
        }";

      systems =
        [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];

      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f system);

      # Memoize nixpkgs for different platforms for efficiency.
      nixpkgsFor = forAllSystems (system:
        import nixpkgs {
          inherit system;
          overlays = [ self.overlays.default ];
        });

    in {

      overlays.fleet = final: prev: {
        fleet_bot = final.callPackage ({ lib, beam, rebar3, beamPackages }:
          let
            packages = beam.packagesWith beam.interpreters.erlang;
            pname = "fleet_bot";
            src = self;
            mixEnv = "prod";

            mixDeps = import ./nix/mix.nix { inherit lib beamPackages; overrides = overrideDeps; };

            overrideDeps = (self: super: {
              gun = self.remedy_gun.override {
                name = "gun";
              };
              cowlib = self.remedy_cowlib.override {
                name = "cowlib";
              };
              credo = null;
            });
          in packages.mixRelease {
            inherit pname version src mixEnv;

            mixNixDeps = mixDeps;

            nativeBuildInputs = [ rebar3 ];
          }) { };
      };
      overlays.default = self.overlays.fleet;

      packages = forAllSystems (system: {
        inherit (nixpkgsFor.${system}) fleet_bot;
        default = self.packages.${system}.fleet_bot;
      });

      legacyPackages = forAllSystems (system: nixpkgsFor.${system});

      nixosModules = {
        fleet_bot = import ./nix/fleet_bot.nix;
        default = self.nixosModules.fleet_bot;
      };

    };

  nixConfig = {
    extra-substituters = [ "https://fleetbot.cachix.org" ];
    extra-trusted-public-keys =
      [ "fleetbot.cachix.org-1:LCc89Bys++LoaCDgLuO47dcIoSFlRlPvXchGkr5LJLc=" ];
  };
}
