/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-off-white": "var(--color-off-white)",
        "color-off-black": "var(--color-off-black)",
        "color-yellow": "var(--color-yellow)",
        "color-red": "var(--color-red)",
        "color-teal": "var(--color-teal)",
        "color-dark-off-white": "var(--color-dark-off-white)",
        "color-dark-off-black": "var(--color-dark-off-black)",
        "color-dark-yellow": "var(--color-dark-yellow)",
        "color-dark-red": "var(--color-dark-red)",
        "color-dark-teal": "var(--color-dark-teal)"
      }
    },
  },
  plugins: [],
}

