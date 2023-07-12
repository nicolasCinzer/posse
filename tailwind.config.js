/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dom-color': 'var(--dom-color)',
        'acc-color': 'var(--acc-color)',
        'comp-color': 'var(--comp-color)'
      },
      gridTemplateAreas: {
        prs: ['exercise exercise', 'times lift'],
        home: ['prs mc', 'prs stats']
      },
      gridTemplateColumns: {
        home: '1fr 4fr'
      }
    }
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')]
}
