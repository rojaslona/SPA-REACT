/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arena-suave': '#F5EDE4',
        'sal-marina': '#D7ECEB',
        'turquesa-pastel': '#6EBFC3',
        'lila-rosa': '#EBD2EC',
        'rosa-petalo': '#F9D6E2',
        'gris-humo': '#4A4A4A',
      },
      fontFamily: {
        'cormorant': ['CormorantGaramond', 'serif'],
        'lora': ['Lora', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      borderRadius: {
        'custom': '12px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
