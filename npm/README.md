# @me0wo/opencode

Unofficial npm distribution of the [OpenCode V2](https://github.com/anomalyco/opencode) JS bundle, built from upstream stable release tags by [Sn0wo2/opencode-dist](https://github.com/Sn0wo2/opencode-dist).

No runtime is embedded; the launcher runs the platform bundle with your own Node (>= 26) or bun (>= 1.4.4).

```sh
npm i -g @me0wo/opencode
opencode-node --version
```

The platform bundle (`@me0wo/opencode-linux-x64`, `@me0wo/opencode-darwin-arm64`, or `@me0wo/opencode-windows-x64`) is selected automatically via optionalDependencies and ships `opencode.mjs` plus its native assets (pty, file watching, web UI). Run `bunx opencode-node` to execute the bundle with bun instead of Node.
