/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // COLORS
      colors: {
        //Primary:
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram-first": "hsl(37, 97%, 70%)",
        "instagram-second": "hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",

        //Dark Theme
        "gradient-switch-first": "hsl(210, 78%, 56%)",
        "gradient-switch-second": "hsl(146, 68%, 55%)",

        //Light Theme
        //"toggle": "hsl(230, 22%, 74%)",

        //NEUTRAL

        //Dark Theme
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",

        //Light Theme
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "very-dark-blue": "hsl(230, 17%, 14%)"

      },

      fontFamily: {
        "inter": ["'Inter'", "sans-serif"]
      }
      
    },
  },
  plugins: [],
}

