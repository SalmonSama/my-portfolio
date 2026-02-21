/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "#0a192f",
                "navy-light": "#112240",
                "navy-lightest": "#233554",
                "dark-blue-bloom": "#0f172a",

                // teal is intentionally left to use Tailwind's built-in defaults
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
