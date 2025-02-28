/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            "big": { max: "1600px" },

            xl: { max: "1279px" },

            lg: { max: "1030px" },

            "2md": { max: "836px" },

            md: { max: "767px" },

            sm: { max: "639px" },

            xs: { max: "479px" },
        },
    },
    plugins: [],
}