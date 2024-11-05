/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      black: "var(--black)",
      midBlack: "var(--mid_black)",
      strongGray: "var(--strong_gray)",
      softGray: "var(--soft_gray)",
      white: "var(--white)",
      purple: "var(--purple)",
    },
  },
}
