module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{jsx, js}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                inter: ["inter", "serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
