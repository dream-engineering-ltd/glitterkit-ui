#!/usr/bin/env node

import os from "node:os"
import path from "node:path"
import { spawn } from "node:child_process"
import { writeFile } from "fs/promises"

const BIN_PATH = path.resolve(import.meta.dirname, "glitterkit")
const VERSION = "v1.1.0"

;(async function () {
  const platform = os.platform()
  const arch = os.arch()

  const supportedPlatforms = ["linux", "darwin", "windows"]
  const supportedArchitectures = ["amd64", "arm64"]

  if (!supportedPlatforms.includes(platform)) {
    console.log("Platform not supported yet, please file a github issue.")
  }

  if (!supportedArchitectures.includes(arch)) {
    console.log("Architecture not supported yet, please file a github issue.")
  }

  await downloadBinary(platform, arch)

  spawnBinary()
})()

async function downloadBinary(platform, arch) {
  // TODO check if already cached, as that would be the
  // expected npx behavior

  // TODO allow user to pass version number arg and use that, for now use main
  // glitterkit --version=1.0.0
  // version = process.argv[3]

  const baseUrl = "https://bin.fantasy-ui.com"
  const file = `${platform}-${arch}`

  const res = await fetch(`${baseUrl}/${VERSION}/${file}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/octet-stream",
    },
    responseType: "arraybuffer",
  })

  const arrBuf = await res.arrayBuffer()
  await writeFile(BIN_PATH, Buffer.from(arrBuf), { mode: 0o755 })
}

const spawnBinary = () => {
  // pass cli args
  const args = process.argv.slice(2)

  const child = spawn(BIN_PATH, args, {
    stdio: "inherit", // pass through stdio to preserve formatting
  })

  child.on("error", err => {
    console.error("Failed to start GlitterKit UI:", err)
  })
}
