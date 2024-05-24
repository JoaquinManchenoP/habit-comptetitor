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
        "heatmap-scale-0": "#ffe601",
        "heatmap-scale-1": "#ffc800",
        "heatmap-scale-2": "#ffaa00",
        "heatmap-scale-3": "#ff9a00",
        "heatmap-scale-4": "#ff7a00",
      },
      screens: {
        // Add custom breakpoints here
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices (landscape phones, 640px and up)
        md: "950px", // Medium devices (tablets, 768px and up)
        lg: "1150px", // Large devices (desktops, 1024px and up)
        xl: "1280px", // Extra large devices (large desktops, 1280px and up)
        "2xl": "1536px", // 2 Extra large devices (larger desktops, 1536px and up)
        "3xl": "1920px", // 3 Extra large devices (even larger desktops, 1920px and up)
        // You can add more custom breakpoints if needed
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
