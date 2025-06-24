module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require("tailwind-scrollbar-hide")],
  extend:{
    boxShadow: {
      'even' : '0px 0px 12px rgba(0, 0, 0, 0.2)',
    }
  }
}