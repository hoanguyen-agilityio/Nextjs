import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import { colors, fontSize, screen, customSpacing } from './src/themes';

const { light, black } = colors;

const config: Config = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/@nextui-org/theme/dist/components/button.js',
      './node_modules/@nextui-org/theme/dist/components/dropdown.js',
      './node_modules/@nextui-org/theme/dist/components/table.js',
      './node_modules/@nextui-org/theme/dist/components/checkbox.js',
      './node_modules/@nextui-org/theme/dist/components/chip.js',
      './node_modules/@nextui-org/theme/dist/components/input.js',
      './node_modules/@nextui-org/theme/dist/components/toggle.js',
      './node_modules/@nextui-org/theme/dist/components/skeleton.js',
      './node_modules/@nextui-org/theme/dist/components/circular-progress.js',
      './node_modules/@nextui-org/theme/dist/components/image.js',
    ],
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize,
      colors,
      maxWidth: screen,
      width: screen,
      height: screen,
      spacing: {
        ...customSpacing.padding,
        ...customSpacing.margin,
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      light: {
        colors: {
          background: light[100],
          foreground: black[700]
        },
        layout: {},
      },
      dark: {
        colors: {
          background: black[600],
          foreground: light[200]
        }
      }
    }
  })]
};
export default config;
