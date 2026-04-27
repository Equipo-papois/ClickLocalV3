import { ReactNode } from 'react';

interface InfoSectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

export function InfoSection({ id, icon, title, description, bgColor = '#ffffff' }: InfoSectionProps) {
  return (
    <section id={id} className="py-12 lg:py-16 px-4 lg:px-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-50 rounded-xl">
              {icon}
            </div>
            <h2 className="text-2xl lg:text-3xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {title}
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}