import { preview } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "media",
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        autoScroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        auto_scroll: 'autoScroll 20s linear infinite', // Puedes ajustar la duración y comportamiento
      },
    },
  plugins: [],
}
}

