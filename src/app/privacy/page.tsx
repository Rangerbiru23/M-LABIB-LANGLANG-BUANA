'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, UserCheck, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="M LABIB LANGLANG BUANA Logo" 
                className="h-10 w-10 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  M LABIB LANGLANG BUANA
                </h1>
                <p className="text-xs text-gray-600">Budidaya Ikan Air Tawar</p>
              </div>
            </div>

            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Kebijakan Privasi
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            M LABIB LANGLANG BUANA - Kebijakan Privasi dan Perlindungan Data Pribadi
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di M LABIB LANGLANG BUANA. Kami sangat menghargai privasi Anda dan berkomitmen 
                untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
                menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan 
                budidaya ikan air tawar kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini. 
                Jika Anda tidak setuju dengan praktik kami, jangan gunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-6 h-6 mr-2 text-teal-600" />
                Pengumpulan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Informasi yang Kami Kumpulkan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Data Identifikasi:</strong> Nama lengkap, alamat email, nomor telepon</li>
                <li><strong>Data Lokasi:</strong> Alamat lengkap untuk pengiriman dan layanan</li>
                <li><strong>Data Bisnis:</strong> Informasi perusahaan untuk keperluan kerjasama</li>
                <li><strong>Data Transaksi:</strong> Riwayat pembelian dan layanan yang digunakan</li>
                <li><strong>Data Teknis:</strong> Alamat IP, browser, dan informasi perangkat</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Cara Kami Mengumpulkan Data:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Formulir kontak dan pendaftaran online</li>
                <li>Komunikasi langsung (telepon, email, WhatsApp)</li>
                <li>Kunjungan ke lokasi budidaya kami</li>
                <li>Penggunaan website dan platform digital kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-6 h-6 mr-2 text-cyan-600" />
                Penggunaan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan data pribadi Anda untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Layanan Pelanggan:</strong> Menyediakan informasi produk dan layanan budidaya ikan</li>
                <li><strong>Pemesanan:</strong> Memproses pesanan dan pengiriman produk ikan</li>
                <li><strong>Konsultasi:</strong> Memberikan layanan konsultasi budidaya</li>
                <li><strong>Marketing:</strong> Mengirimkan informasi produk dan penawaran khusus</li>
                <li><strong>Penyempurnaan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas layanan</li>
                <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-6 h-6 mr-2 text-green-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                M LABIB LANGLANG BUANA berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Enkripsi Data:</strong> Menggunakan teknologi enkripsi untuk melindungi data</li>
                <li><strong>Akses Terbatas:</strong> Hanya personil berwenang yang dapat mengakses data</li>
                <li><strong>Keamanan Fisik:</strong> Melindungi dokumen fisik di lokasi aman</li>
                <li><strong>Monitoring Keamanan:</strong> Melakukan audit keamanan secara berkala</li>
                <li><strong>Pelatihan Staff:</strong> Memberikan pelatihan tentang perlindungan data</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-6 h-6 mr-2 text-blue-600" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pemilik data, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Mengoreksi Data:</strong> Memperbaiki data yang tidak akurat</li>
                <li><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi (dengan pengecualian tertentu)</li>
                <li><strong>Membatasi Pengolahan:</strong> Membatasi cara kami menggunakan data Anda</li>
                <li><strong>Menarik Persetujuan:</strong> Menarik persetujuan yang telah diberikan</li>
                <li><strong>Transfer Data:</strong> Meminta transfer data ke pihak ketiga</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-6 h-6 mr-2 text-teal-600" />
                Pembagian Data dengan Pihak Ketiga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami tidak menjual data pribadi Anda. Kami hanya akan membagikan data dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Partner Layanan:</strong> Pihak ketiga yang membantu menyediakan layanan kami</li>
                <li><strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum atau peraturan</li>
                <li><strong>Keamanan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-6 h-6 mr-2 text-cyan-600" />
                Kebijakan Cookie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Website kami menggunakan cookie untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Meningkatkan pengalaman pengguna</li>
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Menyediakan konten yang dipersonalisasi</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Anda dapat mengontrol cookie melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Children Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-green-600" />
                Privasi Anak-anak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Layanan kami tidak ditujukan untuk anak-anak di bawah 13 tahun. 
                Kami tidak sengaja mengumpulkan informasi pribadi dari anak-anak. 
                Jika kami mengetahui telah mengumpulkan data dari anak di bawah 13 tahun, 
                kami akan segera menghapus data tersebut.
              </p>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-6 h-6 mr-2 text-blue-600" />
                Pembaruan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan diberitahukan melalui website atau komunikasi langsung. 
                Penggunaan layanan yang berkelanjutan menunjukkan persetujuan Anda terhadap kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-6 h-6 mr-2 text-teal-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda, 
                silakan hubungi kami:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">M LABIB LANGLANG BUANA</p>
                <p className="text-gray-700">Telepon: 085285704297</p>
                <p className="text-gray-700">
                  Alamat: KP. KADUPUGUR NO 23 RT 013/004 43155, Desa Cijalingan, 
                  Kec. Cicantayan, Kab. Sukabumi, Provinsi Jawa Barat
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Kebijakan Privasi ini berlaku efektif sejak Januari 2024 dan 
            merupakan bagian dari komitmen M LABIB LANGLANG BUANA terhadap perlindungan data pelanggan.
          </p>
          <Link href="/" className="inline-block mt-6">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}