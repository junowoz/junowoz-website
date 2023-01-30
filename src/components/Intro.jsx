import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <img src="logo.png" alt="junowoz" className="mb-3" />
            <p className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">
                Juan José Gouvêa
            </p>
            <p className="text-3xl md:text-3xl mb-3 font-medium">
                Software Developer
            </p>
        </div>
    );
}

export default Intro;
