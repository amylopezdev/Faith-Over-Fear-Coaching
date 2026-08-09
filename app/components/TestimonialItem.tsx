"use client";
import { useState } from "react";

type TestimonialItemProps = {
  quote: string;
  name: string;
  transition: string;
};

const TestimonialItem = ({ quote, name, transition }: TestimonialItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="border-l-2 border-sage pl-6 sm:pl-8">
      <blockquote
        className={`text-left text-lg leading-relaxed text-charcoal sm:text-xl ${
          isExpanded ? "" : "line-clamp-6 sm:line-clamp-none"
        }`}
      >
        {quote}
      </blockquote>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-sm font-medium text-sage-deep underline underline-offset-4 sm:hidden"
      >
        {isExpanded ? "See less" : "Read more"}
      </button>

      <p className="mt-4 font-semibold text-sage-deep">{name}</p>
      <p className="text-sm text-muted">{transition}</p>
    </li>
  );
};

export default TestimonialItem;