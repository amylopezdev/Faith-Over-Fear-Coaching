"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-sage/20 bg-cream px-6 py-5 sm:px-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-charcoal transition-opacity hover:opacity-70"
        >
          Faith Over Fear Coaching
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-charcoal underline-offset-4 decoration-sage-deep decoration-2 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-charcoal md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col gap-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer text-base font-medium text-charcoal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;