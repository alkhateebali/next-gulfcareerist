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
        colors: {
          default :{
            DEFAULT:'#D0E7EA',
            foreground: '#ffffff'
          },
          primary: {
            500:"#00AFDB",
            600:"#484769",
            700: "#5DFBD7",
            800: "#00BCDC",
            900: "#0077C4",
            DEFAULT: '#333399',
            foreground: '#FBF7FF'
          },
          secondary: {
          DEFAULT: '#525252',
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
        colors: {
          default :{
            DEFAULT:'#797585',
            foreground: '#ffffff'
          },
          primary: {
            DEFAULT: '#00AFDB',
            foreground: '#151519'
          },
          secondary: {
            DEFAULT: '#525252',
            foreground: '#FBF7FF'
          }
      } 
      },

    }
  })]
}

export default config;
