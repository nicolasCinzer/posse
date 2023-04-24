/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        prs: ['exercise exercise', 'times lift'],
        home: ['prs mc', 'prs stats'],
      },
      gridTemplateColumns: {
        home: '1fr 4fr',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
