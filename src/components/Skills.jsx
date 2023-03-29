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
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <button
                                disabled
                                key={index}
                                className="items-center px-3 py-2 rounded-md bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100 "
                            >
                                <span key={index} className="font-semibold">
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
