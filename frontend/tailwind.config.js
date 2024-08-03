/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        inter: 'Inter, sans serif',
        space_mono: "Space mono, monospace",
        jmono: "Jetbrains mono, monospace"
      },
      colors: {
        primary: '#f7f0e1',  
        secondary: '#ff4e45'
      }
    },
  },
  plugins: [],
}

