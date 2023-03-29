import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <p className="text-5xl md:text-5xl">
                <img
                    className="h-20 w-20"
                    src="https://em-content.zobj.net/thumbs/120/whatsapp/326/globe-with-meridians_1f310.png"
                    alt=""
                />
            </p>
            <br />
            <p className="text-4xl md:text-5xl dark:text-white mb-3 md:my-3 font-bold">
                Juan José Gouvêa
            </p>
            <p className="text-3xl md:text-3xl font-medium">
                Software Developer
            </p>
        </div>
    );
}

export default Intro;
