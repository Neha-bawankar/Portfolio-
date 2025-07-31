import React, { useRef, useState } from "react";
import {
  MapPin,
  Code,
  Download,
  Github,
  Briefcase,
  Instagram,
  Linkedin,
} from "lucide-react";
import myProfile from "../assets/profile.jpeg";

interface IdCardProps {
  cardFlipped: boolean;
  setCardFlipped: (v: boolean) => void;
  isCardHovered: boolean;
  setIsCardHovered: (v: boolean) => void;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

const IdCard: React.FC<IdCardProps> = ({
  cardFlipped,
  setCardFlipped,
  isCardHovered,
  setIsCardHovered,
  cardRef,
}) => {
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    setLocalMousePosition((prev) => ({
      x: x * 0.9 + prev.x * 0.1,
      y: y * 0.9 + prev.y * 0.1,
    }));

    updateGlowEffect(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setLocalMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
    setIsCardHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsCardHovered(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1T3-32Y05fJH8yhh3x0hfQgfKA_qR6kIm/view?usp=drive_link";
    link.download = "Neha_Bawankar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Resume downloaded successfully!");
  };

  const updateGlowEffect = (mouseX: number, mouseY: number) => {
    const currentCard = cardFlipped
      ? backCardRef.current
      : frontCardRef.current;
    if (!currentCard) return;

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const relativeX = mouseX / containerRect.width;
    const relativeY = mouseY / containerRect.height;

    const gradientX = relativeX * 100;
    const gradientY = relativeY * 100;

    currentCard.style.background = `
      radial-gradient(circle at ${gradientX}% ${gradientY}%, 
        rgba(34, 197, 94, 0.15), 
        rgba(17, 24, 39, 0.95) 40%),
      linear-gradient(to bottom right, #1f2937, #111827)
    `;
  };

  const rotateX = -localMousePosition.y * 5;
  const rotateY = localMousePosition.x * 5;

  return (
    <div
      ref={containerRef}
      className="hidden lg:flex w-1/3 p-8 items-center justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}>
      <div
        ref={cardRef} // ✅ cardRef works as prop now
        onClick={() => setCardFlipped(!cardFlipped)}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            cardFlipped ? "rotateY(180deg)" : ""
          }`,
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease",
          position: "relative",
          width: "380px",
          height: "500px",
        }}>
        {/* Front Card */}
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
          }}>
          <div
            ref={frontCardRef}
            className="rounded-lg shadow-2xl p-6 w-full h-full border border-gray-900 relative overflow-hidden flex flex-col justify-between opacity-85"
            style={{
              boxShadow:
                isHovering && !cardFlipped
                  ? "0 0 15px 2px rgba(34, 197, 94, 0.3)"
                  : "0 4px 6px -1px rgba(0,0,0,0.1)",
              background: "linear-gradient(to bottom right, #1f2937, #111827)",
            }}>
            <div className="text-center mb-4">
              <div className="w-36 h-36 rounded-full mx-auto mb-3 shadow-lg">
                <img
                  src={myProfile}
                  className="w-32 h-32 rounded-full object-cover"
                  alt="profile"
                  crossOrigin="anonymous"
                />
              </div>
              <h2 className="text-2xl font-bold text-white">Neha Bawankar</h2>
              <p className="text-green-500 text-sm">
                Full Stack Java Developer
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={14} className="text-green-500" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Briefcase size={14} className="text-green-500" />
                <span>
                  Full Stack Developer{" "}
                  <a
                    href="https://castallio.com"
                    target="_blank"
                    className="hover:text-green-500"
                    onClick={(e) => e.stopPropagation()}
                    rel="noopener noreferrer">
                    @Castallio
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Code size={14} className="text-green-500" />
                <span>React, TailwindCss, Java</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center">
              <a
                href="https://github.com/Neha-bawankar"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-green-500 hover:text-green-500"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}>
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/neha-n-bawankar-2282891b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-green-500 hover:text-green-500"
                aria-label="LinkedIn"
                onClick={(e) => e.stopPropagation()}>
                <Linkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/neha_n_bawankar" // 🔹 Replace with your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-green-500 hover:text-green-500"
                aria-label="Instagram"
                onClick={(e) => e.stopPropagation()}>
                <Instagram size={22} />
              </a>
            </div>

            <div className="flex gap-2">
              <button
                className="flex-1 relative bg-gray-700 text-white py-2 px-3 rounded flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadResume();
                }}>
                <div className="flex items-center gap-1 relative z-10">
                  <Download size={12} />
                  Resume
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            transformStyle: "preserve-3d",
          }}>
          <div
            ref={backCardRef}
            className="rounded-lg shadow-2xl p-6 w-full h-full border border-gray-700 relative overflow-hidden"
            style={{
              boxShadow:
                isHovering && cardFlipped
                  ? "0 0 15px 2px rgba(34, 197, 94, 0.3)"
                  : "0 4px 6px -1px rgba(0,0,0,0.1)",
              background: "linear-gradient(to bottom right, #1f2937, #111827)",
            }}>
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-white mb-2">Quick Stats</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded p-3">
                <div className="text-green-500 text-sm font-semibold">
                  Projects Completed
                </div>
                <div className="text-white text-2xl font-bold">3+</div>
              </div>
              <div className="bg-gray-700/50 rounded p-3">
                <div className="text-green-500 text-sm font-semibold">
                  Technologies Mastered
                </div>
                <div className="text-white text-2xl font-bold">10+</div>
              </div>
              <div className="bg-gray-700/50 rounded p-3">
                <div className="text-green-500 text-sm font-semibold">
                  Leetcode
                </div>
                <div className="text-white text-xl font-bold">
                  Solving questions
                </div>
              </div>
              <div className="bg-gray-700/50 rounded p-3">
                <div className="text-green-500 text-sm font-semibold">
                  My ChatGPT Main Job
                </div>
                <div className="text-white text-xl font-bold">
                  Hearing "fix this, please."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
