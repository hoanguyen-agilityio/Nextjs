import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import { colors, fontSize } from "@/themes";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      size: {
        ...fontSize
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [nextui()],
};
export default config;
