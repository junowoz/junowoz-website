import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const [theme, setTheme] = React.useState("light");

    return (
        <div
            className={`flex flex-wrap justify-center gap-2 ${
                theme === "light" ? "text-gray-1000" : "text-white"
            }`}
        >
            <a
                href="https://gitconnected.com/junowoz/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 dark:bg-gray-600 bg-gray-300 dark:hover:bg-orange-600 hover:bg-purple-600 hover:text-white dark:text-white text-gray-900 font-bold rounded transition duration-600 ease-in-out transform hover:scale-105"
            >
                Resume
            </a>
            <a
                href="https://github.com/junowoz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faSquareGithub} className="fa-2xl" />
            </a>
            <a
                href="https://linkedin.com/in/juanjosegouveac"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
            </a>
            <a
                href="https://blog.junowoz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faBlogger} className="fa-2xl" />
            </a>
            <a
                href="https://twitter.com/junow0z"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faSquareTwitter} className="fa-2xl" />
            </a>
        </div>
    );
}

export default Contact;
