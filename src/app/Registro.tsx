import { Store, Upload } from 'lucide-react';

export function Registro() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="bg-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Store className="w-8 h-8 text-[#ff7b9d]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Registra tu Negocio
          </h2>
          <p className="text-gray-500 mt-2">Completa los datos para unirte a la red de Click Local</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Nombre del Negocio</label>
                <input 
                  type="text" 
                  placeholder="Ej. Pastelería Dulce Hogar"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff7b9d] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Categoría</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff7b9d] focus:border-transparent outline-none transition-all bg-white text-gray-700">
                  <option value="">Selecciona una categoría...</option>
                  <option value="artesanias">Artesanías</option>
                  <option value="gastronomia">Gastronomía</option>
                  <option value="servicios">Servicios</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Número de WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="10 dígitos"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff7b9d] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Horario de Atención</label>
                <input 
                  type="text" 
                  placeholder="Ej. Lunes a Viernes: 9:00 AM - 6:00 PM"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff7b9d] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Descripción Corta (Max 100 caracteres)</label>
                <textarea 
                  rows={3}
                  placeholder="Resumen para la tarjeta de presentación..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff7b9d] focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-6 border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-gray-700">Haz clic para subir una foto representativa</p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG o WEBP (Max 2MB)</p>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#ff7b9d] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#ff648a] transition-all shadow-lg shadow-pink-200 mt-8"
          >
            Enviar Solicitud de Registro
          </button>
        </form>

        <div className="mt-8 space-y-6">
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">O autoriza con</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button type="button" className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/></svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}