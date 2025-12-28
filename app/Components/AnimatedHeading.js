"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AnimatedHeading() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // 🔴 Kill old triggers (important in Next.js)
    ScrollTrigger.getAll().forEach(t => t.kill());

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 500px)",
        isDesktop: "(min-width: 501px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        document.querySelectorAll(".main_heading").forEach((heading) => {
          const span = heading.querySelector("span");
          if (!span) return;

          // 🔴 Prevent double-splitting
          if (span.dataset.split === "true") return;
          span.dataset.split = "true";

          const text = span.innerText;
          span.innerHTML = "";

          // Split letters
          text.split("").forEach((letter) => {
            const letterSpan = document.createElement("span");
            letterSpan.textContent = letter === " " ? "\u00A0" : letter;
            letterSpan.style.opacity = 0;
            span.appendChild(letterSpan);
          });

          // Animation
          gsap.to(span.querySelectorAll("span"), {
            scrollTrigger: {
              trigger: span,
              start: `top ${isMobile ? "90%" : "80%"}`,
              end: `top ${isMobile ? "70%" : "60%"}`,
              scrub: 1,
            },
            opacity: 1,
            stagger: 0.1,
            ease: "power1.out",
          });
        });
      }
    );

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
