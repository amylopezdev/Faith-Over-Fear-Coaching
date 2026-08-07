import CTAButton from "../components/CTAButton";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-[70dvh] flex-1 flex-col justify-center border-t border-sage/20 px-6 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          About
        </h1>
        <div className="mt-8 text-center sm:mt-10">
          <CTAButton text="Start working with me" />
        </div>
      </div>
    </section>
  );
};

export default About;
