const Achievements = () => {
  return (
    <section className="achievement">
      <div className="font-montserrat text-white flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">
            PROPERTY LISTINGS
          </h2>
          <p className="text-5xl md:text-7xl font-semibold mb-4 md:mb-8 text-center">
            98,527
          </p>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">
            AREAS COVERED
          </h2>
          <p className="text-5xl md:text-7xl font-semibold mb-4 md:mb-8 text-center">
            384
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">
            AGENTS & DEVELOPERS
          </h2>
          <p className="text-5xl md:text-7xl font-semibold mb-4 md:mb-8 text-center">
            16,400
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
