module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing:{
        navH : '5rem',
        globalMX : '1rem'
      },
      boxShadow: {
        'even': '0px 0px 12px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        NatoSansKR: ['"Noto Sans KR"', 'sans-serif']
      },
    }
  },
  plugins: [require("tailwind-scrollbar-hide")],

}