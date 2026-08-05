const Header = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-background px-6 py-5 sm:px-10">
      <a
        href="#top"
        className="font-heading text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
      >
        Faith Over Fear Coaching
      </a>
      <nav>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;