import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#357aff",
        "secondary-color": "#3af9efe3",
        "service-1-color": "#3af9efe3",
        "service-2-color": "#72c8ec",
        "service-4-color": "#1e6aa9",
        "service-5-color": "#727473",
        "border-color": "#c4c4c4",
        "text-color": "#3a3a3a",
        "white-color": "#fff",
        "black-color": "#10110d",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
