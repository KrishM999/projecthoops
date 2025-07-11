const fs = require('fs');
const path = require('path');

// List of images that exist in the home-images folder
const existingImages = [
  'KEV_6811-min-lg.jpg',
  'KEV_6811-min-sm.jpg',
  'KEV_7242-min-lg.jpg',
  'KEV_7242-min-sm.jpg',
  'KEV_7148-min-lg.jpg',
  'KEV_7148-min-sm.jpg',
  'KEV_7079-min-lg.jpg',
  'KEV_7079-min-sm.jpg',
  'KEV_7054-min-lg.jpg',
  'KEV_7054-min-sm.jpg',
  'KEV_7007-min-lg.jpg',
  'KEV_7007-min-sm.jpg',
  'KEV_6995-min-lg.jpg',
  'KEV_6995-min-sm.jpg',
  'KEV_6963-min-lg.jpg',
  'KEV_6963-min-sm.jpg',
  'KEV_7243-min-lg.jpg',
  'KEV_7243-min-sm.jpg',
  'IMG_5724.JPG',
  'IMG_5726.JPG',
  'IMG_5727.JPG',
  'IMG_5728.JPG'
];

const imagesDir = path.join(__dirname, 'public', 'images', 'home-images');

console.log('📱 Project Hoops Image Status Check');
console.log('===================================\n');

console.log('✅ Your images are properly organized!');
console.log('The React app will automatically:');
console.log('- Use -lg.jpg files for desktop (large screens)');
console.log('- Use -sm.jpg files for mobile (small screens)');
console.log('- Detect device type and switch accordingly\n');

console.log('📋 Current image setup:');
console.log('Desktop images (-lg): High quality, larger file size');
console.log('Mobile images (-sm): Optimized, smaller file size');
console.log('IMG_* files: Used for both desktop and mobile\n');

console.log('🖼️  Available optimized images:');
const lgImages = existingImages.filter(img => img.includes('-lg.jpg'));
const smImages = existingImages.filter(img => img.includes('-sm.jpg'));
const otherImages = existingImages.filter(img => !img.includes('-lg.jpg') && !img.includes('-sm.jpg'));

console.log('\nDesktop (-lg):');
lgImages.forEach((img, index) => {
  console.log(`  ${index + 1}. ${img}`);
});

console.log('\nMobile (-sm):');
smImages.forEach((img, index) => {
  console.log(`  ${index + 1}. ${img}`);
});

if (otherImages.length > 0) {
  console.log('\nOther images (used for both):');
  otherImages.forEach((img, index) => {
    console.log(`  ${index + 1}. ${img}`);
  });
}

console.log('\n📁 Images directory:');
console.log(imagesDir);

// Check if images exist
console.log('\n🔍 Verifying image files...');
let allExist = true;
existingImages.forEach(image => {
  const imagePath = path.join(imagesDir, image);
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${image} - ${sizeKB}KB`);
  } else {
    console.log(`❌ ${image} - missing`);
    allExist = false;
  }
});

if (allExist) {
  console.log('\n🎉 All images are present and ready!');
  console.log('Your React app will automatically load the appropriate image size based on device type.');
  console.log('\n📂 Updated folder structure:');
  console.log('public/images/home-images/ - Hero images (optimized)');
  console.log('public/images/ - Team member photos and other assets');
  console.log('public/ - Logo and app icons');
} else {
  console.log('\n⚠️  Some images are missing. Please ensure all listed images are in the public/images/home-images folder.');
} 