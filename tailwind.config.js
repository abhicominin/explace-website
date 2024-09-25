const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        cloudSlow: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(300%)' },
        },
        cloudFast: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(300%)' },
        },
        cloudMedium: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(300%)' },
        },
        cloudReverseSlow: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(-20%)' },
        },
      },
      animation: {
        cloudSlow: 'cloudSlow 180s linear infinite',
        cloudMedium: 'cloudMedium 140s linear infinite',
        cloudFast: 'cloudFast 100s linear infinite',
        cloudReverseSlow: 'cloudReverseSlow 200s linear infinite',
      },
    },
  },
  plugins: [],
};
