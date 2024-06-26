/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
      },
    },
  }, 
  plugins: [],
};
