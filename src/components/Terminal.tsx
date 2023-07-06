import React, { useEffect, useState } from "react";

const terminalLines: string[] = [
  "E:\\",
  "λ npx create-next-app@latest connorcampbell",
  "",
  "E:\\",
  "λ cd connorcampbell",
  "",
  "E:\\connorcampbell (main -> origin)",
  "λ npm run dev",
  "",
  "> connor-campbell@0.1.0 dev",
  "> next dev",
  "",
  "- ready started server on 0.0.0.0:3000, url: connorcampbell.dev",
];

const Terminal: React.FC = () => {
  const [visibleText, setVisibleText] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    let currentLineIndex = 0;
    let currentLine = "";

    const interval = setInterval(() => {
      if (currentIndex === terminalLines.length) {
        clearInterval(interval);
      } else {
        const line = terminalLines[currentIndex];
        const lineLength = line.length;

        if (currentLineIndex < lineLength) {
          currentLine += line[currentLineIndex];
          currentLineIndex++;
        } else {
          setVisibleText((prevVisibleText) => [...prevVisibleText, currentLine]);
          currentIndex++;
          currentLineIndex = 0;
          currentLine = "";
        }
      }

      setVisibleText((prevVisibleText) => [...prevVisibleText.slice(0, -1), currentLine]);
    }, 50); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="rounded-3xl bg-stone-900 p-6">
        <div className="mb-4 flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="h-72 overflow-y-auto rounded-lg p-2">
          <span className="text-stone-400">
            {visibleText.map((line, index) => (
              <p key={index}>
                <code>{line}</code>
              </p>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
