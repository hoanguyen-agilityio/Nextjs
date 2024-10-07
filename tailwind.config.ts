import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import { colors } from "@/themes";

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
        'sm': '14px',
        'xsm': '15px',
        'base': '16px',
        'lg': '17px',
        'xl': '18px',
        '2xl': '20px',
        '3xl': '32px',
        '4xl': '36px',
      },
      colors: {
        ...colors,
      },
      width: {
        'm': '351px',
        'xl': '360px',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
