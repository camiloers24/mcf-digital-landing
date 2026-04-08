#!/usr/bin/env node
/**
 * Generate placeholder OG images and logo from SVG templates.
 * Run: node scripts/generate-placeholders.mjs
 *
 * Requires: sharp (npm install --save-dev sharp)
 * Outputs:  public/assets/*.png  +  public/assets/svg-sources/*.svg
 */
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const assetsDir = resolve(root, 'public/assets')
const svgDir = resolve(root, 'public/assets/svg-sources')

// ── OG image definitions (1200×630) ────────────────────────────────

const ogPages = [
  { file: 'og-home',    title: 'Turn Stranded Gas Into Bitcoin\nProduction | MCF.digital' },
  { file: 'og-flare',   title: 'Flare Gas Bitcoin Mining\nfor Operators | MCF.digital' },
  { file: 'og-netback', title: 'Beat Low Gas Netbacks with\nOn-Lease Bitcoin Mining | MCF.digital' },
  { file: 'og-miners',  title: 'Reliable Stranded Gas Mining Pads\nField-Ready Compute | MCF.digital' },
  { file: 'og-hnwi',    title: 'Real-Asset Bitcoin Investment\nStranded Gas Projects | MCF.digital' },
  { file: 'og-about',   title: 'About MCF.digital | Stranded Gas\nto Bitcoin Build-and-Run Operator' },
  { file: 'og-contact', title: 'Contact MCF.digital | Talk to\na Stranded Gas Engineer' },
]

// ── SVG builders ───────────────────────────────────────────────────

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildOgSvg(title) {
  const lines = title.split('\n')
  const titleTspans = lines
    .map((line, i) => {
      const y = lines.length === 1 ? 315 : 290 + i * 52
      return `    <tspan x="600" dy="${i === 0 ? 0 : 52}">${escapeXml(line)}</tspan>`
    })
    .join('\n')

  // Calculate starting y so the block is vertically centered
  const blockHeight = (lines.length - 1) * 52
  const startY = 315 - blockHeight / 2

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <!-- Wordmark top-left -->
  <text x="48" y="56" font-family="monospace, sans-serif" font-size="28" font-weight="bold" fill="#ffffff" letter-spacing="2">MCF.DIGITAL</text>
  <!-- Accent bar -->
  <rect x="48" y="72" width="160" height="3" rx="1.5" fill="#f97316"/>
  <!-- Page title centered -->
  <text x="600" y="${startY}" font-family="monospace, sans-serif" font-size="40" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="central">
${titleTspans}
  </text>
  <!-- Placeholder notice bottom-right -->
  <text x="1152" y="600" font-family="monospace, sans-serif" font-size="14" fill="#666666" text-anchor="end">PLACEHOLDER — REPLACE BEFORE PROD</text>
</svg>`
}

function buildLogoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <!-- Transparent background -->
  <!-- Wordmark centered -->
  <text x="256" y="240" font-family="monospace, sans-serif" font-size="56" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="central">MCF.DIGITAL</text>
  <!-- Accent bar -->
  <rect x="130" y="272" width="252" height="4" rx="2" fill="#f97316"/>
  <!-- Placeholder tag bottom-right -->
  <text x="480" y="490" font-family="monospace, sans-serif" font-size="12" fill="#666666" text-anchor="end">PLACEHOLDER</text>
</svg>`
}

// ── Generate ───────────────────────────────────────────────────────

async function main() {
  const results = []

  // OG images
  for (const { file, title } of ogPages) {
    const svg = buildOgSvg(title)
    const svgPath = resolve(svgDir, `${file}.svg`)
    const pngPath = resolve(assetsDir, `${file}.png`)

    writeFileSync(svgPath, svg)
    await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile(pngPath)

    results.push({ file: `${file}.png`, path: pngPath })
  }

  // Logo
  {
    const svg = buildLogoSvg()
    const svgPath = resolve(svgDir, 'logo.svg')
    const pngPath = resolve(assetsDir, 'logo.png')

    writeFileSync(svgPath, svg)
    await sharp(Buffer.from(svg)).resize(512, 512).png().toFile(pngPath)

    results.push({ file: 'logo.png', path: pngPath })
  }

  // Report
  console.log('\nGenerated placeholder images:\n')
  for (const r of results) {
    const { size } = await sharp(r.path).metadata().then(() => {
      return import('node:fs').then(fs => fs.statSync(r.path))
    })
    console.log(`  ${r.file.padEnd(20)} ${(size / 1024).toFixed(1).padStart(6)} KB   ${r.path}`)
  }
  console.log('')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
