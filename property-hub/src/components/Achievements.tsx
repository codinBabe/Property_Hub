const Achievements = () => {
  return (
    <section className="achievement">
      <div className="font-montserrat text-white flex items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl font-semibold mb-4">PROPERTY LISTINGS</h2>
          <p className="text-7xl font-semibold mb-8 text-center">98,527</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">AREAS COVERED</h2>
          <p className="text-7xl font-semibold mb-8 text-center">384</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">AGENTS & DEVELOPERS</h2>
          <p className="text-7xl font-semibold mb-8 text-center">16,400</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
