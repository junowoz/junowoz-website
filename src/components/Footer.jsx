import React from "react";
import { BsArrowUp } from "react-icons/bs";

function Footer() {
    return (
        <div className="py-1 text-center">
            <button
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                className="bg-gray-600 text-white mb-10 px-2 py-2 rounded hover:bg-gray-700"
            >
                Back to top
                <BsArrowUp width={10} className="inline ml-2" />{" "}
            </button>

            <p className="text-sm mt-2  opacity-50 mb-10">
                &copy; {new Date().getFullYear()} Juan José Gouvêa. All rights
                reserved.
            </p>
        </div>
    );
}

export default Footer;
