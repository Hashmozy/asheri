import { cp, mkdir, rm, stat, writeFile } from "node:fs/promises"
import path from "node:path"

const repoRoot = process.cwd()
const exportDir = path.join(repoRoot, "out")
const docsDir = path.join(repoRoot, "docs")

async function main() {
  try {
    const exportStats = await stat(exportDir)

    if (!exportStats.isDirectory()) {
      throw new Error(`Expected ${exportDir} to be a directory.`)
    }
  } catch (error) {
    throw new Error("Static export output was not found. Run `bun run build` first.", {
      cause: error,
    })
  }

  await rm(docsDir, { force: true, recursive: true })
  await mkdir(docsDir, { recursive: true })
  await cp(exportDir, docsDir, { recursive: true })
  await writeFile(path.join(docsDir, ".nojekyll"), "")
}

await main()
