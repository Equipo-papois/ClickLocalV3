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

interface CategorySectionProps {
  id: string;
  title: string;
  businesses: Business[];
  onViewMore: (business: Business) => void;
  bgColor?: string;
}

export function CategorySection({ id, title, businesses, onViewMore, bgColor = '#ffffff' }: CategorySectionProps) {
  // Filtrar y ordenar negocios por nombre
  const filteredBusinesses = businesses
    .filter(b => b.category === title)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id={id} className="py-12 lg:py-16 px-4 lg:px-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl mb-3 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {title}
        </h2>
        <p className="text-gray-600 mb-8 text-sm lg:text-base max-w-2xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Explora los emprendimientos locales en la categoría de {title.toLowerCase()}.
        </p>
        
        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                onViewMore={() => onViewMore(business)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            No hay negocios disponibles en esta categoría por el momento.
          </p>
        )}
      </div>
    </section>
  );
}