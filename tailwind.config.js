module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sp: { max: "768px" },
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
