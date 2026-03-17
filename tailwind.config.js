/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // main App file
    "./app/**/*.{js,jsx,ts,tsx}", // all files in app folder (replace 'app' if your folder is different)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
