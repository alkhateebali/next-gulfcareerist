import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [ nextui({
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {secondary: {
          DEFAULT: '#6c757d',
          foreground: '#ffffff'
        },
        warning:{
         
          DEFAULT: '#fa9f00',
          foreground: '#ffffff'
        }
      } 
      },
      dark: {
        layout: {}, 
        colors: {} 
      },

    }
  })]
}

export default config;
