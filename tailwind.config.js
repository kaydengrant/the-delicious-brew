/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#151515',
        gray: '#D9D9D9',
        blue: '#C9E1E8',
        green: '#CCD5AE',
        brown: '#D5CBAE',
        successGreen: '#4BB543',
        errorRed: '#FF3333',
      },
      screens: {
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
