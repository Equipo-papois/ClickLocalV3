export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-r from-[#ff9fb8] to-[#ffc0cb] py-12 px-6 lg:py-16 rounded-3xl mx-4 lg:mx-8 mt-6">
      <div className="max-w-4xl">
        <h1 className="text-3xl lg:text-5xl mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          ¡Hola, buenas tardes!
        </h1>
        <p className="text-base lg:text-lg text-white/90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Descubre el talento increíble que vive cerca de ti.
        </p>
      </div>
    </section>
  );
}