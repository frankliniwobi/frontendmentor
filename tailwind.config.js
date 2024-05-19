/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./public/**/*.js",
      ],
  theme: {
    extend: {
        colors: {
            "light-grey" : "#d5e1ef",
            "grey" : "#7D889E",
            "dark" : "#1F314F",
        }
    },
  },
  plugins: [],
}
