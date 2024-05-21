/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "heatmap-empty": "#ebedf0",
        "heatmap-scale-0": "#d6e685",
        "heatmap-scale-1": "#8cc665",
        "heatmap-scale-2": "#44a340",
        "heatmap-scale-3": "#1e6823",
        "heatmap-scale-4": "#0d4d13",
      },
      spacing: {
        0.2: "1.5px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
