# ATLAS Terminal Plugin

**Languages:** [Deutsch](README.md) · [English](README.en.md) · [Français](README.fr.md)

ATLAS Terminal is a standalone plugin frontend for an authenticated browser terminal. The ATLAS host provides the shell, Supervisor and WebSocket backend; this repository is not a standalone SSH server or Home Assistant add-on.

## Session behavior

The access-token settings are collapsible. They close when a session connects and reopen after disconnecting or when the session ends. If this browser has no saved token, the settings are open on initial load. Local shell sessions start at `/`, the filesystem root inside the ATLAS container, instead of `/app`. SSH sessions keep the remote server's default working directory.

## Setup and security

Add the plugin through [ATLAS Administration](https://rockbaer2007.github.io/atlas-terminal-plugin/install.html). The terminal is disabled by default and requires a strong, random token of at least 32 URL-safe characters on the ATLAS host. The token stays in local browser storage and is sent during connection setup through the WebSocket subprotocol, not in a URL. Use the terminal only in a trusted browser profile; local shell access has the permissions of the ATLAS process.

Optional SSH must be configured on the server with a host, user, private key and `known_hosts` file. Host-key verification stays enabled and the browser cannot choose an arbitrary target.
