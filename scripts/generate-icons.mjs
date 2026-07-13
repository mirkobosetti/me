/**
 * Generates the favicon set and the Open Graph image from the committed SVG
 * sources. Run from the repo root (requires ffmpeg for the .ico):
 *   node scripts/generate-icons.mjs
 */
import { execFileSync } from 'node:child_process'
import { unlinkSync } from 'node:fs'
import sharp from 'sharp'

const render = (src, size, out) =>
  sharp(src, { density: 384 }).resize(size.w ?? size, size.h ?? size).png().toFile(out)

await render('public/favicon.svg', 32, 'public/icon-32.png')
await render('public/favicon.svg', 192, 'public/icon-192.png')
await render('public/favicon.svg', 512, 'public/icon-512.png')
await render('scripts/assets/icon-padded.svg', 180, 'public/apple-touch-icon.png')
await render('scripts/assets/og.svg', { w: 1200, h: 630 }, 'public/og.png')

// ffmpeg has an ICO muxer; a single 32px entry is enough alongside the SVG icon
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', 'public/icon-32.png', 'public/favicon.ico'])
unlinkSync('public/icon-32.png')

console.log('generated: favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png, og.png')
