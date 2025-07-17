const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Ukuran standar untuk OG Image
const width = 1200;
const height = 630;

async function generateOGImage() {
  try {
    // Membuat canvas
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Mengatur background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#EFF6FF'); // blue-50
    gradient.addColorStop(1, '#FFFFFF'); // white
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Menambahkan logo
    try {
      const bmkgLogo = await loadImage(path.join(__dirname, '../../public/Logo-BMKG.png'));
      const stmkgLogo = await loadImage(path.join(__dirname, '../../public/Logo-STMKG.png'));
      const medanLogo = await loadImage(path.join(__dirname, '../../public/Logo-Kota-Medan.png'));
      const kknLogo = await loadImage(path.join(__dirname, '../../public/Logo-KKN.png'));
      
      // Ukuran logo
      const logoSize = 100;
      const logoY = 50;
      const spacing = 150;
      
      // Menggambar logo
      ctx.drawImage(bmkgLogo, 100, logoY, logoSize, logoSize);
      ctx.drawImage(stmkgLogo, 100 + spacing, logoY, logoSize, logoSize);
      ctx.drawImage(medanLogo, 100 + spacing * 2, logoY, logoSize, logoSize);
      ctx.drawImage(kknLogo, 100 + spacing * 3, logoY, logoSize, logoSize);
    } catch (error) {
      console.log('Warning: Could not load one or more logos', error);
    }

    // Menambahkan judul
    ctx.fillStyle = '#1E3A8A'; // blue-900
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('BARGEMCU', width / 2, 300);

    // Menambahkan subtitle
    ctx.fillStyle = '#2563EB'; // blue-600
    ctx.font = 'italic 36px Arial';
    ctx.fillText('Barcode Gempa dan Cuaca', width / 2, 360);

    // Menambahkan deskripsi
    ctx.fillStyle = '#4B5563'; // gray-600
    ctx.font = '24px Arial';
    ctx.fillText('Kelurahan Beringin, Kecamatan Medan Selayang', width / 2, 420);

    // Menambahkan URL website
    ctx.fillStyle = '#1F2937'; // gray-800
    ctx.font = '20px Arial';
    ctx.fillText('bargemcu.netlify.app', width / 2, 580);

    // Menyimpan gambar
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(path.join(__dirname, '../../public/og-image.jpg'), buffer);

    console.log('OG Image berhasil dibuat di public/og-image.jpg');
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

generateOGImage(); 