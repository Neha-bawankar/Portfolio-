import React, { useEffect, useState } from "react";

interface ProfileIntroProps {
  onFinish: (username: string) => void;
}

export default function ProfileIntro({ onFinish }: ProfileIntroProps) {
  const [showInput, setShowInput] = useState(false);
  const[username, setUsername] =useState("");
  const [userName, setUserName] = useState("");
  const [inputName, setInputName] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowInput(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputName.trim() === "") {
        alert("⚠️ Please enter your name!");
        return;
      }
      setUserName(inputName.trim());
      setShowWelcome(true);
    }
  };

  const handleOkClick = () => {
    if (userName.trim()) {
    onFinish(userName.trim()); 
  }
  };

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* 🔥 Hacker Gradient Layer */}
      {/*   <div className="absolute inset-0 bg-[conic-gradient(at_top,_rgba(0,255,65,0.6),_rgba(0,255,255,0.6),_rgba(255,0,51,0.6),_rgba(127,0,255,0.6),_rgba(0,255,65,0.6))] animate-spin-slow opacity-70"></div>*/}

      {/* 🕶️ Dark Cyber Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,65,0.15)_1px,transparent_1px),linear-gradient(rgba(0,255,65,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-fade"></div>

      {/* ✨ Particle Glow Effect */}
    

      {/* Content */}
      <div className="relative z-10 text-center space-y-5 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Hi 👋 I'm <span className="animate-hacker-text">Neha N Bawankar</span> 👾
        </h1>
        <p className="text-lg md:text-xl font-medium italic text-white">
          💡 “Turning ideas into code, and code into experiences.”
        </p>

        {showInput && !showWelcome && (
          <div className="mt-6">
            <p className="text-lg font-semibold mb-3 text-white">
              🚀 Enter your name to unlock the portfolio:
            </p>
            <input
              type="text"
              placeholder="> Type & hit Enter"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onKeyDown={handleKeyDown}
              className="px-5 py-2 rounded-full text-black outline-none shadow-xl border-2 border-[#00ff41] text-center w-72"
            />
          </div>
        )}

        {showWelcome && (
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-white animate-bounce">
              🎉 Access Granted, {userName}! 🔓
            </h1>
            <p className="mt-3 font-medium text-white">
              🌟 Welcome to the code vault.
            </p>
            <button
              onClick={handleOkClick}
              className="mt-4 px-6 py-2 bg-[#00ff41] text-white font-bold rounded-full shadow-lg hover:bg-[#00cc33] transition"
            >
              OK, Let's Go!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}



/* Add this to your Tailwind CSS config or a CSS file */
