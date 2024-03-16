/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-1": "#FBFBF9",
        "light-2": "#F7F7F2",
        "dark-1": "#1F2013",
        "stroke-1": "#B9B98D",
        
      },
    },
  },
  plugins: [],
};
