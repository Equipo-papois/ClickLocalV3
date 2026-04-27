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

interface BusinessCardProps {
  business: Business;
  onViewMore: () => void;
}

export function BusinessCard({ business, onViewMore }: BusinessCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Artesanías':
        return 'bg-blue-100 text-blue-600';
      case 'Gastronomía':
        return 'bg-pink-100 text-pink-600';
      case 'Servicios':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={business.imageUrl}
          alt={business.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className={`inline-block ${getCategoryColor(business.category)} px-3 py-1 rounded-full text-xs mb-3`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {business.category}
        </div>
        
        <h3 className="text-lg mb-2 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {business.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          {business.description}
        </p>
        
        <button
          onClick={onViewMore}
          className="w-full bg-white border border-[#ff7b9d] text-[#ff7b9d] px-4 py-2 rounded-lg hover:bg-[#ff7b9d] hover:text-white transition-colors text-sm"
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}