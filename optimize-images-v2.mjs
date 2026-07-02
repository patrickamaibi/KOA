import sharp from "sharp";
import fs from "fs";
import path from "path";

const INPUT_DIR = "./public/images/webp";
const OUTPUT_DIR = "./public/images/webp-optimized";

const QUALITY = 75;
const MAX_WIDTH = 1600;

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const files = fs.readdirSync(INPUT_DIR).filter((f) => /\.webp$/i.test(f));

async function optimize() {
  let totalOriginal = 0;
  let totalNew = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let pipeline = image;
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH });
    }

    await pipeline.webp({ quality: QUALITY, effort: 6 }).toFile(outputPath);

    const before = fs.statSync(inputPath).size;
    const after = fs.statSync(outputPath).size;
    totalOriginal += before;
    totalNew += after;

    console.log(`${file} | ${(before/1024).toFixed(0)}KB -> ${(after/1024).toFixed(0)}KB`);
  }

  console.log(`\nTotal: ${(totalOriginal/1024/1024).toFixed(2)}MB -> ${(totalNew/1024/1024).toFixed(2)}MB`);
}

optimize().catch(console.error);