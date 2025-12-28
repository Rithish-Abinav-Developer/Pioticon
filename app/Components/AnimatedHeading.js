"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AnimatedHeading() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 500px)",
          isDesktop: "(min-width: 501px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          document.querySelectorAll(".main_heading span").forEach((span) => {
            // ✅ Store original text (only once)
            if (!span.dataset.originalText) {
              span.dataset.originalText = span.textContent;
            }

            const text = span.dataset.originalText;

            // ✅ Reset DOM every time
            span.innerHTML = "";

            [...text].forEach((char) => {
              const letter = document.createElement("span");
              letter.textContent = char === " " ? "\u00A0" : char;
              letter.style.opacity = 0;
              span.appendChild(letter);
            });

            gsap.to(span.children, {
              opacity: 1,
              stagger: 0.08,
              ease: "power1.out",
              scrollTrigger: {
                trigger: span,
                start: `top ${isMobile ? "90%" : "80%"}`,
                end: `top ${isMobile ? "70%" : "60%"}`,
                scrub: 1,
              },
            });
          });
        }
      );
    });

    return () => ctx.revert(); // 🔥 cleans ONLY this component
  }, []);

  return null;
}
