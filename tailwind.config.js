/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          0: '#E9E9E9',
          100: '#313131',
          200: '#1E1E1E',
        },
        text: {
          0: '#E6E6E6',
          100: '#8E8E8E',
        },
        primary: {
          0: '#E6E6E6',
        },
        Secondary: {
          0: '#8E8E8E',
        },
      },
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
