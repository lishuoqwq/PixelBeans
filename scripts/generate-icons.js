const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 256, 384, 512];

const generateIcon = async (size) => {
  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="beanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B9D;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8EBA;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="cheekGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFB5D6;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#FFB5D6;stop-opacity:0.3" />
    </linearGradient>
  </defs>

  <!-- Background circle -->
  <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#FFF5F8"/>

  <!-- Main bean body -->
  <rect x="${size * 0.207}" y="${size * 0.207}" width="${size * 0.586}" height="${size * 0.586}" rx="${size * 0.137}" ry="${size * 0.137}" fill="url(#beanGradient)"/>

  <!-- Inner highlight -->
  <ellipse cx="${size * 0.352}" cy="${size * 0.352}" rx="${size * 0.117}" ry="${size * 0.098}" fill="#FFFFFF" opacity="0.3"/>

  <!-- Left eye -->
  <circle cx="${size * 0.371}" cy="${size * 0.449}" r="${size * 0.049}" fill="#2D2D2D"/>
  <circle cx="${size * 0.381}" cy="${size * 0.44}" r="${size * 0.016}" fill="#FFFFFF"/>

  <!-- Right eye -->
  <circle cx="${size * 0.629}" cy="${size * 0.449}" r="${size * 0.049}" fill="#2D2D2D"/>
  <circle cx="${size * 0.639}" cy="${size * 0.44}" r="${size * 0.016}" fill="#FFFFFF"/>

  <!-- Blush cheeks -->
  <ellipse cx="${size * 0.293}" cy="${size * 0.547}" rx="${size * 0.059}" ry="${size * 0.039}" fill="url(#cheekGradient)"/>
  <ellipse cx="${size * 0.707}" cy="${size * 0.547}" rx="${size * 0.059}" ry="${size * 0.039}" fill="url(#cheekGradient)"/>

  <!-- Happy smile -->
  <path d="M ${size * 0.43} ${size * 0.566} Q ${size * 0.5} ${size * 0.645} ${size * 0.57} ${size * 0.566}" stroke="#2D2D2D" stroke-width="${size * 0.016}" fill="none" stroke-linecap="round"/>

  <!-- Center hole -->
  <circle cx="${size/2}" cy="${size/2}" r="${size * 0.029}" fill="#FF5C8E" opacity="0.5"/>

  <!-- Sparkles -->
  <circle cx="${size * 0.273}" cy="${size * 0.293}" r="${size * 0.012}" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="${size * 0.727}" cy="${size * 0.293}" r="${size * 0.012}" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="${size/2}" cy="${size * 0.762}" r="${size * 0.016}" fill="#FFFFFF" opacity="0.8"/>

  <!-- Bow on top -->
  <g transform="translate(${size/2}, ${size * 0.156})">
    <ellipse cx="${-size * 0.059}" cy="0" rx="${size * 0.049}" ry="${size * 0.035}" fill="#FFB5D6"/>
    <ellipse cx="${size * 0.059}" cy="0" rx="${size * 0.049}" ry="${size * 0.035}" fill="#FFB5D6"/>
    <circle cx="0" cy="0" r="${size * 0.023}" fill="#FF6B9D"/>
  </g>
</svg>`;

  const outputPath = path.join(__dirname, '..', 'public', `icon-${size}x${size}.png`);

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`✓ 生成图标: icon-${size}x${size}.png`);
};

async function generateAllIcons() {
  console.log('开始生成可爱拼豆图标...\n');
  for (const size of sizes) {
    await generateIcon(size);
  }
  console.log('\n✓ 所有图标生成完成！');
}

generateAllIcons().catch(console.error);