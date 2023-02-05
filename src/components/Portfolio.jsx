import React from "react";
import portfolio from "../data/portfolio";

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project) => (
                    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
                        <img
                            src={project.imgUrl}
                            alt="portfolio"
                            className="w-full h-36 md:h-48 object-cover cursor-pointer"
                        />

                        <div className="w-full p-4">
                            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
                                {project.title}
                            </h3>
                            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                                {project.stack.map((item) => (
                                    <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                        {item}
                                    </span>
                                ))}
                            </p>

                            <div className="flex flex-wrap gap-2 flex-row items-center justify-start mt-4">
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block items-center px-3 py-2 border-2 border-stone-900 dark:border-white rounded-md hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900 transition-colors duration-200 ease-in-out"
                                >
                                    <span className="font-medium dark:text-white">
                                        Code
                                    </span>
                                </a>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block items-center px-3 py-2 border-2 border-stone-900 dark:border-white rounded-md hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900 transition-colors duration-200 ease-in-out"
                                    >
                                        <span className="font-medium dark:text-white">
                                            Live
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
