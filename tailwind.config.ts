import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

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
        'xbase': '15px',
        'lg-sm': '17px',
        'xxxl': '32px',
      },
      colors: {
        'dark-gray-900': '#1C1D20',
        'dark-gray-800': '#17181A',
        'black-900': '#111111',
        'black-800': '#131313',
        'black-700': '#171717',
        'gray-700': '#323438',
        'gray-700-translucent': '#323438CC',
        'gray-blue-400': '#809FB8',
        'gray-blue-300': '#99B2C6',
        'blue-500': '#2AB6F2',
        'blue-400': '#12AFF0',
        'blue-400-translucent': '#12AFF033',
        'blue-500-translucent': '#2AB6F233',
        'gray-50': '#F1F4F9',
        'light-gray-100': '#D9E1E7',
        'light-gray-100-translucent': '#D9E1E7CC'
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
