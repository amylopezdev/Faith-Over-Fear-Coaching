const Home = () => {
  return (
    <>
      <section
        id="top"
        className="flex flex-col items-center px-6 py-24 text-center sm:py-32"
      >
        <h1 className="text-4xl font-semibold text-foreground sm:text-6xl">
          Faith Over Fear Coaching
        </h1>
      </section>

      <section id="about" className="border-t border-border px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            About
          </h2>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-border bg-surface px-6 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Services
          </h2>
        </div>
      </section>

      <section
        id="testimonials"
        className="border-t border-border px-6 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Testimonials
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-border bg-surface px-6 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Contact
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;