import Image from "next/image";
import React, { useState } from "react"

type Experience = {
    name: string;
    years: number;
    colour: string;
    hover: string;
    img: string;
};

function getYearsDifference(targetDate: Date, tillDate: Date): number {
    const currentDate: Date = tillDate
    const millisecondsPerYear: number = 1000 * 60 * 60 * 24 * 365.25; // Considering leap years

    const timeDifference: number = currentDate.getTime() - targetDate.getTime();
    const yearsDifference: number = timeDifference / millisecondsPerYear;

    return parseFloat(yearsDifference.toFixed(2));
}


const languages: Experience[] = [
    { name: "SQL", years: getYearsDifference(new Date("2020-01-25"), new Date()), colour: "#0079D6", hover: "#3394de", img: "sql.png" },
    { name: "Java", years: getYearsDifference(new Date("2019-09-05"), new Date()), colour: "#FF9725", hover: "#ffac51", img: "java.png" },
    { name: "JavaScript", years: getYearsDifference(new Date("2019-09-05"), new Date()), colour: "#F0DB4F", hover: "#f5e684", img: "js.png" },
    { name: "TypeScript", years: getYearsDifference(new Date("2023-02-05"), new Date()), colour: "#3178C6", hover: "#518fd4", img: "ts.png" },
    { name: "PHP", years: getYearsDifference(new Date("2019-09-05"), new Date("2021-06-06")), colour: "#4F5B93", hover: "#6471ac", img: "php.png" },
    { name: "HTML", years: getYearsDifference(new Date("2018-09-05"), new Date()), colour: "#E44D26", hover: "#F16529", img: "html.png" },
    { name: "CSS", years: getYearsDifference(new Date("2018-09-05"), new Date("2022-06-06")), colour: "#264DE4", hover: "#2965F1", img: "css.png" },
];

const framework: Experience[] = [
    { name: "Tailwind", years: getYearsDifference(new Date("2022-09-25"), new Date()), colour: "#38BDF8", hover: "#60caf9", img: "tailwind.png" },
    { name: "Next.js", years: getYearsDifference(new Date("2022-09-25"), new Date()), colour: "#000000", hover: "#333333", img: "nextjs.png" },
    { name: "React", years: getYearsDifference(new Date("2020-09-05"), new Date()), colour: "#00D7FE", hover: "#4de3f7", img: "react.png" },
    { name: "Node.js", years: getYearsDifference(new Date("2021-04-05"), new Date()), colour: "#70A761", hover: "#8db981", img: "nodejs.png" },
];

const tools: Experience[] = [
    { name: "Visual Studio Code", years: getYearsDifference(new Date("2019-02-25"), new Date()), colour: "#43ACF2", hover: "#69bdf5", img: "vscode.png" },
    { name: "Docker", years: getYearsDifference(new Date("2022-06-25"), new Date()), colour: "#066da5", hover: "#388ab7", img: "docker.png" },
    { name: "Neovim", years: getYearsDifference(new Date("2022-10-05"), new Date()), colour: "#5b973b", hover: "#7cac62", img: "neovim.png" },
    { name: "Git", years: getYearsDifference(new Date("2021-02-05"), new Date()), colour: "#f05033", hover: "#f3735c", img: "git.png" },
    { name: "AWS", years: getYearsDifference(new Date("2022-01-05"), new Date()), colour: "#223040", hover: "#384553", img: "aws.png" },
    { name: "Vercel", years: getYearsDifference(new Date("2023-03-05"), new Date()), colour: "#000000", hover: "#333333", img: "vercel.png" },
];

languages.sort((a, b) => b.years - a.years);
framework.sort((a, b) => b.years - a.years);
tools.sort((a, b) => b.years - a.years);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

interface ComponentProps {
    experience: Experience[];
}

const StackChartSkeleton: React.FC<ComponentProps> = ({ experience }) => {
    const largest = Math.ceil(experience[0]?.years || 0);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleRowMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleRowMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="w-full relative">
            <div className="relative z-10 pr-1">
                {experience.map((language, i) => (
                    <div key={i} className="group">
                        <div
                            className="flex h-14"
                            onMouseEnter={() => handleRowMouseEnter(i)}
                            onMouseLeave={handleRowMouseLeave}
                        >
                            <Image
                                width={48}
                                height={48}
                                alt={`${language.name} Logo`}
                                src={`/static/logos/${language.img}`}
                                className="my-auto mx-2 h-12 w-12 transition-all z-10"
                            />
                            <div className="h-full w-1 bg-zinc-700" />
                            <div className="flex flex-auto transition-all relative">
                                <div className="flex duration-200" style={{
                                    width: `${(language.years / largest) * 100}%`
                                }}>

                                    <div
                                        style={{
                                            backgroundColor: hoveredIndex === i ? language.hover : language.colour,
                                        }}
                                        className="h-3 w-full my-auto duration-200 z-10"
                                    />
                                </div>
                                {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                }
                                {[...Array<number>(largest)].map((_, j) => (
                                    <div
                                        key={j}
                                        className="absolute top-0 bottom-0 bg-zinc-400 w-0.5 h-full z-0"
                                        style={{
                                            left: `calc(${(100 / largest) * (j + 1)}% - 0.5px)`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="pointer-events-none absolute left-1/2 z-20 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">{language.name}</div>
                    </div>
                ))}
            </div>
            <div className="flex w-full=">
                <div className="h-10 w-14 mx-2" />
                <div className="w-full">
                    <div className="flex flex-auto">
                        {[...Array<number>(largest)].map((_, j) => (
                            <div
                                key={j}
                                className="pl-2 w-0.5 h-5 flex-auto text-right font-bold text-zinc-500"
                                style={{
                                    left: `calc(${(100 / largest) * (j + 1)}%)`,
                                }}
                            >{j + 1}</div>
                        ))}
                    </div>
                    <div className="w-full text-center font-bold text-zinc-500"> Years </div>
                </div>
            </div>
        </div >
    );
};



const StackChart: React.FC = () => {
    const [chart, setChart] = useState(languages)

    return (
        <div>
            <div className="w-full flex flex-auto font-bold text-center mt-2 mb-8">
                <div onClick={() => setChart(languages)} className="flex flex-auto p-1 cursor-pointer hover:bg-zinc-400 duration-300 border-solid border-0 border-r border-l border-zinc-600 w-1/3">
                    <div className="m-auto">Languages</div>
                </div>
                <div onClick={() => setChart(framework)} className="flex flex-auto p-1 cursor-pointer hover:bg-zinc-400 duration-300 w-1/3">
                    <div className="m-auto">Frameworks & More</div>
                </div>
                <div onClick={() => setChart(tools)} className="flex flex-auto p-1 cursor-pointer hover:bg-zinc-400 duration-300 border-solid border-0 border-r border-l border-zinc-600 w-1/3">
                    <div className="m-auto">Tools</div>
                </div>
            </div>
            <div className="h-96">
                <StackChartSkeleton experience={chart} />
            </div>
        </div>)
}

export default StackChart;
