import { ArrowLeft, Clock, MapPin, Navigation, Package, MessageCircle, Facebook } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

interface BusinessModalProps {
  business: Business | null;
  onClose: () => void;
}

export function BusinessModal({ business, onClose }: BusinessModalProps) {
  if (!business) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Artesanías':
        return 'bg-pink-100 text-pink-600';
      case 'Gastronomía':
        return 'bg-pink-100 text-pink-600';
      case 'Servicios':
        return 'bg-pink-100 text-pink-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-pink-50 border-b border-pink-100">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#ff7b9d] hover:text-[#ff5a85] transition-colors mb-4"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
          
          <div className={`inline-block ${getCategoryColor(business.category)} px-4 py-1.5 rounded-full text-sm`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {business.category}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 lg:h-auto">
            <ImageWithFallback
              src={business.imageUrl}
              alt={business.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl mb-4 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {business.name}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {business.fullDescription}
            </p>

            {/* Info Items */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#ff7b9d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Horario:</p>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>{business.schedule}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff7b9d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ubicación:</p>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>Local Físico</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-[#ff7b9d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>Av. Universidad #123, Matatlán</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-[#ff7b9d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>Puntos de entrega disponibles</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-colors"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>

              {business.facebook && (
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg hover:bg-[#145DBF] transition-colors"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}