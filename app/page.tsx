const Home = () => {
  return (
    <>
      <section
        id="top"
        className="flex flex-col items-center px-6 py-24 text-center sm:py-32"
      >
        <h1 className="text-4xl font-medium text-charcoal sm:text-6xl md:text-7xl">
          Faith Over Fear Coaching
        </h1>
        <p className="font-script mt-4 text-2xl text-[color-mix(in_srgb,var(--color-sage-deep)_70%,var(--color-charcoal)_30%)] sm:mt-6 sm:text-3xl">
          Helping you advance your career with faith over fear
        </p>
      </section>

      <section id="about" className="border-t border-sage/20 px-6 py-10 sm:py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-charcoal sm:text-4xl">
            About
          </h2>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-sage/20 bg-mint-tint px-6 py-10 sm:py-14"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-charcoal sm:text-4xl">
            Services
          </h2>
        </div>
      </section>

      <section
        id="testimonials"
        className="border-t border-sage/20 px-6 py-10 sm:py-14"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-charcoal sm:text-4xl">
            Testimonials
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-sage/20 bg-mint-tint px-6 py-10 sm:py-14"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-charcoal sm:text-4xl">
            Contact
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;
