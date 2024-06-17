/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        colors: {
            primary: '#f7f5ed',
            white: '#FFFFFF',
            secondary: "#c4abf9;",
            grey: "rgb(156 163 175)",
            green: "#68b06e",
            lightgreen: "hsl(183, 50%, 98%)",
            textg:"#03363d",
            gray:"#f3f4f6",
            primary1:"#fcb900;",
            textg:"#29484d",
            black:"#111",
            secondary1: "#809fff",

        },
        fontFamily: {
            'raleway': ['Raleway', 'sans-serif'],
        }, textUnderlineOffset: {
            8: '13px',
        }
    },
    plugins: [],
}