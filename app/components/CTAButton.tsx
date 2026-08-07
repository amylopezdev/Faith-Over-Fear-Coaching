import Link from "next/link";

type CTAButtonProps = {
  text?: string;
  href?: string;
};

const CTAButton = ({ text = "Get in touch", href = "/contact" }: CTAButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-block rounded-full bg-sage px-8 py-3.5 text-base font-medium text-charcoal transition-colors duration-200 hover:bg-sage-deep hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep"
    >
      {text}
    </Link>
  );
};

export default CTAButton;