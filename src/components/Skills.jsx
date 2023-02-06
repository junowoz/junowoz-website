import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios
            .get("https://gitconnected.com/v1/portfolio/junowoz")
            .then((response) => {
                setSkills(response.data.skills);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center my-20">
                <div className="md:w-7/12">
                    <Title>Skills</Title>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((skill) => (
                            <button className="inline-block items-center px-3 py-2 border-2 border-stone-900 dark:border-white rounded-md hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900">
                                <span className="font-medium">
                                    {skill.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
