import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Terminal: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const terminalLines: { text: string; instant: boolean }[] = [
    { text: "E:\\", instant: true },
    { text: "λ npx create-next-app@latest connorcampbell", instant: false },
    { text: "E:\\", instant: true },
    { text: "λ cd connorcampbell", instant: false },
    { text: "E:\\connorcampbell (main -> origin)", instant: true },
    { text: "λ npm run dev", instant: false },
    { text: "> connorcampbell@0.1.0 dev", instant: true },
    { text: "> next dev", instant: true },
    {
      text: "- ready started server on 0.0.0.0:3000, url: connorcampbell.dev",
      instant: true,
    },
  ];

  return (
    <div>
      <div className="rounded-3xl bg-stone-900 p-6">
        <div className="mb-4 flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="h-96 overflow-y-auto rounded-lg p-2">
          <code className="text-stone-400">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(30)
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  .pasteString(
                    ' <span style="color: #22c55e;">E:\\</span><br/>'
                  )
                  .typeString(
                    "<span>λ npx create-next-app@latest connorcampbell</span><br/><br/>"
                  )
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  .pasteString('<span style="color: #22c55e;">E:\\</span><br/>')
                  .typeString("<span>λ cd connorcampbell</span><br/><br/>")
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  .pasteString(
                    '<span style="color: #22c55e;">E:\\connorcampbell</span> <span style="color: #fde047;">(main → origin)</span><br/>'
                  )
                  .typeString("<span>λ npm run dev</span><br/><br/>")
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  .pasteString("<span>- connorcampbell@0.1.0 dev</span><br/>")
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  .pasteString("<span>- next dev</span><br/><br/>")
                  .pauseFor(2000)
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  .pasteString(
                    "<span>- <span style='color: #34d399;'>ready</span> started server on 0.0.0.0:3000, url: connorcampbell.dev</span>"
                  )
                  .start();
              }}
            />
          </code>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
