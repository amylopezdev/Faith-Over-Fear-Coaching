import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-sage/20 bg-cream px-6 py-5 sm:px-10">
      <a
        href="#top"
        className="font-heading text-2xl font-semibold tracking-tight text-charcoal transition-opacity hover:opacity-70"
      >
        Faith Over Fear Coaching
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
