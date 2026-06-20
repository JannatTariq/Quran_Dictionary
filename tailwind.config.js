/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:['var(--inter)', 'sans-serif'],
        playfairDisplay:['var(--playfair-display)', 'sans-serif'],
        hafs: ['var(--hafs)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:{
          DEFAULT:'#FFA552',
          overlay:'#FFA55250',
          100:'#FFDFC2',
          200:'#FFCA99',
          300:'#FFC085',
          400:'#FFAB5C',
          500:'#FF9633',
          600:'#E06C00',
          700:'#B85900',
          800:'#663100',
          900:'#3D1E00'
        },
        // secondary:{
        //   DEFAULT:'#571F4E',
        //   100:'#FAF0F8',
        //   200:'#E9C3E3',
        //   300:'#DFA5D5',
        //   400:'#CE78C0',
        //   500:'#C45AB2',
        //   600:'#A53B93',
        //   700:'#782B6B',
        //   800:'#571F4E',
        //   900:'#2D1028'
        // },
        secondary:{
          DEFAULT:'#4056f4',
          100:'#ECEEFE',
          200:'#C5CCFC',
          300:'#9fa9f9',
          400:'#6576f6',
          500:'#4056f4',
          600:'#1831f2',
          700:'#0c24d4',
          800:'#0a1dae',
          900:'#081787'
        },
        transparent:'#0000',
        overlay:{
          DEFAULT:'#0007',
          dark:'#0009'
        },
        gray:{
          DEFAULT:'#272727',
          light:'#676767'
        }
      }
    },
  },
  plugins: [],
}
