/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Incluye index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Detecta todos los archivos en src
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
