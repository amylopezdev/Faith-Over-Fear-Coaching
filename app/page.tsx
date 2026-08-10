import Hero from "./components/Hero";
import CTAButton from "./components/CTAButton";
import { homeContent } from "./data/home";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="border-t border-sage/20 bg-mint-tint px-6 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
            How I help
          </h2>
          <div className="mt-8 space-y-6 sm:mt-10">
            {homeContent.map((homeItem, index) => (
              <p
                key={homeItem.id}
                className={
                  index === homeContent.length - 1
                    ? "font-heading text-xl leading-relaxed text-sage-deep sm:text-2xl"
                    : "text-base leading-relaxed text-charcoal sm:text-lg"
                }
              >
                {homeItem.blurb}
              </p>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <CTAButton text="Take the next step" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
