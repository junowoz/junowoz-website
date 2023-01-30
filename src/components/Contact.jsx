import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const [theme, setTheme] = React.useState("light");

    return (
        <div
            className={`flex flex-wrap justify-center gap-2 ${
                theme === "light" ? "text-gray-1000" : "text-white"
            }`}
        >
            <a
                href="resume_en.pdf"
                target="_blank"
                className="py-3 px-4 bg-gray-500 hover:bg-orange-600 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
                Resume
            </a>
            <a
                href="https://github.com/junowoz"
                target="_blank"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faSquareGithub} className="fa-2xl" />
            </a>
            <a
                href="https://linkedin.com/in/juanjosegouveac"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
            </a>
            <a
                href="https://twitter.com/junow0z"
                target="_blank"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faSquareTwitter} className="fa-2xl" />
            </a>
            <a
                href="mailto:junogouvea@gmail.com"
                className="p-1 inline-flex text-xl"
            >
                <FontAwesomeIcon icon={faEnvelope} className="fa-2xl" />
            </a>
        </div>
    );
}

export default Contact;
