import React from "react";
import timeline from "../data/timeline";
import Title from "./Title";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {timeline.map((item, index) => (
                    <ol
                        key={index}
                        className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700"
                    >
                        <li key={index} className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                            <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                                <span className="px-2 py-1.5 font-semibold text-white dark:text-stone-900 bg-gray-700 dark:bg-gray-100 rounded-md">
                                    {item.year}
                                </span>
                                <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                    {item.title}
                                    <p className="text-sm font-medium">
                                        {item.company}
                                    </p>
                                    <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                                        {item.duration}
                                    </div>
                                </h3>
                            </div>
                            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                                {item.details}
                            </p>
                        </li>
                    </ol>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
