import { useEffect, useState } from "react";

interface StartupTerminalProps {
  onFinish: () => void;
    
}

const bootMessages = [
  "Loading profile: Neha Bawankar",
  "Establishing terminal connection...",
  "Rendering interface...",
  "System Status: Initializing...100%"
];

export default function StartupTerminal({ onFinish }: StartupTerminalProps) {
  const [currentText, setCurrentText] = useState("");
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < bootMessages.length) {
      if (charIndex < bootMessages[lineIndex].length) {
        const charTimer = setTimeout(() => {
          setCurrentText(prev => prev + bootMessages[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 30);
        return () => clearTimeout(charTimer);
      } else {
        const lineTimer = setTimeout(() => {
          setDisplayLines(prev => [...prev, bootMessages[lineIndex]]);
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
          setCurrentText("");
        }, 500);
        return () => clearTimeout(lineTimer);
      }
    } else {
      const finishTimer = setTimeout(onFinish, 1500);
      return () => clearTimeout(finishTimer);
    }
  }, [charIndex, lineIndex]);

  return (
    <div
      className="relative w-full h-screen text-green-400 text-lg overflow-hidden bg-black"
      style={{ fontFamily: "'Fira Code', monospace" }}
    >
      {/* ✅ Hacker Terminal Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950 to-black"></div>

      {/* ✅ Subtle scan lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.08)_1px,transparent_1px)] bg-[length:100%_2px] opacity-20"></div>

      {/* ✅ Matrix-like animated glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,0,0.15)_1px,transparent_1px)] bg-[length:3px_3px] opacity-20 animate-pulse"></div>

      {/* Boot Text */}
      <div className="relative flex items-center justify-center h-full z-10">
        <div className="space-y-2 text-center">
          {displayLines.map((line, idx) => (
            <div key={idx} className="drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]">
              {line}
            </div>
          ))}

          {lineIndex < bootMessages.length && (
            <div className="drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]">
              {currentText}
              <span className="animate-blink">_</span>
            </div>
          )}
        </div>
      </div>

      {/* Blinking cursor animation */}
      <style>{`
        .animate-blink {
          animation: blink 0.8s steps(2, start) infinite;
        }
        @keyframes blink {
          to { visibility: hidden; }
        }
      `}</style>
    </div>
  );
}

