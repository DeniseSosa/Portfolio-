/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        salirArriba: {
          '0%': {
            transform: 'translateY(0)',
            backgroundColor: 'rgba(191, 38, 211, 0.3)',
          },
          '100%': {
            transform: 'translateY(200%)',
          },
        },
      },
      animation: {
        salirArriba: 'salirArriba 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

