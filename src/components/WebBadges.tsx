import React from "react";
import Image from "next/image";

const WebBadges = () => {
  return (
    <div id="web-badges" className="flex flex-wrap gap-2">
      <Image width="88" height="31" alt="web-badge" src="/gif/email.gif" />
      <Image width="88" height="31" alt="web-badge" src="/gif/vim.gif" />
      <Image width="88" height="31" alt="web-badge" src="/gif/neko.gif" />
      <Image width="88" height="31" alt="web-badge" src="/gif/wwwbutton.gif" />
      <Image width="88" height="31" alt="web-badge" src="/gif/knbutton.gif" />
      <Image width="88" height="31" alt="web-badge" src="/gif/pensioner.gif" />
    </div>
  );
};

export default WebBadges;
