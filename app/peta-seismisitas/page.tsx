import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

// Metadata khusus untuk halaman peta seismisitas
export const metadata: Metadata = {
  title: "Peta Seismisitas Sumatera Utara - BARGEMCU",
  description: "Peta seismisitas Provinsi Sumatera Utara tahun 2000-2025 yang menampilkan aktivitas gempa bumi di wilayah Sumatera Utara dan sekitarnya.",
  keywords: "peta seismisitas, gempa bumi, Sumatera Utara, BMKG, STMKG, aktivitas seismik, tektonik",
  openGraph: {
    title: "Peta Seismisitas Sumatera Utara - BARGEMCU",
    description: "Peta seismisitas Provinsi Sumatera Utara tahun 2000-2025 yang menampilkan aktivitas gempa bumi di wilayah Sumatera Utara dan sekitarnya.",
    url: "https://bargemcu.netlify.app/peta-seismisitas",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peta Seismisitas Sumatera Utara - BARGEMCU",
      },
    ],
  },
}

export default function PetaSeismisitasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Simple Back Button - Same styling as homepage */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-black/20 text-black rounded-lg transition-colors duration-300 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
        </div>

        {/* Title - Same styling as homepage */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Peta Seismisitas Provinsi Sumatera Utara
          </h1>
        </div>

        {/* Peta Seismisitas Container */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          {/* Peta Seismisitas Image */}
          <div className="relative w-full aspect-[4/3] mb-8">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/peta_seismisitas_optimized.webp"
                alt="Peta Seismisitas Provinsi Sumatera Utara Tahun 2000-2025"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>

          {/* Compass Section */}
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Arah Mata Angin</h3>
            <div className="relative aspect-square w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
              <Image
                src="/compass.png"
                alt="Arah Mata Angin"
                fill
                className="object-contain drop-shadow-md"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </div>

          {/* PDF Embed Container with controlled height */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Keterangan Peta</h2>
            <div className="relative w-full h-[400px] md:h-[500px] border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="/Keterangan-Peta.pdf"
                className="w-full h-full border-0"
                title="Keterangan Peta Seismisitas Provinsi Sumatera Utara"
              />
            </div>
          </div>
        </div>

        {/* Footer - dengan jarak yang cukup dari konten */}
        <footer className="text-center text-sm text-gray-600 border-t border-gray-200 pt-6 mt-16">
          <p>Bargemcu Kelurahan Beringin</p>
          <p>Unit 1 Kuliah Kerja Nyata STMKG Angkatan VII Tahun 2025</p>
        </footer>
      </div>
    </div>
  )
}
