import React, { useEffect, useState } from "react";
import { HiExternalLink } from "react-icons/hi";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://vitae.junowoz.com/api/xdK76oVgKU"
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedProjects = data.projects.map((project) => {
          const imageName = project.name.split(" ")[0].toLowerCase();
          return {
            title: project.name,
            imgUrl: `/assets/${imageName}.png`,
            stack: project.stack.split(", "),
            link: project.url,
            repo: project.repo,
          };
        });
        setProjects(formattedProjects);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-hidden"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imgUrl}
                key={index}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
              />
            </a>
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base items-center px-3 py-2 transition-colors duration-300 ease-in-out rounded bg-gray-300 text-black  dark:bg-gray-600 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white border hover:border-transparent border-gray-500  "
                  >
                    <span className="font-semibold">
                      Site
                      <HiExternalLink className="inline ml-1" />
                    </span>
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base items-center px-3 py-2 transition-colors duration-300 ease-in-out rounded bg-gray-300 text-black  dark:bg-gray-600 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white border hover:border-transparent border-gray-500"
                  >
                    <span className="font-semibold">
                      Repo
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
