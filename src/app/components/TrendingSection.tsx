import { Flame } from 'lucide-react';
import { BusinessCard } from './BusinessCard';

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

interface TrendingSectionProps {
  businesses: Business[];
  onViewMore: (business: Business) => void;
}

export function TrendingSection({ businesses, onViewMore }: TrendingSectionProps) {
  // Mostrar los primeros 6 negocios como tendencias
  const trendingBusinesses = businesses.slice(0, 6);

  return (
    <section className="py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="w-6 h-6 text-[#ff7b9d]" />
          <h2 className="text-2xl lg:text-3xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Tendencias
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              business={business}
              onViewMore={() => onViewMore(business)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
