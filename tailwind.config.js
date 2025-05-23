/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./index.html", "./pages/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        // primary 100 - 900
        "primary-100": "color-mix(in srgb, var(--color-primary), white 40%)",
        "primary-200": "color-mix(in srgb, var(--color-primary), white 20%)",
        "primary-300": "color-mix(in srgb, var(--color-primary), white 10%)",
        "primary-400": "var(--color-primary)",
        primary: "var(--color-primary)",
        "primary-500": "color-mix(in srgb, var(--color-primary), black 10%)",
        "primary-600": "color-mix(in srgb, var(--color-primary), black 20%)",
        "primary-700": "color-mix(in srgb, var(--color-primary), black 40%)",
        "primary-800": "color-mix(in srgb, var(--color-primary), black 70%)",
      },
    },
  },
  plugins: [],
};
