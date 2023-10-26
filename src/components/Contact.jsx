import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlogger,
  faSquareXTwitter,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [theme, setTheme] = React.useState("light");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("https://vitae.junowoz.com/api/xdK76oVgKU")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data.basics.profiles);
      });
  }, []);

  const portfolioUrl =
    profiles.find((p) => p.network === "Portfólio")?.url || "#";

  return (
    <div
      className={`flex flex-wrap justify-center gap-2 ${
        theme === "light" ? "text-gray-1000" : "text-white"
      }`}
    >
      <a
        href={portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-4 dark:bg-gray-600 bg-gray-300 dark:hover:bg-orange-600 hover:bg-purple-600 hover:text-white dark:text-white text-gray-900 font-bold rounded transition duration-600 ease-in-out transform hover:scale-105"
      >
        Currículo
      </a>
      {profiles.map((profile) => {
        let icon;
        switch (profile.network) {
          case "GitHub":
            icon = faSquareGithub;
            break;
          case "LinkedIn":
            icon = faLinkedin;
            break;
          case "Blog":
            icon = faBlogger;
            break;
          case "Twitter":
            icon = faSquareXTwitter;
            break;
          default:
            return null;
        }

        return (
          <a
            key={profile.network}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 inline-flex text-xl"
          >
            <FontAwesomeIcon icon={icon} className="fa-2xl" />
          </a>
        );
      })}
    </div>
  );
}

export default Contact;
