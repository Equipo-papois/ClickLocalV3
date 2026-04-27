import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrendingSection } from './components/TrendingSection';
import { InfoSection } from './components/InfoSection';
import { CategorySection } from './components/CategorySection';
import { BusinessModal } from './components/BusinessModal';
import { Login } from './components/Login'; 
import { Registro } from './Registro';
import { Target, FileText, MapPin, Store } from 'lucide-react';

interface Business {
  id: number;
  category: string;
  name: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  schedule: string;
  whatsapp: string;
  facebook?: string;
  instagram?: string;
}

const mockBusinesses: Business[] = [
  {
    id: 1,
    category: 'Artesanías',
    name: 'Tejidos María',
    description: 'Productos tejidos a mano con técnicas tradicionales. Mantas, bufandas y accesorios únicos.',
    fullDescription: 'Tejidos María ofrece una amplia variedad de productos tejidos a mano utilizando técnicas tradicionales transmitidas de generación en generación. Cada pieza es única y está elaborada con materiales de alta calidad, garantizando durabilidad y estilo. Desde mantas acogedoras hasta bufandas elegantes y accesorios personalizados, todos nuestros productos son creados con amor y dedicación.',
    imageUrl: 'https://images.unsplash.com/photo-1767476106226-ff48f2e12286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGFydGlzYW58ZW58MXx8fHwxNzcyMzIzNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    whatsapp: '1234567890',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 2,
    category: 'Gastronomía',
    name: 'Pastelería Dulce Hogar',
    description: 'Repostería casera: tortas, cupcakes y galletas personalizadas para toda ocasión.',
    fullDescription: 'Pastelería Dulce Hogar se especializa en crear delicias caseras que endulzan cada momento especial. Desde tortas elaboradas para cumpleaños y celebraciones hasta cupcakes decorados y galletas artesanales, cada producto es preparado con ingredientes frescos y naturales. Ofrecemos diseños personalizados según tus preferencias y necesidades dietéticas especiales.',
    imageUrl: 'https://images.unsplash.com/photo-1737700088850-d0b53f9d39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBhc3RyaWVzJTIwYmFrZXJ5fGVufDF8fHx8MTc3MjMyMzY2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Martes a Domingo: 8:00 AM - 8:00 PM',
    whatsapp: '1234567891',
    instagram: 'https://instagram.com'
  },
  {
    id: 3,
    category: 'Artesanías',
    name: 'Joyería Artesanal Luna',
    description: 'Accesorios y joyas hechas a mano con diseños exclusivos y materiales naturales.',
    fullDescription: 'Joyería Artesanal Luna crea piezas únicas de joyería utilizando técnicas artesanales y materiales naturales cuidadosamente seleccionados. Cada collar, pulsera, anillo y par de aretes es diseñado y elaborado a mano, asegurando que cada cliente reciba una pieza verdaderamente especial. Trabajamos con piedras semipreciosas, metales nobles y elementos naturales para crear joyas que reflejan tu personalidad.',
    imageUrl: 'https://images.unsplash.com/photo-1659032882703-f1e4983fe1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzIzMTYzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Miércoles a Sábado: 10:00 AM - 7:00 PM',
    whatsapp: '1234567892',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 4,
    category: 'Gastronomía',
    name: 'Galletas de la Abuela',
    description: 'Galletas caseras con recetas tradicionales, horneadas con ingredientes orgánicos.',
    fullDescription: 'Galletas de la Abuela trae de vuelta el sabor auténtico de las recetas tradicionales transmitidas por generaciones. Utilizamos únicamente ingredientes orgánicos y de origen local para hornear galletas frescas cada día. Desde las clásicas de chispas de chocolate hasta variedades de avena con pasas, nueces y especias, cada galleta está hecha con el mismo cuidado y amor que solía poner la abuela.',
    imageUrl: 'https://images.unsplash.com/photo-1607975218250-7faaf3e36bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYmFraW5nJTIwY29va2llc3xlbnwxfHx8fDE3NzIzMjM2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Lunes a Sábado: 7:00 AM - 3:00 PM',
    whatsapp: '1234567893',
    instagram: 'https://instagram.com'
  },
  {
    id: 5,
    category: 'Servicios',
    name: 'Limpieza Hogar Perfecto',
    description: 'Servicio profesional de limpieza del hogar con productos eco-amigables.',
    fullDescription: 'Limpieza Hogar Perfecto ofrece servicios profesionales de limpieza residencial utilizando únicamente productos eco-amigables y seguros para tu familia y mascotas. Nuestro equipo capacitado se encarga de cada detalle, desde la limpieza profunda hasta el mantenimiento regular. Ofrecemos planes personalizados según tus necesidades, horarios flexibles y la garantía de un hogar impecable.',
    imageUrl: 'https://images.unsplash.com/photo-1758272421751-963195322eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2UlMjBob21lfGVufDF8fHx8MTc3MjMyMzY3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    whatsapp: '1234567894',
    facebook: 'https://facebook.com'
  },
  {
    id: 6,
    category: 'Artesanías',
    name: 'Cerámica El Taller',
    description: 'Piezas de cerámica y alfarería únicas, ideales para decoración y uso diario.',
    fullDescription: 'Cerámica El Taller es un espacio creativo donde nacen piezas únicas de cerámica y alfarería. Cada plato, taza, jarrón y objeto decorativo es moldeado y pintado a mano por artesanos locales con años de experiencia. Combinamos técnicas tradicionales con diseños contemporáneos para crear piezas funcionales que también son verdaderas obras de arte. Perfecto para quienes buscan dar un toque especial a su hogar.',
    imageUrl: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljc3xlbnwxfHx8fDE3NzIzMjM2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Jueves a Domingo: 11:00 AM - 8:00 PM',
    whatsapp: '1234567895',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  }
];

