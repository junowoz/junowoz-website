import React from "react";
import portfolio from "../data/portfolio";
import { HiExternalLink } from "react-icons/hi";

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project, index) => (
                    <div
                        key={index}
                        className="border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-hidden"
                    >
                        <img
                            src={project.imgUrl}
                            key={index}
                            alt="portfolio"
                            className="w-full h-36 md:h-48 object-cover cursor-pointer"
                        />

                        <div className="w-full p-4">
                            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
                                {project.title}
                            </h3>
                            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                                {project.stack.map((item, index) => (
                                    <span
                                        key={`stackItem-${index}`}
                                        className="px-2 py-1 font-medium text-ms rounded bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white "
                                    >
                                        {item}
                                    </span>
                                ))}
                            </p>

                            <div className="flex flex-wrap gap-2 flex-row items-center justify-start mt-4">
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base items-center px-3 py-2 transition-colors duration-300 ease-in-out rounded bg-gray-300 text-black  dark:bg-gray-600 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white border hover:border-transparent border-gray-500"
                                    >
                                        <span className="font-semibold">
                                            Code
                                            <HiExternalLink className="inline ml-1" />
                                        </span>
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base items-center px-3 py-2 transition-colors duration-300 ease-in-out rounded bg-gray-300 text-black  dark:bg-gray-600 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white border hover:border-transparent border-gray-500  "
                                    >
                                        <span className="font-semibold">
                                            Live
                                            <HiExternalLink className="inline ml-1" />
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
