import { React, useState } from "react";

function Intro() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch("https://vitae.junowoz.com/api/xdK76oVgKU")
      .then((response) => response.json())
      .then((data) => {
        const formattedInfos = data.basics.map((infos) => {
          return {
            name: infos.name,
            label: infos.label,
          };
        });
        setInfos(formattedInfos);
      });
  }, []);
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <p className="text-5xl md:text-5xl">
        <img
          className="h-20 w-20"
          src="https://em-content.zobj.net/thumbs/120/whatsapp/326/globe-with-meridians_1f310.png"
          alt="Globe"
        />
      </p>
      <br />
      <p className="text-3xl md:text-5xl dark:text-white mb-3 md:my-3 font-bold">
        {/* Juan José Gouvêa */}
        {infos.name}
      </p>
      <p className="text-2xl md:text-3xl font-medium">
        {/* Desenvolvedor de Software */}
        {infos.label}
      </p>
    </div>
  );
}

export default Intro;
