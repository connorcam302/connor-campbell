import React, { useState } from "react";

type Language = {
    name: string;
    years: number;
    img?: string;
    colour: string;
    hover: string;
};

const experience: Array<Language> = [
    { name: "Java", years: 4, colour: "#dc2626", hover: "#f87171" },
    { name: "JavaScript", years: 4, colour: "#fbbf24", hover: "#fcd34d" },
    { name: "React", years: 3, colour: "#14b8a6", hover: "#2dd4bf" },
    { name: "SQL", years: 3, colour: "#0284c7", hover: "#38bdf8" },
    { name: "TypeScript", years: 0.5, colour: "#2563eb", hover: "#60a5fa" },
    { name: "PHP", years: 2, colour: "#6d28d9", hover: "#8b5cf6" },
];

const StackChart: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleRowMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleRowMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="w-full">
            {experience.map((language, i) => (
                <div
                    key={i}
                    className="flex h-12"
                    onMouseEnter={() => handleRowMouseEnter(i)}
                    onMouseLeave={handleRowMouseLeave}
                >
                    <div className="w-20 text-right pr-1 my-auto">{language.name}</div>
                    <div className="h-full w-1 bg-zinc-700" />
                    <div className="flex flex-auto transition-all">
                        <div
                            style={{
                                width: `${language.years / 5 * 100}%`,
                                backgroundColor: hoveredIndex === i ? language.hover : language.colour,
                            }}
                            className="h-1 my-auto duration-200"
                        />
                        <img src={language.img || "/logos/java.png"} className="w-10 h-10 transition-all" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StackChart;

