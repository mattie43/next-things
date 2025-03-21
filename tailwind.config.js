/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pastel-blue": "rgb(180, 238, 243)",
        "pastel-purple": "rgb(201, 205, 238)",
        "pastel-lavender": "rgb(230, 194, 236)",
        "pastel-pink": "rgb(252, 190, 211)",
        "pastel-orange": "rgb(255, 207, 194)",
        "pastel-yellow": "rgb(255, 238, 187)",
        "pastel-green": "rgb(203, 233, 202)",
        background: "rgb(25, 25, 25)",
        foreground: "rgb(250, 250, 250)",
      },
    },
  },
  plugins: [],
};
