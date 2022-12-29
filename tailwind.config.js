/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'master': '#ff2a00',
        'navbar': '#212529',
        'links':'#ffffff8c',
        'link_hover':'#ffffffbf'
      },
      maxWidth: {
        '1/2': '50%',
      },
      width: {
        'card': '31%',
      },
      fontFamily: {
        'title': 'Metal Mania',
      },
      backgroundImage: {
        'default': "url('../images/bg_image.jpg')",
      },     

    },
  },
  plugins: [],
}