export default function App() {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="lg:ml-64">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TrendingSection businesses={mockBusinesses} onViewMore={setSelectedBusiness} />
                <InfoSection
                  id="objetivo"
                  icon={<Target className="w-8 h-8 lg:w-10 lg:h-10 text-[#ff7b9d]" />}
                  title="Objetivo"
                  description="Crear una plataforma que facilite la conexión entre micro-emprendedores locales y su comunidad, promoviendo el comercio de proximidad y fortaleciendo la economía local. Nuestro objetivo es dar visibilidad a los talentos de barrio y facilitar el acceso de los vecinos a productos y servicios de calidad sin intermediarios."
                  bgColor="#f8f9fa"
                />
                <InfoSection
                  id="justificacion"
                  icon={<FileText className="w-8 h-8 lg:w-10 lg:h-10 text-[#ff7b9d]" />}
                  title="Justificación"
                  description="Muchos talentos locales no cuentan con visibilidad digital ni recursos para competir con grandes plataformas. Click Local permite que pequeños negocios y servicios caseros lleguen directamente a sus vecinos sin intermediarios, reduciendo costos y fortaleciendo la confianza en la comunidad. Es una respuesta a la necesidad de digitalización accesible para micro-emprendedores."
                  bgColor="#ffffff"
                />
                <InfoSection
                  id="alcance"
                  icon={<MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-[#ff7b9d]" />}
                  title="Alcance"
                  description="Desde artesanos hasta gastronomía casera, conectamos a todo tipo de emprendedores con su comunidad local, facilitando el acceso a productos y servicios de calidad cercanos. El alcance inicial es a nivel de barrios y colonias, con la visión de expandirse a otras zonas urbanas y periurbanas, creando una red de economía local sostenible."
                  bgColor="#f8f9fa"
                />
                <CategorySection
                  id="artesanias"
                  title="Artesanías"
                  businesses={mockBusinesses}
                  onViewMore={setSelectedBusiness}
                  bgColor="#ffffff"
                />
                <CategorySection
                  id="gastronomia"
                  title="Gastronomía"
                  businesses={mockBusinesses}
                  onViewMore={setSelectedBusiness}
                  bgColor="#f8f9fa"
                />
                <CategorySection
                  id="servicios"
                  title="Servicios"
                  businesses={mockBusinesses}
                  onViewMore={setSelectedBusiness}
                  bgColor="#ffffff"
                />
                <section className="bg-pink-50 py-16 px-6 relative overflow-hidden">
                  <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Store className="w-16 h-16 text-[#ff7b9d] mx-auto mb-6" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      ¿Tienes un emprendimiento o servicio?
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Únete a Click Local y permite que tus vecinos te encuentren fácilmente. Empieza a digitalizar tu negocio hoy mismo.
                    </p>
                    <Link
                      to="/registro"
                      className="inline-flex items-center justify-center gap-2 bg-[#ff7b9d] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ff648a] transition-all duration-300 shadow-lg shadow-pink-200 hover:-translate-y-1"
                    >
                      Registra tu negocio aquí
                    </Link>
                  </div>
                </section>
                <footer className="bg-gradient-to-r from-[#5c68f0] to-[#7c85ff] text-white py-12 px-6 lg:py-16">
                  <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-xl lg:text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Click Local
                    </h3>
                    <p className="text-white/80 mb-6 text-sm lg:text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Conectando talentos de nuestra zona con los vecinos de siempre
                    </p>
                    <p className="text-white/60 text-xs lg:text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      © 2026 Click Local. Todos los derechos reservados.
                    </p>
                  </div>
                </footer>
              </>
            } />
            
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </div>

        <BusinessModal
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
        />
      </div>
    </Router>
  );
}