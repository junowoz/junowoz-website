//  import React from "react";
//  import skills from "../data/skills";
//  import Title from "./Title";

//  function Skills() {
//      return (
//          <div className="flex flex-col md:flex-row justify-center my-20">
//              <div className="w-full md:w-7/12">
//                  <Title>Skills</Title>
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                      {skills.map((skill) => (
//                          <button className="inline-block items-center px-3 py-2 border-2 border-stone-900 dark:border-white rounded-md hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900">
//                              <span className="font-medium">{skill.name}</span>
//                          </button>
//                      ))}
//                  </div>
//              </div>
//          </div>
//      );
//  }

//  export default Skills;

import React from "react";
import skills from "../data/skills";
import Title from "./Title";

const categories = [
    {
        name: "Front-End",
        skills: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
    },
    {
        name: "Back-End",
        skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
    },
    {
        name: "Others",
        skills: ["Git"],
    },
];

function Skills() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Skills</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((category) => (
                        <div className="mb-4">
                            <h3 className="font-medium">{category.name}</h3>
                            <ul className="list-disc pl-5">
                                {category.skills.map((skill) => (
                                    <li>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;


