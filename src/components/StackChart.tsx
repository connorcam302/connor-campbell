import React, { useState } from "react";

type Language = {
    name: string;
    years: number;
    colour: string;
    hover: string;
};

const experience: Language[] = [
    { name: "SQL", years: 3, colour: "#336791", hover: "#5c85a7" },
    { name: "Java", years: 4, colour: "#FF9725", hover: "#ffac51" },
    { name: "JavaScript", years: 4, colour: "#F0DB4F", hover: "#f5e684" },
    { name: "React", years: 3, colour: "#00D7FE", hover: "#4de3f7" },
    { name: "TypeScript", years: 0.5, colour: "#3178C6", hover: "#518fd4" },
    { name: "PHP", years: 2, colour: "#4F5B93", hover: "#6471ac" },
];

experience.sort((a, b) => b.years - a.years);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const largest = experience[0].years;


const StackChart: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleRowMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleRowMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="w-full relative">
            <div className="w-full flex flex-auto font-bold text-center h-8 mt-2 mb-8">
                <div className="flex flex-auto cursor-pointer hover:bg-zinc-400 duration-300 border-solid border-0 border-r border-l border-zinc-600 w-1/3"><div className="m-auto">Language</div></div>
                <div className="flex flex-auto cursor-pointer hover:bg-zinc-400 duration-300 w-1/3"><div className="m-auto">Framework</div></div>
                <div className="flex flex-auto cursor-pointer hover:bg-zinc-400 duration-300 border-solid border-0 border-r border-l border-zinc-600 w-1/3"><div className="m-auto">Tools</div></div>
            </div>
            <div className="relative z-10">
                {experience.map((language, i) => (
                    <div
                        key={i}
                        className="flex h-12"
                        onMouseEnter={() => handleRowMouseEnter(i)}
                        onMouseLeave={handleRowMouseLeave}
                    >
                        <div className="w-28 text-right pr-1 my-auto text-xl font-bold">{language.name}</div>
                        <img
                            src={`logos/${language.name}.png`}
                            className="my-auto mx-2 w-10 h-10 transition-all z-10"
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
                            {                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
                ))}
            </div>
        </div>
    );
};

export default StackChart;
