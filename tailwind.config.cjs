/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blob: "url('/public/blob.svg')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
