import Typewriter from "typewriter-effect";

interface TerminalProps {
    setContinueButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const Terminal: React.FC<TerminalProps> = ({ setContinueButton }) => {

    return (
        <div>
            <div className="rounded-3xl bg-stone-900 p-6 m-4">
                <div className="mb-4 flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="md:h-80 h-64 overflow-y-auto rounded-lg p-2">
                    <code className="md:text-sm text-xs text-stone-400">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(60)
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
                                    .pauseFor(2000)
                                    .callFunction(() => {
                                        setContinueButton(true)
                                    })
                                    .start()

                            }}
                        />
                    </code>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
