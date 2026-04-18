/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        surface: '#0F172A',
        surfaceBorder: '#1E293B',
        primary: '#22C55E',
        accent: '#3B82F6',
        textMain: '#F8FAFC',
        textMuted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
