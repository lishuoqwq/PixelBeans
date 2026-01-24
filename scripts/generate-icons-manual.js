const fs = require('fs');
const path = require('path');

// 读取SVG文件
const svgPath = path.join(__dirname, '../public/icon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// 创建不同尺寸的PNG图标
// 注意：这需要安装 sharp 或使用在线工具转换
// 这里我们创建一个简单的说明文档

const sizes = [192, 256, 384, 512];

console.log('='.repeat(60));
console.log('图标生成说明');
console.log('='.repeat(60));
console.log('');
console.log('已创建SVG图标: public/icon.svg');
console.log('');
console.log('要生成PNG图标，请使用以下方法之一：');
console.log('');
console.log('方法1: 使用在线工具');
console.log('  1. 访问 https://cloudconvert.com/svg-to-png');
console.log('  2. 上传 public/icon.svg');
console.log('  3. 分别生成以下尺寸:', sizes.join(', '));
console.log('  4. 保存为 icon-{size}x{size}.png 到 public 目录');
console.log('');
console.log('方法2: 使用 ImageMagick (如果已安装)');
console.log('  for size in 192 256 384 512; do');
console.log('    convert -background none public/icon.svg -resize ${size}x${size} public/icon-${size}x${size}.png');
console.log('  done');
console.log('');
console.log('方法3: 使用 sharp (需要安装)');
console.log('  npm install sharp');
console.log('  然后运行 node scripts/generate-icons.js');
console.log('');
console.log('='.repeat(60));
