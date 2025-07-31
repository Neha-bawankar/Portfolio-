import React, { useState, useEffect, useRef } from "react";
import { commands } from "../config/data";
import bgVideo from "../assets/bgVideo1.mp4";
import IdCard from "../components/Card";
import ProfileIntro from "../components/ProfileIntro";
import { Terminal as TerminalIcon } from "lucide-react";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  timestamp: Date;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loaderLoading, setLoaderLoading] = useState(true);

  // Terminal welcome message
  useEffect(() => {
    setHistory([
      {
        command: "",
        output: (
          <div className="space-y-3">
            <div className="text-green-500 font-bold text-lg">
              Welcome to my Interactive Portfolio Terminal!
            </div>
            <div className="text-gray-300">
              <p>
                Type <span className="text-yellow-400">'help'</span> to see
                available commands.
              </p>
              <p>Use arrow keys to navigate command history.</p>
            </div>
            <div className="text-gray-500 text-sm">
              Last login: {new Date().toLocaleString()}
            </div>
          </div>
        ),
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto scroll terminal & set view counter
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }

    const savedCount = localStorage.getItem("visitorCount");
    const newCount = savedCount ? parseInt(savedCount) + 1 : 1;
    setVisitorCount(newCount);
    localStorage.setItem("visitorCount", newCount.toString());
  }, [history]);

  // ✅ Execute commands with validation
  // Execute commands
 const executeCommand = async (cmd: string) => {
  const trimmedCmd = cmd.trim();

  if (trimmedCmd === "clear") {
    setHistory([]);
    return;
  }

  setIsLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 500));

  // ✅ No lowercase conversion, match exact case
  const output = commands[trimmedCmd as keyof typeof commands]?.() || (
    <div className="text-red-400">
      Command not found: {cmd}. Type <span className="text-yellow-400">'help'</span> to see available commands.
    </div>
  );

  setHistory((prev) => [
    ...prev,
    { command: cmd, output, timestamp: new Date() },
  ]);

  setIsLoading(false);
};

    

  // Handle input submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    executeCommand(input);
    setInput("");
  };

  // Navigate command history
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  // Clock component
  const Clock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval);
    }, []);
    return (
      <span className="text-green-500 text-sm">
        {time.toLocaleTimeString()}
      </span>
    );
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <div className="bg-black min-h-screen h-screen">
      {loaderLoading ? (
        <ProfileIntro
          onFinish={(name) => {
            setUsername(name);
            localStorage.setItem("username", name);
            setLoaderLoading(false);
          }}
        />
      ) : (
        <div className="min-h-screen h-screen font-mono flex text-green-500 relative overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setLoaderLoading(false)}
          />

          <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

          {/* Header */}
          <div className="fixed top-0 left-0 w-full h-20 z-30 flex flex-row justify-between px-6 bg-opacity-30 backdrop-blur-md">
            <div className="flex flex-col justify-center">
              <p className="text-green-500 text-lg font-bold">Neha Bawankar</p>
              <p className="text-gray-300 text-sm">Full Stack Java Developer</p>
            </div>

            <div className="hidden sm:flex flex-col justify-center items-end text-gray-300">
              <span className="text-sm">
                Username:{" "}
                <span className="text-yellow-400">{username || "Guest"}</span>
              </span>
              <span className="text-sm">
                Visitors: <span className="text-green-400">{visitorCount}</span>
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 flex w-full">
            <IdCard
              cardFlipped={cardFlipped}
              setCardFlipped={setCardFlipped}
              isCardHovered={isCardHovered}
              setIsCardHovered={setIsCardHovered}
              cardRef={cardRef}
            />

            {/* Terminal UI */}
            <div className="w-full lg:w-2/3 lg:border-l border-gray-800 pt-16">
              <div
                ref={terminalRef}
                className="h-screen p-4 px-2 overflow-y-auto cursor-text"
                onClick={focusInput}>
                <div className="max-w-6xl mx-auto px-2">
                  <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm lg:text-base">
                    <TerminalIcon size={16} />
                    <span className="hidden sm:inline">
                      Portfolio Terminal v1.0.0
                    </span>
                    <span className="sm:hidden">Terminal v1.0.0</span>
                  </div>

                  <div className="space-y-4">
                    {history.map((item, index) => (
                      <div key={index}>
                        {item.command && (
                          <div className="flex items-center gap-2 text-green-500">
                            <span className="text-yellow-400">
                              Nehabawankar@portfolio:~$
                            </span>
                            <span>{item.command}</span>
                          </div>
                        )}
                        <div className="mt-2">{item.output}</div>
                      </div>
                    ))}
                  </div>

                  {isLoading && (
                    <div className="flex items-center gap-2 mt-4 text-yellow-400">
                      <span>Processing</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div
                          className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}></div>
                        <div
                          className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2 mt-4">
                    <span className="text-yellow-400">
                      Nehabawankar@portfolio:~$
                    </span>
                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-transparent outline-none text-green-500 pr-4"
                        autoFocus
                        spellCheck={false}
                      />
                      {/* Blinking caret */}
                      <span
                        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2"
                        style={{
                          transform: `translateY(-50%) translateX(calc(${input.length}ch + 0.25rem))`,
                        }}>
                        <span className="block w-[1ch] h-6 bg-green-500 animate-blink" />
                      </span>
                    </div>
                  </form>

                  <div className="h-20"></div>
                </div>
              </div>
            </div>
          </div>

          <footer className="fixed bottom-0 left-0 w-full z-30 flex justify-end items-center py-2 pr-4">
            <Clock />
          </footer>
        </div>
      )}
    </div>
  );
};

export default Terminal;
