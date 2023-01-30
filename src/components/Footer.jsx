import React from "react";

function Footer() {
    return (
        <div className="py-1 text-center">
            <p className="text-sm mt-2  opacity-50 mb-10">
                &copy; {new Date().getFullYear()} Juan José Gouvêa. All rights
                reserved.
            </p>
        </div>
    );
}

export default Footer;
