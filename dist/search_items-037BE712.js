searchNodes=[{"doc":"Documentation for FleetBot .","ref":"FleetBot.html","title":"FleetBot","type":"module"},{"doc":"Discord High level helper functions.","ref":"FleetBot.Discord.html","title":"FleetBot.Discord","type":"module"},{"doc":"Regex matcher for the discord allowed command string. Converted from discords ^[-_p{L}p{N}p{sc=Deva}p{sc=Thai}]{1,32}$ Regex. See: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming","ref":"FleetBot.Discord.html#chat_command_allowed_regex/0","title":"FleetBot.Discord.chat_command_allowed_regex/0","type":"function"},{"doc":"","ref":"FleetBot.Discord.html#child_spec/1","title":"FleetBot.Discord.child_spec/1","type":"function"},{"doc":"Get name of subcomand nested in interaction or option. Example iex&gt; get_subcommand_name ( % Nostrum.Struct.ApplicationCommandInteractionDataOption { name : &quot;foo&quot; } ) &quot;foo&quot; iex&gt; get_subcommand_name ( % Nostrum.Struct.ApplicationCommandInteractionData { options : [ ...&gt; % Nostrum.Struct.ApplicationCommandInteractionDataOption { name : &quot;bar&quot; } ...&gt; ] } ) &quot;bar&quot;","ref":"FleetBot.Discord.html#get_subcommand_name/1","title":"FleetBot.Discord.get_subcommand_name/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.html#start_link/0","title":"FleetBot.Discord.start_link/0","type":"function"},{"doc":"","ref":"FleetBot.Discord.html#start_link/1","title":"FleetBot.Discord.start_link/1","type":"function"},{"doc":"Validates a change is a snowflake . Options :message - the message on failure, defaults to &quot;not a snowflake&quot; :required - the snowflake is required to exist Examples validate_snowflake ( changeset , :guild_id )","ref":"FleetBot.Discord.html#validate_snowflake/3","title":"FleetBot.Discord.validate_snowflake/3","type":"function"},{"doc":"","ref":"FleetBot.Discord.Command.html","title":"FleetBot.Discord.Command","type":"behaviour"},{"doc":"","ref":"FleetBot.Discord.Command.html#c:command/2","title":"FleetBot.Discord.Command.command/2","type":"callback"},{"doc":"","ref":"FleetBot.Discord.Command.html#create_interaction_response/2","title":"FleetBot.Discord.Command.create_interaction_response/2","type":"macro"},{"doc":"","ref":"FleetBot.Discord.Command.html#create_interaction_response_data/1","title":"FleetBot.Discord.Command.create_interaction_response_data/1","type":"macro"},{"doc":"","ref":"FleetBot.Discord.Command.html#c:global_commands/0","title":"FleetBot.Discord.Command.global_commands/0","type":"callback"},{"doc":"","ref":"FleetBot.Discord.Command.html#interaction_response_data_flags/1","title":"FleetBot.Discord.Command.interaction_response_data_flags/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Command.html#interaction_response_type/1","title":"FleetBot.Discord.Command.interaction_response_type/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Command.html#c:remove_global_commands/0","title":"FleetBot.Discord.Command.remove_global_commands/0","type":"callback"},{"doc":"","ref":"FleetBot.Discord.Commands.html","title":"FleetBot.Discord.Commands","type":"module"},{"doc":"Returns a specification to start this module under a supervisor. See Supervisor .","ref":"FleetBot.Discord.Commands.html#child_spec/1","title":"FleetBot.Discord.Commands.child_spec/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.html#get_commands/0","title":"FleetBot.Discord.Commands.get_commands/0","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.html#get_supervised_commands/1","title":"FleetBot.Discord.Commands.get_supervised_commands/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.html#start_link/1","title":"FleetBot.Discord.Commands.start_link/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.Register.html","title":"FleetBot.Discord.Commands.Register","type":"behaviour"},{"doc":"","ref":"FleetBot.Discord.Commands.Register.html#create_choice/3","title":"FleetBot.Discord.Commands.Register.create_choice/3","type":"macro"},{"doc":"","ref":"FleetBot.Discord.Commands.Register.html#create_command/3","title":"FleetBot.Discord.Commands.Register.create_command/3","type":"macro"},{"doc":"","ref":"FleetBot.Discord.Commands.Register.html#create_option/3","title":"FleetBot.Discord.Commands.Register.create_option/3","type":"macro"},{"doc":"","ref":"FleetBot.Discord.Commands.Register.html#c:delete_global_commands/0","title":"FleetBot.Discord.Commands.Register.delete_global_commands/0","type":"callback"},{"doc":"","ref":"FleetBot.Discord.Commands.Register.html#c:global_commands/0","title":"FleetBot.Discord.Commands.Register.global_commands/0","type":"callback"},{"doc":"","ref":"FleetBot.Discord.Commands.Register.html#localization_dict/1","title":"FleetBot.Discord.Commands.Register.localization_dict/1","type":"macro"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html","title":"FleetBot.Discord.Commands.RegisterManager","type":"module"},{"doc":"Returns a specification to start this module under a supervisor. See Supervisor .","ref":"FleetBot.Discord.Commands.RegisterManager.html#child_spec/1","title":"FleetBot.Discord.Commands.RegisterManager.child_spec/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html#get_module/1","title":"FleetBot.Discord.Commands.RegisterManager.get_module/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html#register_global_command/1","title":"FleetBot.Discord.Commands.RegisterManager.register_global_command/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html#register_global_commands/0","title":"FleetBot.Discord.Commands.RegisterManager.register_global_commands/0","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html#remove_global_command/1","title":"FleetBot.Discord.Commands.RegisterManager.remove_global_command/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html#remove_global_commands/0","title":"FleetBot.Discord.Commands.RegisterManager.remove_global_commands/0","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html#set_ready/0","title":"FleetBot.Discord.Commands.RegisterManager.set_ready/0","type":"function"},{"doc":"","ref":"FleetBot.Discord.Commands.RegisterManager.html#start_link/1","title":"FleetBot.Discord.Commands.RegisterManager.start_link/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Loaner.html","title":"FleetBot.Discord.Loaner","type":"module"},{"doc":"","ref":"FleetBot.Discord.Loaner.html#format_loaner/1","title":"FleetBot.Discord.Loaner.format_loaner/1","type":"function"},{"doc":"","ref":"FleetBot.Discord.Loaner.html#format_loaners/2","title":"FleetBot.Discord.Loaner.format_loaners/2","type":"function"},{"doc":"","ref":"FleetBot.Discord.Loaner.html#search/3","title":"FleetBot.Discord.Loaner.search/3","type":"function"},{"doc":"","ref":"FleetBot.Fleetyards.html","title":"FleetBot.Fleetyards","type":"module"},{"doc":"","ref":"FleetBot.Fleetyards.html#get_auth_header/1","title":"FleetBot.Fleetyards.get_auth_header/1","type":"function"},{"doc":"Fleetyards model slug.","ref":"FleetBot.Fleetyards.html#t:slug/0","title":"FleetBot.Fleetyards.slug/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Cache.html","title":"FleetBot.Fleetyards.Cache","type":"module"},{"doc":"A convenience function for retrieving the current generations.","ref":"FleetBot.Fleetyards.Cache.html#generations/0","title":"FleetBot.Fleetyards.Cache.generations/0","type":"function"},{"doc":"","ref":"FleetBot.Fleetyards.Cache.html#match_non_error/1","title":"FleetBot.Fleetyards.Cache.match_non_error/1","type":"function"},{"doc":"A convenience function for creating new generations.","ref":"FleetBot.Fleetyards.Cache.html#new_generation/1","title":"FleetBot.Fleetyards.Cache.new_generation/1","type":"function"},{"doc":"A convenience function for retrieving the newer generation.","ref":"FleetBot.Fleetyards.Cache.html#newer_generation/0","title":"FleetBot.Fleetyards.Cache.newer_generation/0","type":"function"},{"doc":"A convenience function for reset the GC timer.","ref":"FleetBot.Fleetyards.Cache.html#reset_generation_timer/0","title":"FleetBot.Fleetyards.Cache.reset_generation_timer/0","type":"function"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html","title":"FleetBot.Fleetyards.Client","type":"module"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#api_url/0","title":"FleetBot.Fleetyards.Client.api_url/0","type":"function"},{"doc":"Issues a DELETE request to the given url. Returns {:ok, response} if the request is successful, {:error, reason} otherwise. See request/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#delete/3","title":"FleetBot.Fleetyards.Client.delete/3","type":"function"},{"doc":"Issues a DELETE request to the given url, raising an exception in case of failure. If the request does not fail, the response is returned. See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#delete!/3","title":"FleetBot.Fleetyards.Client.delete!/3","type":"function"},{"doc":"Issues a GET request to the given url. Returns {:ok, response} if the request is successful, {:error, reason} otherwise. See request/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#get/3","title":"FleetBot.Fleetyards.Client.get/3","type":"function"},{"doc":"Issues a GET request to the given url, raising an exception in case of failure. If the request does not fail, the response is returned. See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#get!/3","title":"FleetBot.Fleetyards.Client.get!/3","type":"function"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#get_version/0","title":"FleetBot.Fleetyards.Client.get_version/0","type":"function"},{"doc":"Issues a HEAD request to the given url. Returns {:ok, response} if the request is successful, {:error, reason} otherwise. See request/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#head/3","title":"FleetBot.Fleetyards.Client.head/3","type":"function"},{"doc":"Issues a HEAD request to the given url, raising an exception in case of failure. If the request does not fail, the response is returned. See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#head!/3","title":"FleetBot.Fleetyards.Client.head!/3","type":"function"},{"doc":"Issues an OPTIONS request to the given url. Returns {:ok, response} if the request is successful, {:error, reason} otherwise. See request/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#options/3","title":"FleetBot.Fleetyards.Client.options/3","type":"function"},{"doc":"Issues a OPTIONS request to the given url, raising an exception in case of failure. If the request does not fail, the response is returned. See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#options!/3","title":"FleetBot.Fleetyards.Client.options!/3","type":"function"},{"doc":"Issues a PATCH request to the given url. Returns {:ok, response} if the request is successful, {:error, reason} otherwise. See request/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#patch/4","title":"FleetBot.Fleetyards.Client.patch/4","type":"function"},{"doc":"Issues a PATCH request to the given url, raising an exception in case of failure. If the request does not fail, the response is returned. See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#patch!/4","title":"FleetBot.Fleetyards.Client.patch!/4","type":"function"},{"doc":"Issues a POST request to the given url. Returns {:ok, response} if the request is successful, {:error, reason} otherwise. See request/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#post/4","title":"FleetBot.Fleetyards.Client.post/4","type":"function"},{"doc":"Issues a POST request to the given url, raising an exception in case of failure. If the request does not fail, the response is returned. See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#post!/4","title":"FleetBot.Fleetyards.Client.post!/4","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_headers/1 .","ref":"FleetBot.Fleetyards.Client.html#process_headers/1","title":"FleetBot.Fleetyards.Client.process_headers/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_request_options/1 .","ref":"FleetBot.Fleetyards.Client.html#process_request_options/1","title":"FleetBot.Fleetyards.Client.process_request_options/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_request_params/1 .","ref":"FleetBot.Fleetyards.Client.html#process_request_params/1","title":"FleetBot.Fleetyards.Client.process_request_params/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_response/1 .","ref":"FleetBot.Fleetyards.Client.html#process_response/1","title":"FleetBot.Fleetyards.Client.process_response/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_response_chunk/1 .","ref":"FleetBot.Fleetyards.Client.html#process_response_chunk/1","title":"FleetBot.Fleetyards.Client.process_response_chunk/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_response_headers/1 .","ref":"FleetBot.Fleetyards.Client.html#process_response_headers/1","title":"FleetBot.Fleetyards.Client.process_response_headers/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_response_status_code/1 .","ref":"FleetBot.Fleetyards.Client.html#process_response_status_code/1","title":"FleetBot.Fleetyards.Client.process_response_status_code/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_status_code/1 .","ref":"FleetBot.Fleetyards.Client.html#process_status_code/1","title":"FleetBot.Fleetyards.Client.process_status_code/1","type":"function"},{"doc":"Callback implementation for HTTPoison.Base.process_url/1 .","ref":"FleetBot.Fleetyards.Client.html#process_url/1","title":"FleetBot.Fleetyards.Client.process_url/1","type":"function"},{"doc":"Issues a PUT request to the given url. Returns {:ok, response} if the request is successful, {:error, reason} otherwise. See request/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#put/4","title":"FleetBot.Fleetyards.Client.put/4","type":"function"},{"doc":"Issues a PUT request to the given url, raising an exception in case of failure. If the request does not fail, the response is returned. See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#put!/4","title":"FleetBot.Fleetyards.Client.put!/4","type":"function"},{"doc":"Issues an HTTP request using a Request struct. This function returns {:ok, response} , {:ok, async_response} , or {:ok, maybe_redirect} if the request is successful, {:error, reason} otherwise. Redirect handling If the option :follow_redirect is given, HTTP redirects are automatically follow if the method is set to :get or :head and the response's status_code is 301 , 302 or 307 . If the method is set to :post , then the only status_code that get's automatically followed is 303 . If any other method or status_code is returned, then this function returns a returns a {:ok, %HTTPoison.MaybeRedirect{}} containing the redirect_url for you to re-request with the method set to :get . Examples request = % HTTPoison.Request { method : :post , url : &quot;https://my.website.com&quot; , body : &quot;{ \\&quot; foo \\&quot; : 3}&quot; , headers : [ { &quot;Accept&quot; , &quot;application/json&quot; } ] } request ( request )","ref":"FleetBot.Fleetyards.Client.html#request/1","title":"FleetBot.Fleetyards.Client.request/1","type":"function"},{"doc":"Issues an HTTP request with the given method to the given url. This function is usually used indirectly by get/3 , post/4 , put/4 , etc Args: method - HTTP method as an atom ( :get , :head , :post , :put , :delete , etc.) url - target url as a binary string or char list body - request body. See more below headers - HTTP headers as an orddict (e.g., [{&quot;Accept&quot;, &quot;application/json&quot;}] ) options - Keyword list of options Body: see type HTTPoison.Request Options: see type HTTPoison.Request This function returns {:ok, response} , {:ok, async_response} , or {:ok, maybe_redirect} if the request is successful, {:error, reason} otherwise. Redirect handling If the option :follow_redirect is given, HTTP redirects are automatically follow if the method is set to :get or :head and the response's status_code is 301 , 302 or 307 . If the method is set to :post , then the only status_code that get's automatically followed is 303 . If any other method or status_code is returned, then this function returns a returns a {:ok, %HTTPoison.MaybeRedirect{}} containing the redirect_url for you to re-request with the method set to :get . Examples request ( :post , &quot;https://my.website.com&quot; , &quot;{ \\&quot; foo \\&quot; : 3}&quot; , [ { &quot;Accept&quot; , &quot;application/json&quot; } ] )","ref":"FleetBot.Fleetyards.Client.html#request/5","title":"FleetBot.Fleetyards.Client.request/5","type":"function"},{"doc":"Issues an HTTP request with the given method to the given url, raising an exception in case of failure. request!/5 works exactly like request/5 but it returns just the response in case of a successful request, raising an exception in case the request fails.","ref":"FleetBot.Fleetyards.Client.html#request!/5","title":"FleetBot.Fleetyards.Client.request!/5","type":"function"},{"doc":"Starts HTTPoison and its dependencies.","ref":"FleetBot.Fleetyards.Client.html#start/0","title":"FleetBot.Fleetyards.Client.start/0","type":"function"},{"doc":"Requests the next message to be streamed for a given HTTPoison.AsyncResponse . See request!/5 for more detailed information.","ref":"FleetBot.Fleetyards.Client.html#stream_next/1","title":"FleetBot.Fleetyards.Client.stream_next/1","type":"function"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#t:body/0","title":"FleetBot.Fleetyards.Client.body/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#t:headers/0","title":"FleetBot.Fleetyards.Client.headers/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#t:method/0","title":"FleetBot.Fleetyards.Client.method/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#t:options/0","title":"FleetBot.Fleetyards.Client.options/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#t:params/0","title":"FleetBot.Fleetyards.Client.params/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#t:request/0","title":"FleetBot.Fleetyards.Client.request/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Client.html#t:url/0","title":"FleetBot.Fleetyards.Client.url/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Models.html","title":"FleetBot.Fleetyards.Models","type":"module"},{"doc":"Search Fleetyards for slug, and return discord autocompletion result. Example iex&gt; get_discord_slug_choices(&quot;touring&quot;) [%{name: &quot;600i Touring&quot;, value: &quot;600i-touring&quot;}]","ref":"FleetBot.Fleetyards.Models.html#get_discord_slug_choices/3","title":"FleetBot.Fleetyards.Models.get_discord_slug_choices/3","type":"function"},{"doc":"Get Fleetyards model by slug.","ref":"FleetBot.Fleetyards.Models.html#model/1","title":"FleetBot.Fleetyards.Models.model/1","type":"function"},{"doc":"Search Fleetyards for slug. Example iex&gt; search_slug(&quot;touring&quot;) [&quot;600i-touring&quot;]","ref":"FleetBot.Fleetyards.Models.html#search_slug/2","title":"FleetBot.Fleetyards.Models.search_slug/2","type":"function"},{"doc":"Get a List of all current Model slugs Example iex&gt; slugs ( ) [ &quot;msr&quot; , &quot;600i-touring&quot; ]","ref":"FleetBot.Fleetyards.Models.html#slugs/0","title":"FleetBot.Fleetyards.Models.slugs/0","type":"function"},{"doc":"Fleetyards model.","ref":"FleetBot.Fleetyards.Models.html#t:t/0","title":"FleetBot.Fleetyards.Models.t/0","type":"type"},{"doc":"","ref":"FleetBot.Fleetyards.Supervisor.html","title":"FleetBot.Fleetyards.Supervisor","type":"module"},{"doc":"Returns a specification to start this module under a supervisor. See Supervisor .","ref":"FleetBot.Fleetyards.Supervisor.html#child_spec/1","title":"FleetBot.Fleetyards.Supervisor.child_spec/1","type":"function"},{"doc":"","ref":"FleetBot.Fleetyards.Supervisor.html#start_link/1","title":"FleetBot.Fleetyards.Supervisor.start_link/1","type":"function"},{"doc":"","ref":"FleetBot.Gettext.html","title":"FleetBot.Gettext","type":"module"},{"doc":"","ref":"FleetBot.Gettext.html#debug/2","title":"FleetBot.Gettext.debug/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dgettext/3 .","ref":"FleetBot.Gettext.html#dgettext/3","title":"FleetBot.Gettext.dgettext/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dgettext_noop/2 .","ref":"FleetBot.Gettext.html#dgettext_noop/2","title":"FleetBot.Gettext.dgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext/5 .","ref":"FleetBot.Gettext.html#dngettext/5","title":"FleetBot.Gettext.dngettext/5","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext_noop/3 .","ref":"FleetBot.Gettext.html#dngettext_noop/3","title":"FleetBot.Gettext.dngettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpgettext/4 .","ref":"FleetBot.Gettext.html#dpgettext/4","title":"FleetBot.Gettext.dpgettext/4","type":"macro"},{"doc":"","ref":"FleetBot.Gettext.html#dpgettext_noop/3","title":"FleetBot.Gettext.dpgettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpngettext/6 .","ref":"FleetBot.Gettext.html#dpngettext/6","title":"FleetBot.Gettext.dpngettext/6","type":"macro"},{"doc":"","ref":"FleetBot.Gettext.html#dpngettext_noop/4","title":"FleetBot.Gettext.dpngettext_noop/4","type":"macro"},{"doc":"","ref":"FleetBot.Gettext.html#error/2","title":"FleetBot.Gettext.error/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext/2 .","ref":"FleetBot.Gettext.html#gettext/2","title":"FleetBot.Gettext.gettext/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_comment/1 .","ref":"FleetBot.Gettext.html#gettext_comment/1","title":"FleetBot.Gettext.gettext_comment/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_noop/1 .","ref":"FleetBot.Gettext.html#gettext_noop/1","title":"FleetBot.Gettext.gettext_noop/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_bindings/2 .","ref":"FleetBot.Gettext.html#handle_missing_bindings/2","title":"FleetBot.Gettext.handle_missing_bindings/2","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_plural_translation/7 .","ref":"FleetBot.Gettext.html#handle_missing_plural_translation/7","title":"FleetBot.Gettext.handle_missing_plural_translation/7","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_translation/5 .","ref":"FleetBot.Gettext.html#handle_missing_translation/5","title":"FleetBot.Gettext.handle_missing_translation/5","type":"function"},{"doc":"","ref":"FleetBot.Gettext.html#info/2","title":"FleetBot.Gettext.info/2","type":"macro"},{"doc":"","ref":"FleetBot.Gettext.html#lgettext/5","title":"FleetBot.Gettext.lgettext/5","type":"function"},{"doc":"","ref":"FleetBot.Gettext.html#lngettext/7","title":"FleetBot.Gettext.lngettext/7","type":"function"},{"doc":"Callback implementation for Gettext.Backend.ngettext/4 .","ref":"FleetBot.Gettext.html#ngettext/4","title":"FleetBot.Gettext.ngettext/4","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.ngettext_noop/2 .","ref":"FleetBot.Gettext.html#ngettext_noop/2","title":"FleetBot.Gettext.ngettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pgettext/3 .","ref":"FleetBot.Gettext.html#pgettext/3","title":"FleetBot.Gettext.pgettext/3","type":"macro"},{"doc":"","ref":"FleetBot.Gettext.html#pgettext_noop/2","title":"FleetBot.Gettext.pgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pngettext/5 .","ref":"FleetBot.Gettext.html#pngettext/5","title":"FleetBot.Gettext.pngettext/5","type":"macro"},{"doc":"","ref":"FleetBot.Gettext.html#pngettext_noop/3","title":"FleetBot.Gettext.pngettext_noop/3","type":"macro"},{"doc":"","ref":"FleetBot.Repo.html","title":"FleetBot.Repo","type":"module"},{"doc":"Callback implementation for Ecto.Repo.aggregate/3 .","ref":"FleetBot.Repo.html#aggregate/3","title":"FleetBot.Repo.aggregate/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.aggregate/4 .","ref":"FleetBot.Repo.html#aggregate/4","title":"FleetBot.Repo.aggregate/4","type":"function"},{"doc":"Callback implementation for Ecto.Repo.all/2 .","ref":"FleetBot.Repo.html#all/2","title":"FleetBot.Repo.all/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.checked_out?/0 .","ref":"FleetBot.Repo.html#checked_out?/0","title":"FleetBot.Repo.checked_out?/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.checkout/2 .","ref":"FleetBot.Repo.html#checkout/2","title":"FleetBot.Repo.checkout/2","type":"function"},{"doc":"","ref":"FleetBot.Repo.html#child_spec/1","title":"FleetBot.Repo.child_spec/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.config/0 .","ref":"FleetBot.Repo.html#config/0","title":"FleetBot.Repo.config/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.default_options/1 .","ref":"FleetBot.Repo.html#default_options/1","title":"FleetBot.Repo.default_options/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete/2 .","ref":"FleetBot.Repo.html#delete/2","title":"FleetBot.Repo.delete/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete!/2 .","ref":"FleetBot.Repo.html#delete!/2","title":"FleetBot.Repo.delete!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete_all/2 .","ref":"FleetBot.Repo.html#delete_all/2","title":"FleetBot.Repo.delete_all/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that forces all connections in the pool to disconnect within the given interval. See Ecto.Adapters.SQL.disconnect_all/3 for more information.","ref":"FleetBot.Repo.html#disconnect_all/2","title":"FleetBot.Repo.disconnect_all/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.exists?/2 .","ref":"FleetBot.Repo.html#exists?/2","title":"FleetBot.Repo.exists?/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes an EXPLAIN statement or similar depending on the adapter to obtain statistics for the given query. See Ecto.Adapters.SQL.explain/4 for more information.","ref":"FleetBot.Repo.html#explain/3","title":"FleetBot.Repo.explain/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get/3 .","ref":"FleetBot.Repo.html#get/3","title":"FleetBot.Repo.get/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get!/3 .","ref":"FleetBot.Repo.html#get!/3","title":"FleetBot.Repo.get!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_by/3 .","ref":"FleetBot.Repo.html#get_by/3","title":"FleetBot.Repo.get_by/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_by!/3 .","ref":"FleetBot.Repo.html#get_by!/3","title":"FleetBot.Repo.get_by!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_dynamic_repo/0 .","ref":"FleetBot.Repo.html#get_dynamic_repo/0","title":"FleetBot.Repo.get_dynamic_repo/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.in_transaction?/0 .","ref":"FleetBot.Repo.html#in_transaction?/0","title":"FleetBot.Repo.in_transaction?/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert/2 .","ref":"FleetBot.Repo.html#insert/2","title":"FleetBot.Repo.insert/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert!/2 .","ref":"FleetBot.Repo.html#insert!/2","title":"FleetBot.Repo.insert!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_all/3 .","ref":"FleetBot.Repo.html#insert_all/3","title":"FleetBot.Repo.insert_all/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_or_update/2 .","ref":"FleetBot.Repo.html#insert_or_update/2","title":"FleetBot.Repo.insert_or_update/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_or_update!/2 .","ref":"FleetBot.Repo.html#insert_or_update!/2","title":"FleetBot.Repo.insert_or_update!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.load/2 .","ref":"FleetBot.Repo.html#load/2","title":"FleetBot.Repo.load/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.one/2 .","ref":"FleetBot.Repo.html#one/2","title":"FleetBot.Repo.one/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.one!/2 .","ref":"FleetBot.Repo.html#one!/2","title":"FleetBot.Repo.one!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.preload/3 .","ref":"FleetBot.Repo.html#preload/3","title":"FleetBot.Repo.preload/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.prepare_query/3 .","ref":"FleetBot.Repo.html#prepare_query/3","title":"FleetBot.Repo.prepare_query/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.put_dynamic_repo/1 .","ref":"FleetBot.Repo.html#put_dynamic_repo/1","title":"FleetBot.Repo.put_dynamic_repo/1","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given query. See Ecto.Adapters.SQL.query/4 for more information.","ref":"FleetBot.Repo.html#query/3","title":"FleetBot.Repo.query/3","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given query. See Ecto.Adapters.SQL.query!/4 for more information.","ref":"FleetBot.Repo.html#query!/3","title":"FleetBot.Repo.query!/3","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given multi-result query. See Ecto.Adapters.SQL.query_many/4 for more information.","ref":"FleetBot.Repo.html#query_many/3","title":"FleetBot.Repo.query_many/3","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given multi-result query. See Ecto.Adapters.SQL.query_many!/4 for more information.","ref":"FleetBot.Repo.html#query_many!/3","title":"FleetBot.Repo.query_many!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.reload/2 .","ref":"FleetBot.Repo.html#reload/2","title":"FleetBot.Repo.reload/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.reload!/2 .","ref":"FleetBot.Repo.html#reload!/2","title":"FleetBot.Repo.reload!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.rollback/1 .","ref":"FleetBot.Repo.html#rollback/1","title":"FleetBot.Repo.rollback/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.start_link/1 .","ref":"FleetBot.Repo.html#start_link/1","title":"FleetBot.Repo.start_link/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.stop/1 .","ref":"FleetBot.Repo.html#stop/1","title":"FleetBot.Repo.stop/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.stream/2 .","ref":"FleetBot.Repo.html#stream/2","title":"FleetBot.Repo.stream/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that translates the given query to SQL. See Ecto.Adapters.SQL.to_sql/3 for more information.","ref":"FleetBot.Repo.html#to_sql/2","title":"FleetBot.Repo.to_sql/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.transaction/2 .","ref":"FleetBot.Repo.html#transaction/2","title":"FleetBot.Repo.transaction/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update/2 .","ref":"FleetBot.Repo.html#update/2","title":"FleetBot.Repo.update/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update!/2 .","ref":"FleetBot.Repo.html#update!/2","title":"FleetBot.Repo.update!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update_all/3 .","ref":"FleetBot.Repo.html#update_all/3","title":"FleetBot.Repo.update_all/3","type":"function"},{"doc":"","ref":"FleetBot.Repo.Discord.FleetyardsAccount.html","title":"FleetBot.Repo.Discord.FleetyardsAccount","type":"module"},{"doc":"","ref":"FleetBot.Repo.Discord.FleetyardsAccount.html#add_account/2","title":"FleetBot.Repo.Discord.FleetyardsAccount.add_account/2","type":"function"},{"doc":"","ref":"FleetBot.Repo.Discord.FleetyardsAccount.html#add_aoount/2","title":"FleetBot.Repo.Discord.FleetyardsAccount.add_aoount/2","type":"function"},{"doc":"","ref":"FleetBot.Repo.Discord.FleetyardsAccount.html#create_changeset/2","title":"FleetBot.Repo.Discord.FleetyardsAccount.create_changeset/2","type":"function"},{"doc":"","ref":"FleetBot.Repo.Discord.FleetyardsAccount.html#get_account/1","title":"FleetBot.Repo.Discord.FleetyardsAccount.get_account/1","type":"function"},{"doc":"","ref":"FleetBot.Repo.Discord.FleetyardsAccount.html#t:t/0","title":"FleetBot.Repo.Discord.FleetyardsAccount.t/0","type":"type"}]