'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Users, Package } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              Syarat dan Ketentuan
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            M LABIB LANGLANG BUANA - Syarat dan Ketentuan Layanan Budidaya Ikan Air Tawar
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di M LABIB LANGLANG BUANA. Syarat dan Ketentuan ini mengatur penggunaan 
                layanan budidaya ikan air tawar yang kami sediakan. Dengan menggunakan layanan kami, 
                Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini berlaku untuk semua pelanggan, mitra bisnis, dan pengguna 
                layanan M LABIB LANGLANG BUANA. Harap baca dengan seksama sebelum menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="w-6 h-6 mr-2 text-teal-600" />
                Definisi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-800">"Perusahaan":</strong>
                  <span className="text-gray-700 ml-2">M LABIB LANGLANG BUANA, perusahaan budidaya ikan air tawar</span>
                </div>
                <div>
                  <strong className="text-gray-800">"Pelanggan":</strong>
                  <span className="text-gray-700 ml-2">Individu atau perusahaan yang menggunakan layanan kami</span>
                </div>
                <div>
                  <strong className="text-gray-800">"Layanan":</strong>
                  <span className="text-gray-700 ml-2">Produk dan jasa budidaya ikan air tawar yang kami sediakan</span>
                </div>
                <div>
                  <strong className="text-gray-800">"Produk":</strong>
                  <span className="text-gray-700 ml-2">Ikan hasil budidaya dan produk terkait</span>
                </div>
                <div>
                  <strong className="text-gray-800">"Website":</strong>
                  <span className="text-gray-700 ml-2">Platform digital resmi M LABIB LANGLANG BUANA</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-6 h-6 mr-2 text-cyan-600" />
                Layanan yang Kami Sediakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Produk Utama:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Budidaya ikan konsumsi (nila, mas, lele, dll)</li>
                <li>Bibit ikan berkualitas</li>
                <li>Pakan ikan berkualitas tinggi</li>
                <li>Produk olahan ikan</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Layanan Pendukung:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Konsultasi budidaya ikan</li>
                <li>Manajemen kualitas air</li>
                <li>Pelatihan budidaya</li>
                <li>Desain dan konstruksi kolam</li>
                <li>Pengiriman dan logistik</li>
              </ul>
            </CardContent>
          </Card>

          {/* Order and Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                Pemesanan dan Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Prosedur Pemesanan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau kunjungan langsung</li>
                <li>Pelanggan harus memberikan informasi lengkap untuk pengiriman</li>
                <li>Konfirmasi pemesanan akan dikirimkan setelah verifikasi</li>
                <li>Perusahaan berhak menolak pesanan jika stok tidak mencukupi</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Syarat Pembayaran:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pembayaran dapat dilakukan tunai atau transfer</li>
                <li>Untuk pesanan besar, DP minimum 50% diperlukan</li>
                <li>Pelunasan harus dilakukan sebelum pengiriman</li>
                <li>Harga dapat berubah sesuai kondisi pasar</li>
              </ul>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-6 h-6 mr-2 text-teal-600" />
                Pengiriman dan Logistik
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Kebijakan Pengiriman:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pengiriman hanya untuk area Jawa Barat dan sekitarnya</li>
                <li>Pelanggan bertanggung jawab untuk persiapan tempat penerimaan</li>
                <li>Biaya pengiriman ditanggung oleh pelanggan</li>
                <li>Jadwal pengiriman akan disesuaikan dengan kesepakatan</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Jaminan Kualitas:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Semua produk dikirim dalam kondisi hidup dan sehat</li>
                <li>Klaim kualitas harus diajukan maksimal 2 jam setelah penerimaan</li>
                <li>Perusahaan tidak bertanggung jawab atas kematian akibat kelalaian pelanggan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-green-600" />
                Tanggung Jawab Pihak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Tanggung Jawab Perusahaan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menyediakan produk berkualitas sesuai standar</li>
                <li>Memberikan informasi akurat tentang produk</li>
                <li>Memastikan pengiriman tepat waktu</li>
                <li>Memberikan garansi untuk produk tertentu</li>
                <li>Menjaga kerahasiaan data pelanggan</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Tanggung Jawab Pelanggan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Melakukan pembayaran sesuai kesepakatan</li>
                <li>Menyiapkan fasilitas penerimaan yang memadai</li>
                <li>Merawat produk sesuai petunjuk</li>
                <li>Melaporkan masalah secara tepat waktu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Perusahaan tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kerugian tidak langsung atau konsekuensial</li>
                <li>Kematian ikan akibat kelalaian pelanggan</li>
                <li>Keterlambatan pengiriman karena force majeure</li>
                <li>Kerusakan akibat penanganan yang salah oleh pelanggan</li>
                <li>Kehilangan produktivitas atau keuntungan</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                Tanggung jawab maksimum perusahaan adalah nilai transaksi yang bersangkutan.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua konten, merek, logo, dan materi promosi milik M LABIB LANGLANG BUANA 
                dilindungi oleh hukum hak kekayaan intelektual. Pelanggan tidak diperkenankan 
                menggunakan materi kami tanpa izin tertulis.
              </p>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-teal-600" />
                Kerahasiaan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kedua belah pihak setuju untuk menjaga kerahasiaan informasi bisnis, 
                teknis, dan keuangan yang diperoleh selama kerjasama. Informasi rahasia 
                tidak boleh dibagikan kepada pihak ketiga tanpa persetujuan tertulis.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
                Pengakhiran Kerjasama
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Pengakhiran oleh Perusahaan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pelanggan melanggar syarat dan ketentuan</li>
                <li>Pelanggan melakukan pembayaran tidak sah</li>
                <li>Pelanggan menyebabkan kerugian pada perusahaan</li>
                <li>Alasan bisnis yang sah</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Pengakhiran oleh Pelanggan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pemberitahuan minimal 7 hari untuk pesanan berulang</li>
                <li>Pesanan yang sudah dibayar tidak dapat dibatalkan</li>
                <li>Biaya pembatalan mungkin berlaku untuk pesanan khusus</li>
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="w-6 h-6 mr-2 text-cyan-600" />
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua sengketa yang timbul dari penggunaan layanan kami akan diselesaikan 
                melalui musyawarah mufakat terlebih dahulu. Jika tidak tercapai kesepakatan, 
                sengketa akan diselesaikan melalui pengadilan di Kabupaten Sukabumi.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Hukum yang Berlaku
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                Republik Indonesia. Setiap ketentuan yang dianggap tidak sah atau tidak 
                dapat dilaksanakan tidak akan mempengaruhi ketentuan lainnya.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-teal-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, 
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
            Syarat dan Ketentuan ini berlaku efektif sejak Januari 2024 dan 
            merupakan kesepakatan yang mengikat antara M LABIB LANGLANG BUANA dan pelanggan.
          </p>
          <p className="text-gray-600 mt-2">
            Dengan menggunakan layanan kami, Anda menyatakan telah membaca, 
            memahami, dan menyetujui Syarat dan Ketentuan ini.
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