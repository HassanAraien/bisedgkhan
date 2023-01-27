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
        controllerPic: "url(./images/controller.jpg)",
      },
      colors: {
        primary: "#35A95E",
        secondary: "#B7B78A",
        text: "#D1EFCC",
        bgc: "#DDDDDD",
      },
      screens: {
        sm: "320px",
        md: "481px",
        lg: "769px",
      },
    },
  },
};
