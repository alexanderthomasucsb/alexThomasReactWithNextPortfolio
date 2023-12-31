/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
      },
      boxShadow:{
        'blue': '0 0 10px 4px rgba(59, 130, 246, 0.5)',
        'orange': '0 0 10px 4px rgba(243,102, 8, 0.5)'
      }
    },
  },
  plugins: [],
}
