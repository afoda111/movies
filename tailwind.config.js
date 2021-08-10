module.exports = {
  mode: 'jit',
  purge: {
    enabled:true,
   content:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "3xl" : "2000px"
      }
    },
    fontSize:{
      'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  variants: {
    extend: {
      scale : ['active', 'group-hover']
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
