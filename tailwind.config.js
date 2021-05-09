module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true
  },
  purge: {
    content: [
      `./pages/**/*.{js,ts,jsx,tsx}`,
      `./components/**/*.{js,ts,jsx,tsx}`,
      `./layouts/**/*.{js,ts,jsx,tsx}`,
    ]
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
