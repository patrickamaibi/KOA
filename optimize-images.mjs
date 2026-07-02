import sharp from "sharp";
import fs from "fs";
import path from "path";

const INPUT_DIR = "./public/images/webp";
const OUTPUT_DIR = "./public/images/webp-optimized";

const QUALITY = 82;      // 75-85 = visually near-lossless
const MAX_WIDTH = 1920;  // downscale anything wider than this

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs.readdirSync(INPUT_DIR).filter((f) =>
  /\.webp$/i.test(f)
);

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

    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    totalOriginal += originalSize;
    totalNew += newSize;

    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
    console.log(
      `${file} | ${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB (-${savings}%)`
    );
  }

  const totalSavings = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1);
  console.log(
    `\nDone. ${files.length} images processed.`
  );
  console.log(
    `Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB -> ${(totalNew / 1024 / 1024).toFixed(2)}MB (-${totalSavings}%)`
  );
}

optimize().catch(console.error);