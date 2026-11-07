#!/usr/bin/env node
import { createRequire } from "node:module"
import { spawn } from "node:child_process"
import path from "node:path"

const require = createRequire(import.meta.url)
const key = process.platform === "win32" ? `windows-${process.arch}` : `${process.platform}-${process.arch}`
let entry
try {
  entry = path.join(path.dirname(require.resolve(`@me0wo/opencode-${key}/package.json`)), "opencode.mjs")
} catch {
  console.error(`@me0wo/opencode: no bundle available for ${key} (supported: linux-x64, darwin-arm64, windows-x64)`)
  process.exit(1)
}
const child = spawn(process.execPath, [entry, ...process.argv.slice(2)], { stdio: "inherit" })
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  else process.exitCode = code ?? 1
})
