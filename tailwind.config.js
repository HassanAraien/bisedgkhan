/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url(./images/logo.jpg)",
        crslimg: "url(./images/heroimg1.jpg)",
        crslimg2: "url(./images/heroimg2.jpg)",
        crslimg3: "url(./images/heroimg3.jpg)",
        crslimg4: "url(./images/heroimg4.jpg)",
        crslimg5: "url(./images/heroimg5.jpg)",
      },
      colors: {
        primary: "#2b6777",
        text: "#c8d8e4",
        secondary: "#fff",
        mainbgc: "#f2f2f2",
        bgc: "#52ab98",
      },
      screens: {
        sm: "320px",
        md: "481px",
        lg: "769px",
      },
    },
  },
};
