'use client';

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Cloud, Activity, Map, Building2, GraduationCap, AlertCircle,Facebook, Share2, Linkedin, Copy } from "lucide-react"
import { useState } from "react";

export default function HomePage() {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  // URL dan caption untuk share
  const shareData = {
    url: "https://bargemcu.netlify.app", // URL yang baru
    title: "BARGEMCU - Barcode Gempa dan Cuaca Kelurahan Beringin",
    text: "Akses informasi gempa dan cuaca terbaru untuk Kelurahan Beringin, Medan Selayang melalui aplikasi BARGEMCU. Kunjungi sekarang!",
    hashtags: "BARGEMCU,BMKG,STMKG,MedanSelayang,KelurahBeringin,KKN"
  };

  // Fungsi untuk membuat URL share
  const getShareUrl = (platform: 'facebook' | 'whatsapp' | 'linkedin') => {
    switch(platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}&quote=${encodeURIComponent(shareData.text)}`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}&title=${encodeURIComponent(shareData.title)}&summary=${encodeURIComponent(shareData.text)}`;
      default:
        return shareData.url;
    }
  };

  // Fungsi untuk menyalin ke clipboard
  const handleCopyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    // Membuat teks yang akan disalin
    const textToCopy = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}\n\n${shareData.hashtags.split(',').map(tag => '#' + tag).join(' ')}`;
    
    // Copy teks ke clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // Menampilkan pesan berhasil disalin
        setShowCopiedMessage(true);
        // Menghilangkan pesan setelah 3 detik
        setTimeout(() => setShowCopiedMessage(false), 3000);
      })
      .catch(err => {
        console.error('Gagal menyalin teks: ', err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header dengan Logo - Diubah untuk responsif dalam 1 baris */}
        <div className="flex justify-center items-center mb-8 overflow-x-auto whitespace-nowrap py-2 px-1 w-full">
          {/* Logo BMKG */}
          <a 
            href="https://bmkg.go.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-1 sm:mx-2 transition-transform hover:scale-110"
          >
            <Image
              src="/Logo-BMKG.png"
              alt="Logo BMKG"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </a>
          
          {/* Logo STMKG */}
          <a 
            href="https://stmkg.ac.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-1 sm:mx-2 transition-transform hover:scale-110"
          >
            <Image
              src="/Logo-STMKG.png"
              alt="Logo STMKG"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </a>
          
          {/* Logo Kota Medan */}
          <a 
            href="https://portal.medan.go.id/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-1 sm:mx-2 transition-transform hover:scale-110"
          >
            <Image
              src="/Logo-Kota-Medan.png"
              alt="Logo Kota Medan"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </a>
          
          {/* Teks "Kelurahan Beringin" */}
          <a 
            href="https://www.instagram.com/kelurahan_beringin/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 mx-1 sm:mx-2 px-1 transition-transform hover:scale-110"
          >
            <p className="text-black text-xs sm:text-sm md:text-base font-semibold text-center leading-tight">
              Kelurahan<br />Beringin
            </p>
          </a>
          
          {/* Logo KKN */}
          <a 
            href="https://www.instagram.com/kknstmkg.unit1/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-1 sm:mx-2 transition-transform hover:scale-110"
          >
            <Image
              src="/Logo-KKN.png"
              alt="Logo KKN"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </a>

          {/* Logo Dikti */}
          <a 
            href="https://www.instagram.com/pddikti/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-1 sm:mx-2 transition-transform hover:scale-110"
          >
            <Image
              src="/Logo-Dikti.png"
              alt="Logo Dikti"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </a>
        </div>

        {/* Nama Aplikasi */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-2">BARGEMCU</h1>
          <p className="text-lg md:text-xl text-blue-700 italic mb-2">Barcode Gempa dan Cuaca</p>
          <p className="text-sm md:text-base text-gray-600">Kelurahan Beringin Kecamatan Medan Selayang</p>
        </div>

        {/* Tombol Tautan */}
        <div className="grid gap-4 md:gap-6 max-w-2xl mx-auto mb-12">
          {/* Tombol Eksternal - Cuaca */}
          <a
            href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca/12.71.21.1004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <Cloud className="w-6 h-6 text-blue-600" />
              <span className="text-gray-800 font-medium">Informasi Cuaca Kelurahan Beringin</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>

          {/* Tombol Eksternal - Gempa */}
          <a
            href="https://www.bmkg.go.id/gempabumi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-red-600" />
              <span className="text-gray-800 font-medium">Informasi Gempa Bumi Indonesia</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>

          {/* Tombol Eksternal - WRS */}
          <a
            href="https://inatews.bmkg.go.id/wrs/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-800 font-medium">WRS BMKG</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>

          {/* Tombol Internal - Peta Seismisitas */}
          <Link
            href="/peta-seismisitas"
            className="flex items-center justify-between p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <Map className="w-6 h-6 text-purple-600" />
              <span className="text-gray-800 font-medium">Peta Seismisitas Sumatera Utara</span>
            </div>
          </Link>

          {/* Tombol Eksternal - BMKG */}
          <a
            href="https://bmkg.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-blue-600" />
              <span className="text-gray-800 font-medium">BMKG</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>

          {/* Tombol Eksternal - STMKG */}
          <a
            href="https://stmkg.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-800 font-medium">STMKG</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        </div>

        {/* Bagian Share */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Berbagi BARGEMCU</h2>
            <p className="text-sm text-gray-600">Bagikan informasi ini kepada teman dan keluarga</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-6 mb-3">
              {/* Share ke Facebook */}
              <a
                href={getShareUrl('facebook')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </div>
                <span className="text-xs mt-2 text-gray-700">Facebook</span>
              </a>
              
              {/* Share ke LinkedIn */}
              <a
                href={getShareUrl('linkedin')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs mt-2 text-gray-700">LinkedIn</span>
              </a>
              
              {/* Share ke WhatsApp */}
              <a
                href={getShareUrl('whatsapp')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-xs mt-2 text-gray-700">WhatsApp</span>
              </a>

              {/* Tombol Salin ke Clipboard */}
              <button
                onClick={handleCopyToClipboard}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Copy className="w-5 h-5" />
                </div>
                <span className="text-xs mt-2 text-gray-700">Salin</span>
              </button>
            </div>
            
            {/* Pesan berhasil disalin */}
            {showCopiedMessage && (
              <div className="mt-2 px-4 py-2 bg-green-100 text-green-800 text-xs rounded-md animate-fade-in-out">
                Informasi disalin ke clipboard! Silakan paste di media sosial Anda.
              </div>
            )}
          </div>
        </div>

        {/* Footer Copyright */}
        <footer className="text-center text-sm text-gray-600 border-t border-gray-200 pt-6 mt-8">
          <p>Bargemcu Kelurahan Beringin</p>
          <p>Unit 1 Kuliah Kerja Nyata STMKG Angkatan VII Tahun 2025</p>
        </footer>
      </div>
    </div>
  )
}
