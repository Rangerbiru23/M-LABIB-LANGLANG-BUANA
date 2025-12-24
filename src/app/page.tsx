'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Fish, Waves, Droplets, Award, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

            <div className="hidden md:flex space-x-8">
              <Link href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</Link>
            </div>

            <Button 
              variant="outline" 
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</Link>
              <Link href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</Link>
              <Link href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Fish className="w-4 h-4 mr-2" />
                Budidaya Ikan Air Tawar Profesional
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  M LABIB LANGLANG BUANA
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Perusahaan profesional di bidang budidaya ikan air tawar dengan metode modern dan berkualitas tinggi. 
                Berlokasi di Cicantayan, Sukabumi, kami siap memenuhi kebutuhan ikan konsumsi Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
                <Button variant="outline" size="lg">
                  <Waves className="w-4 h-4 mr-2" />
                  Lihat Layanan
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Kualitas Terjamin</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Layanan Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero-image.jpg" 
                  alt="Budidaya Ikan M LABIB LANGLANG BUANA" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">M LABIB LANGLANG BUANA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk memberikan produk dan layanan terbaik dalam bidang budidaya ikan air tawar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Kualitas Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ikan berkualitas tinggi dengan standar kesehatan dan keamanan pangan terjamin
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Teknologi Modern</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Menggunakan metode budidaya terkini untuk hasil optimal dan berkelanjutan
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Tim Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Didukung oleh tenaga ahli berpengalaman di bidang perikanan dan akuakultur
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Hasil Melimpah</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Produksi ikan yang stabil dan berkualitas untuk memenuhi kebutuhan pasar
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tentang <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">M LABIB LANGLANG BUANA</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                M LABIB LANGLANG BUANA adalah perusahaan yang bergerak di bidang budidaya ikan air tawar. 
                Dengan lokasi strategis di Cicantayan, Sukabumi, kami mengkhususkan diri dalam produksi ikan 
                berkualitas tinggi untuk memenuhi kebutuhan pasar lokal dan regional.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Didirikan dengan komitmen terhadap kualitas dan keberlanjutan, kami menggunakan teknologi 
                budidaya modern yang ramah lingkungan untuk menghasilkan ikan sehat dan bergizi.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Lokasi: Cicantayan, Sukabumi, Jawa Barat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Fokus: Budidaya Ikan Air Tawar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Standar: Kualitas dan Keamanan Pangan</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-blue-600">500K+</CardTitle>
                  <CardDescription>Ikan Produksi per Tahun</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-teal-600">5+</CardTitle>
                  <CardDescription>Jenis Ikan</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-cyan-600">2 Ha</CardTitle>
                  <CardDescription>Luas Kolam</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-green-600">100%</CardTitle>
                  <CardDescription>Kepuasan Pelanggan</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layanan <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Unggulan Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan berkualitas dalam bidang budidaya ikan air tawar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-blue-100">
              <CardHeader>
                <Fish className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Budidaya Ikan Konsumsi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Produksi ikan konsumsi berkualitas tinggi seperti nila, mas, dan lele dengan standar keamanan pangan.
                </CardDescription>
                <Badge variant="secondary">Best Seller</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-teal-100">
              <CardHeader>
                <Droplets className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle className="text-xl">Manajemen Kualitas Air</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Pengelolaan kualitas air secara profesional untuk pertumbuhan ikan optimal dan sehat.
                </CardDescription>
                <Badge variant="secondary">Premium</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-cyan-100">
              <CardHeader>
                <Waves className="w-12 h-12 text-cyan-600 mb-4" />
                <CardTitle className="text-xl">Konsultasi Budidaya</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Layanan konsultasi untuk pembudidaya ikan yang ingin meningkatkan produktivitas dan kualitas.
                </CardDescription>
                <Badge variant="secondary">Expert Service</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Hubungi <span className="text-yellow-300">M LABIB LANGLANG BUANA</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Siap melayani kebutuhan budidaya ikan Anda. Hubungi kami untuk informasi lebih lanjut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <Phone className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Telepon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">085285704297</p>
                <p className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <MapPin className="w-8 h-8 text-teal-600 mb-2" />
                <CardTitle className="text-xl">Alamat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">
                  KP. KADUPUGUR NO 23 RT 013/004 43155<br/>
                  Desa Cijalingan, Kec. Cicantayan<br/>
                  Kab. Sukabumi, Jawa Barat
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <Mail className="w-8 h-8 text-cyan-600 mb-2" />
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">
                  Hubungi kami melalui telepon untuk informasi lebih lanjut
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="M LABIB LANGLANG BUANA Logo" 
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-lg font-bold">M LABIB LANGLANG BUANA</h3>
              </div>
              <p className="text-gray-400">
                Profesional dalam bidang budidaya ikan air tawar
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Budidaya Ikan Konsumsi</li>
                <li>Manajemen Kualitas Air</li>
                <li>Konsultasi Budidaya</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>085285704297</li>
                <li>Cicantayan, Sukabumi</li>
                <li>Jawa Barat, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 M LABIB LANGLANG BUANA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}