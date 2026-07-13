/**
 * One-shot image optimizer: converts the heavy project screenshots to WebP
 * (max width 1600, quality 80). Run from the repo root:
 *   node scripts/optimize-images.mjs
 * Remember to update the imports in app/data/*.ts when adding new images.
 */
import sharp from 'sharp'

const targets = [
  'project_kingmaker',
  'project_streetsai',
  'project_pixellini_sbarazzini',
  'project_carai'
]

for (const name of targets) {
  const src = `app/assets/images/${name}.png`
  const out = `app/assets/images/${name}.webp`
  const info = await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out)
  console.log(`${out}: ${(info.size / 1024).toFixed(0)}KB`)
}
