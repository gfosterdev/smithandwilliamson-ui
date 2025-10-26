#!/usr/bin/env node
/* Image optimization script.
   Scans src/assets/portfolio for images and writes resized JPEG and WebP
   variants into src/assets/portfolio/optimized, and writes a manifest.json
   describing srcsets.
*/
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = path.resolve(process.cwd(), 'src', 'assets', 'portfolio');
const outDir = path.join(root, 'optimized');
const widths = [400, 800, 1200];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const input = path.join(root, file);
  const entry = { webp: [], jpg: [] };
  for (const w of widths) {
    const outWebp = path.join(outDir, `${base}-${w}.webp`);
    const outJpg = path.join(outDir, `${base}-${w}.jpg`);
    await sharp(input).resize(w).webp({ quality: 80 }).toFile(outWebp);
    await sharp(input).resize(w).jpeg({ quality: 82 }).toFile(outJpg);
    entry.webp.push(`./optimized/${base}-${w}.webp ${w}w`);
    entry.jpg.push(`./optimized/${base}-${w}.jpg ${w}w`);
  }
  return { base, entry };
}

async function run() {
  if (!fs.existsSync(root)) {
    console.error('portfolio folder not found at', root);
    process.exit(1);
  }
  await ensureDir(outDir);
  const files = await fs.promises.readdir(root);
  const images = files.filter(f => /\.(jpe?g|png)$/i.test(f) && !f.includes('optimized'));
  const manifest = {};
  for (const f of images) {
    try {
      const { base, entry } = await processImage(f);
      manifest[f] = {
        webp: entry.webp.join(', '),
        jpg: entry.jpg.join(', '),
        fallback: `./${f}`,
      };
      console.log('Processed', f);
    } catch (err) {
      console.error('Failed to process', f, err);
    }
  }
  const manifestPath = path.join(root, 'manifest.json');
  await fs.promises.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Wrote manifest to', manifestPath);
}

run().catch(err => { console.error(err); process.exit(1); });
