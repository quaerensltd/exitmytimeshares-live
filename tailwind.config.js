/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./docs/**/*.html",     // <-- add this
      "./src/**/*.{html,js,jsx,ts,tsx}"
    ],
    theme: { extend: {} },
    plugins: [],
  };
  