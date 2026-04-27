import { 
  Home, 
  TrendingUp, 
  Target, 
  FileText, 
  MapPin, 
  Palette, 
  UtensilsCrossed, 
  Wrench, 
  Menu, 
  X, 
  LogIn 
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../../assets/logo.png"; 

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-white rounded-lg p-2 shadow-lg"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
      </button>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <nav className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-gray-100">
          <Link to="/" className="block">
            <img src={logoImage} alt="Click Local" className="w-full h-auto" />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          
          <div className="mb-6">
            <p className="px-3 mb-3 text-xs text-gray-400 uppercase tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Navegación
            </p>
            <nav className="space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white bg-[#ff7b9d] px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <Home className="w-5 h-5" />
                Inicio
              </Link>
              <a
                href="/#tendencias"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-[#ff7b9d] hover:bg-pink-50 px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <TrendingUp className="w-5 h-5" />
                Tendencias
              </a>
              <a
                href="/#objetivo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-[#ff7b9d] hover:bg-pink-50 px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <Target className="w-5 h-5" />
                Objetivo
              </a>
              <a
                href="/#justificacion"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-[#ff7b9d] hover:bg-pink-50 px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <FileText className="w-5 h-5" />
                Justificación
              </a>
              <a
                href="/#alcance"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-[#ff7b9d] hover:bg-pink-50 px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <MapPin className="w-5 h-5" />
                Alcance
              </a>
            </nav>
          </div>

          <div>
            <p className="px-3 mb-3 text-xs text-gray-400 uppercase tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Categorías
            </p>
            <nav className="space-y-1">
              <a
                href="/#artesanias"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-[#ff7b9d] hover:bg-pink-50 px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <Palette className="w-5 h-5" />
                Artesanías
              </a>
              <a
                href="/#gastronomia"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-[#ff7b9d] hover:bg-pink-50 px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <UtensilsCrossed className="w-5 h-5" />
                Gastronomía
              </a>
              <a
                href="/#servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-[#ff7b9d] hover:bg-pink-50 px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <Wrench className="w-5 h-5" />
                Servicios
              </a>
            </nav>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="px-3 mb-3 text-xs text-gray-400 uppercase tracking-wide">Usuario</p>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:bg-pink-50 hover:text-[#ff7b9d] px-4 py-3 rounded-lg transition-all font-medium"
            >
              <LogIn className="w-5 h-5" />
              Iniciar Sesión
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}