/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#FBF7F0',
        sand: {
          DEFAULT: '#EFE5D3',
          deep: '#E2D3BA',
        },
        clay: {
          light: '#DBA07F',
          DEFAULT: '#BE6A45',
          deep: '#9C5236',
        },
        seaglass: {
          light: '#C4DBD1',
          DEFAULT: '#8AB5A5',
          deep: '#5E8C7D',
        },
        gold: {
          light: '#F3CE96',
          DEFAULT: '#E3A857',
        },
        ink: {
          soft: '#5C5044',
          DEFAULT: '#33291F',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Karla', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slow-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'gentle-float': 'gentle-float 7s ease-in-out infinite',
        'slow-spin': 'slow-spin 90s linear infinite',
      },
    },
  },
  plugins: [],
}
