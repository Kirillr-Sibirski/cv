"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function FlipPageToggle({
  href,
  label,
  theme,
}: {
  href: string;
  label: string;
  theme: "blockchain" | "engineer";
}) {
  const router = useRouter();
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    if (isFlipping) return;

    setIsFlipping(true);

    window.setTimeout(() => {
      router.push(href);
    }, 420);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleFlip}
        className="resume-flip-trigger print:hidden"
        data-theme={theme}
        aria-label={label}
      >
        <span className="resume-flip-hint">{label}</span>
        <span className="resume-flip-corner" aria-hidden="true">
          <span className="resume-flip-corner-fold" />
        </span>
      </button>

      <div
        className="resume-flip-overlay print:hidden"
        data-theme={theme}
        data-state={isFlipping ? "flipping" : "idle"}
        aria-hidden="true"
      />
    </>
  );
}
