sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"}],"modules":[{"group":"","id":"FleetBot","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"hello/0","id":"hello/0","title":"hello()"}]}],"sections":[],"title":"FleetBot"},{"group":"","id":"FleetBot.Discord","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"chat_command_allowed_regex/0","id":"chat_command_allowed_regex/0","title":"chat_command_allowed_regex()"},{"anchor":"child_spec/1","id":"child_spec/1","title":"child_spec(arg)"},{"anchor":"get_subcommand_name/1","id":"get_subcommand_name/1","title":"get_subcommand_name(arg1)"},{"anchor":"start_link/0","id":"start_link/0","title":"start_link()"},{"anchor":"start_link/1","id":"start_link/1","title":"start_link(event)"},{"anchor":"validate_snowflake/3","id":"validate_snowflake/3","title":"validate_snowflake(changeset, field, opts \\\\ [])"}]}],"sections":[],"title":"FleetBot.Discord"},{"group":"","id":"FleetBot.Discord.Command","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:command/2","id":"command/2","title":"command(t, %Nostrum.Struct.Interaction{})"},{"anchor":"c:global_commands/0","id":"global_commands/0","title":"global_commands()"},{"anchor":"c:remove_global_commands/0","id":"remove_global_commands/0","title":"remove_global_commands()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"create_interaction_response/2","id":"create_interaction_response/2","title":"create_interaction_response(type, data \\\\ nil)"},{"anchor":"create_interaction_response_data/1","id":"create_interaction_response_data/1","title":"create_interaction_response_data(opts)"},{"anchor":"interaction_response_data_flags/1","id":"interaction_response_data_flags/1","title":"interaction_response_data_flags(flags)"},{"anchor":"interaction_response_type/1","id":"interaction_response_type/1","title":"interaction_response_type(v)"}]}],"sections":[],"title":"FleetBot.Discord.Command"},{"group":"","id":"FleetBot.Discord.Commands","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1","title":"child_spec(init_arg)"},{"anchor":"get_commands/0","id":"get_commands/0","title":"get_commands()"},{"anchor":"get_supervised_commands/1","id":"get_supervised_commands/1","title":"get_supervised_commands(commands \\\\ get_commands())"},{"anchor":"start_link/1","id":"start_link/1","title":"start_link(opts)"}]}],"sections":[],"title":"FleetBot.Discord.Commands"},{"group":"","id":"FleetBot.Discord.Commands.Register","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:delete_global_commands/0","id":"delete_global_commands/0","title":"delete_global_commands()"},{"anchor":"c:global_commands/0","id":"global_commands/0","title":"global_commands()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"create_choice/3","id":"create_choice/3","title":"create_choice(name, value, opts \\\\ [])"},{"anchor":"create_command/3","id":"create_command/3","title":"create_command(name, description, opts \\\\ [])"},{"anchor":"create_option/3","id":"create_option/3","title":"create_option(name, description, opts \\\\ [])"},{"anchor":"localization_dict/1","id":"localization_dict/1","title":"localization_dict(key)"}]}],"sections":[],"title":"FleetBot.Discord.Commands.Register"},{"group":"","id":"FleetBot.Discord.Commands.RegisterManager","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1","title":"child_spec(init_arg)"},{"anchor":"get_module/1","id":"get_module/1","title":"get_module(command)"},{"anchor":"register_global_command/1","id":"register_global_command/1","title":"register_global_command(module)"},{"anchor":"register_global_commands/0","id":"register_global_commands/0","title":"register_global_commands()"},{"anchor":"remove_global_command/1","id":"remove_global_command/1","title":"remove_global_command(name)"},{"anchor":"remove_global_commands/0","id":"remove_global_commands/0","title":"remove_global_commands()"},{"anchor":"set_ready/0","id":"set_ready/0","title":"set_ready()"},{"anchor":"start_link/1","id":"start_link/1","title":"start_link(opts \\\\ nil)"}]}],"sections":[],"title":"FleetBot.Discord.Commands.RegisterManager"},{"group":"","id":"FleetBot.Discord.Fleetyards","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"fleetyards_command/2","id":"fleetyards_command/2","title":"fleetyards_command(binary, interaction)"}]}],"sections":[],"title":"FleetBot.Discord.Fleetyards"},{"group":"","id":"FleetBot.Fleetyards","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"get_auth_header/1","id":"get_auth_header/1","title":"get_auth_header(token)"}]}],"sections":[],"title":"FleetBot.Fleetyards"},{"group":"","id":"FleetBot.Fleetyards.Client","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:body/0","id":"body/0","title":"body()"},{"anchor":"t:headers/0","id":"headers/0","title":"headers()"},{"anchor":"t:method/0","id":"method/0","title":"method()"},{"anchor":"t:options/0","id":"options/0","title":"options()"},{"anchor":"t:params/0","id":"params/0","title":"params()"},{"anchor":"t:request/0","id":"request/0","title":"request()"},{"anchor":"t:url/0","id":"url/0","title":"url()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"api_url/0","id":"api_url/0","title":"api_url()"},{"anchor":"delete/3","id":"delete/3","title":"delete(url, headers \\\\ [], options \\\\ [])"},{"anchor":"delete!/3","id":"delete!/3","title":"delete!(url, headers \\\\ [], options \\\\ [])"},{"anchor":"get/3","id":"get/3","title":"get(url, headers \\\\ [], options \\\\ [])"},{"anchor":"get!/3","id":"get!/3","title":"get!(url, headers \\\\ [], options \\\\ [])"},{"anchor":"get_version/0","id":"get_version/0","title":"get_version()"},{"anchor":"head/3","id":"head/3","title":"head(url, headers \\\\ [], options \\\\ [])"},{"anchor":"head!/3","id":"head!/3","title":"head!(url, headers \\\\ [], options \\\\ [])"},{"anchor":"options/3","id":"options/3","title":"options(url, headers \\\\ [], options \\\\ [])"},{"anchor":"options!/3","id":"options!/3","title":"options!(url, headers \\\\ [], options \\\\ [])"},{"anchor":"patch/4","id":"patch/4","title":"patch(url, body, headers \\\\ [], options \\\\ [])"},{"anchor":"patch!/4","id":"patch!/4","title":"patch!(url, body, headers \\\\ [], options \\\\ [])"},{"anchor":"post/4","id":"post/4","title":"post(url, body, headers \\\\ [], options \\\\ [])"},{"anchor":"post!/4","id":"post!/4","title":"post!(url, body, headers \\\\ [], options \\\\ [])"},{"anchor":"process_headers/1","id":"process_headers/1","title":"process_headers(headers)"},{"anchor":"process_request_options/1","id":"process_request_options/1","title":"process_request_options(options)"},{"anchor":"process_request_params/1","id":"process_request_params/1","title":"process_request_params(params)"},{"anchor":"process_response/1","id":"process_response/1","title":"process_response(response)"},{"anchor":"process_response_chunk/1","id":"process_response_chunk/1","title":"process_response_chunk(chunk)"},{"anchor":"process_response_headers/1","id":"process_response_headers/1","title":"process_response_headers(headers)"},{"anchor":"process_response_status_code/1","id":"process_response_status_code/1","title":"process_response_status_code(status_code)"},{"anchor":"process_status_code/1","id":"process_status_code/1","title":"process_status_code(status_code)"},{"anchor":"process_url/1","id":"process_url/1","title":"process_url(url)"},{"anchor":"put/4","id":"put/4","title":"put(url, body \\\\ \"\", headers \\\\ [], options \\\\ [])"},{"anchor":"put!/4","id":"put!/4","title":"put!(url, body \\\\ \"\", headers \\\\ [], options \\\\ [])"},{"anchor":"request/1","id":"request/1","title":"request(request)"},{"anchor":"request/5","id":"request/5","title":"request(method, url, body \\\\ \"\", headers \\\\ [], options \\\\ [])"},{"anchor":"request!/5","id":"request!/5","title":"request!(method, url, body \\\\ \"\", headers \\\\ [], options \\\\ [])"},{"anchor":"start/0","id":"start/0","title":"start()"},{"anchor":"stream_next/1","id":"stream_next/1","title":"stream_next(resp)"}]}],"sections":[],"title":"FleetBot.Fleetyards.Client"},{"group":"","id":"FleetBot.Fleetyards.Session","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"login/2","id":"login/2","title":"login(username, password)"},{"anchor":"logout/1","id":"logout/1","title":"logout(token)"}]}],"sections":[],"title":"FleetBot.Fleetyards.Session"},{"group":"","id":"FleetBot.Gettext","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"debug/2","id":"debug/2","title":"debug(msg, opts \\\\ [])"},{"anchor":"dgettext/3","id":"dgettext/3","title":"dgettext(domain, msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dgettext_noop/2","id":"dgettext_noop/2","title":"dgettext_noop(domain, msgid)"},{"anchor":"dngettext/5","id":"dngettext/5","title":"dngettext(domain, msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dngettext_noop/3","id":"dngettext_noop/3","title":"dngettext_noop(domain, msgid, msgid_plural)"},{"anchor":"dpgettext/4","id":"dpgettext/4","title":"dpgettext(domain, msgctxt, msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dpgettext_noop/3","id":"dpgettext_noop/3","title":"dpgettext_noop(domain, msgctxt, msgid)"},{"anchor":"dpngettext/6","id":"dpngettext/6","title":"dpngettext(domain, msgctxt, msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dpngettext_noop/4","id":"dpngettext_noop/4","title":"dpngettext_noop(domain, msgctxt, msgid, msgid_plural)"},{"anchor":"error/2","id":"error/2","title":"error(msg, opts \\\\ [])"},{"anchor":"gettext/2","id":"gettext/2","title":"gettext(msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"gettext_comment/1","id":"gettext_comment/1","title":"gettext_comment(comment)"},{"anchor":"gettext_noop/1","id":"gettext_noop/1","title":"gettext_noop(msgid)"},{"anchor":"handle_missing_bindings/2","id":"handle_missing_bindings/2","title":"handle_missing_bindings(exception, incomplete)"},{"anchor":"handle_missing_plural_translation/7","id":"handle_missing_plural_translation/7","title":"handle_missing_plural_translation(locale, domain, msgctxt, msgid, msgid_plural, n, bindings)"},{"anchor":"handle_missing_translation/5","id":"handle_missing_translation/5","title":"handle_missing_translation(locale, domain, msgctxt, msgid, bindings)"},{"anchor":"info/2","id":"info/2","title":"info(msg, opts \\\\ [])"},{"anchor":"lgettext/5","id":"lgettext/5","title":"lgettext(locale, domain, msgctxt \\\\ nil, msgid, bindings)"},{"anchor":"lngettext/7","id":"lngettext/7","title":"lngettext(locale, domain, msgctxt \\\\ nil, msgid, msgid_plural, n, bindings)"},{"anchor":"ngettext/4","id":"ngettext/4","title":"ngettext(msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"ngettext_noop/2","id":"ngettext_noop/2","title":"ngettext_noop(msgid, msgid_plural)"},{"anchor":"pgettext/3","id":"pgettext/3","title":"pgettext(msgctxt, msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"pgettext_noop/2","id":"pgettext_noop/2","title":"pgettext_noop(msgid, context)"},{"anchor":"pngettext/5","id":"pngettext/5","title":"pngettext(msgctxt, msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"pngettext_noop/3","id":"pngettext_noop/3","title":"pngettext_noop(msgctxt, msgid, msgid_plural)"}]}],"sections":[],"title":"FleetBot.Gettext"},{"group":"","id":"FleetBot.Repo","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"aggregate/3","id":"aggregate/3","title":"aggregate(queryable, aggregate, opts \\\\ [])"},{"anchor":"aggregate/4","id":"aggregate/4","title":"aggregate(queryable, aggregate, field, opts)"},{"anchor":"all/2","id":"all/2","title":"all(queryable, opts \\\\ [])"},{"anchor":"checked_out?/0","id":"checked_out?/0","title":"checked_out?()"},{"anchor":"checkout/2","id":"checkout/2","title":"checkout(fun, opts \\\\ [])"},{"anchor":"child_spec/1","id":"child_spec/1","title":"child_spec(opts)"},{"anchor":"config/0","id":"config/0","title":"config()"},{"anchor":"default_options/1","id":"default_options/1","title":"default_options(operation)"},{"anchor":"delete/2","id":"delete/2","title":"delete(struct, opts \\\\ [])"},{"anchor":"delete!/2","id":"delete!/2","title":"delete!(struct, opts \\\\ [])"},{"anchor":"delete_all/2","id":"delete_all/2","title":"delete_all(queryable, opts \\\\ [])"},{"anchor":"disconnect_all/2","id":"disconnect_all/2","title":"disconnect_all(interval, opts \\\\ [])"},{"anchor":"exists?/2","id":"exists?/2","title":"exists?(queryable, opts \\\\ [])"},{"anchor":"explain/3","id":"explain/3","title":"explain(operation, queryable, opts \\\\ [])"},{"anchor":"get/3","id":"get/3","title":"get(queryable, id, opts \\\\ [])"},{"anchor":"get!/3","id":"get!/3","title":"get!(queryable, id, opts \\\\ [])"},{"anchor":"get_by/3","id":"get_by/3","title":"get_by(queryable, clauses, opts \\\\ [])"},{"anchor":"get_by!/3","id":"get_by!/3","title":"get_by!(queryable, clauses, opts \\\\ [])"},{"anchor":"get_dynamic_repo/0","id":"get_dynamic_repo/0","title":"get_dynamic_repo()"},{"anchor":"in_transaction?/0","id":"in_transaction?/0","title":"in_transaction?()"},{"anchor":"insert/2","id":"insert/2","title":"insert(struct, opts \\\\ [])"},{"anchor":"insert!/2","id":"insert!/2","title":"insert!(struct, opts \\\\ [])"},{"anchor":"insert_all/3","id":"insert_all/3","title":"insert_all(schema_or_source, entries, opts \\\\ [])"},{"anchor":"insert_or_update/2","id":"insert_or_update/2","title":"insert_or_update(changeset, opts \\\\ [])"},{"anchor":"insert_or_update!/2","id":"insert_or_update!/2","title":"insert_or_update!(changeset, opts \\\\ [])"},{"anchor":"load/2","id":"load/2","title":"load(schema_or_types, data)"},{"anchor":"one/2","id":"one/2","title":"one(queryable, opts \\\\ [])"},{"anchor":"one!/2","id":"one!/2","title":"one!(queryable, opts \\\\ [])"},{"anchor":"preload/3","id":"preload/3","title":"preload(struct_or_structs_or_nil, preloads, opts \\\\ [])"},{"anchor":"prepare_query/3","id":"prepare_query/3","title":"prepare_query(operation, query, opts)"},{"anchor":"put_dynamic_repo/1","id":"put_dynamic_repo/1","title":"put_dynamic_repo(dynamic)"},{"anchor":"query/3","id":"query/3","title":"query(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"query!/3","id":"query!/3","title":"query!(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"query_many/3","id":"query_many/3","title":"query_many(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"query_many!/3","id":"query_many!/3","title":"query_many!(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"reload/2","id":"reload/2","title":"reload(queryable, opts \\\\ [])"},{"anchor":"reload!/2","id":"reload!/2","title":"reload!(queryable, opts \\\\ [])"},{"anchor":"rollback/1","id":"rollback/1","title":"rollback(value)"},{"anchor":"start_link/1","id":"start_link/1","title":"start_link(opts \\\\ [])"},{"anchor":"stop/1","id":"stop/1","title":"stop(timeout \\\\ 5000)"},{"anchor":"stream/2","id":"stream/2","title":"stream(queryable, opts \\\\ [])"},{"anchor":"to_sql/2","id":"to_sql/2","title":"to_sql(operation, queryable)"},{"anchor":"transaction/2","id":"transaction/2","title":"transaction(fun_or_multi, opts \\\\ [])"},{"anchor":"update/2","id":"update/2","title":"update(struct, opts \\\\ [])"},{"anchor":"update!/2","id":"update!/2","title":"update!(struct, opts \\\\ [])"},{"anchor":"update_all/3","id":"update_all/3","title":"update_all(queryable, updates, opts \\\\ [])"}]}],"sections":[],"title":"FleetBot.Repo"},{"group":"","id":"FleetBot.Repo.Discord.FleetyardsAccount","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0","title":"t()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"add_account/2","id":"add_account/2","title":"add_account(user_id, token)"},{"anchor":"add_aoount/2","id":"add_aoount/2","title":"add_aoount(user, token)"},{"anchor":"create_changeset/2","id":"create_changeset/2","title":"create_changeset(account \\\\ %__MODULE__{}, attrs)"},{"anchor":"get_account/1","id":"get_account/1","title":"get_account(user_id)"}]}],"sections":[],"title":"FleetBot.Repo.Discord.FleetyardsAccount"}],"tasks":[]}