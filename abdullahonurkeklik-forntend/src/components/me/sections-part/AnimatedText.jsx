import React, { useEffect, useState } from "react";

const phrases = [
  "I'm UI/UX designer.",
  "Let's work together.",
  "I can create awesome stuff.",
];

export function AnimatedText() {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;

        if (typing) {
            if (displayedText.length < phrases[index].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(phrases[index].slice(0, displayedText.length + 1));
                }, 100);
            } else {
                // Pause before deleting
                timeout = setTimeout(() => setTyping(false), 1500);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(phrases[index].slice(0, displayedText.length - 1));
                }, 3);
            } else {
                // Move to next phrase
                setTyping(true);
                setIndex((prev) => (prev + 1) % phrases.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, typing, index]);

    return (
        <h2 className="text-2xl md:text-3xl font-semibold min-h-[3rem] whitespace-nowrap border-white pr-2 animate-caret">
            {displayedText}
        </h2>
    );
}
