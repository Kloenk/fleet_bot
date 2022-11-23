import Config

config :nostrum,
  token: System.fetch_env!("FLEET_BOT_TOKEN")

config :fleet_bot, FleetBot.Repo,
  username: "fleet_bot_dev",
  password: "fleet_bot_dev",
  database: "fleet_bot_dev",
  hostname: "localhost",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true

config :logger, :console, metadata: [:shard, :guild, :channel]