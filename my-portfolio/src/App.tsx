import React, { useState } from "react";
import StartupTerminal from "./components/StartupTerminal";
import ProfileIntro from "./components/ProfileIntro";
import Terminal from "./components/Terminal";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="w-full h-screen">
      {!booted ? (
        <StartupTerminal onFinish={() => setBooted(true)} />
      ) : (
        <Terminal />
      )}
    </div>
  );
};













