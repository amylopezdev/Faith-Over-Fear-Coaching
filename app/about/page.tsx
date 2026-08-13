import { aboutContent } from "../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-[70dvh] flex-1 flex-col justify-center border-t border-sage/20 px-6 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          A Bit About Me
        </h1>
        <ul className="mt-10 space-y-16 sm:mt-14 sm:space-y-20">
          {aboutContent.map((aboutItem) => (
            <li key={aboutItem.id}>
              <h2 className="text-center text-2xl font-semibold text-charcoal sm:text-3xl">
                {aboutItem.title}
              </h2>
              <div className="mx-auto mt-6 max-w-2xl space-y-4">
                {aboutItem.blurb.map((paragraph, index) => {
                  const isClosingBelief =
                    aboutItem.id === "why-faith-over-fear" &&
                    index === aboutItem.blurb.length - 1;

                  return isClosingBelief ? (
                    <p
                      key={paragraph}
                      className="border-l-2 border-sage py-1 pl-6 font-heading text-2xl italic leading-relaxed text-sage-deep sm:pl-8 sm:text-3xl"
                    >
                      {paragraph}
                    </p>
                  ) : (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-charcoal sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
