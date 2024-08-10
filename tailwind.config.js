/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001C65",
        accent: "#0070E0",

        neutral: "#FFFFFF",
        contrast: "#000000",
        secondary: "#00000040",
      },
    },
  },
  plugins: [],
};
