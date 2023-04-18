/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs-max': { 'max': '575px' },
      '2xls': '414px',
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1025px',
      xl: '1281px',
      xxl: '1367px',
      '3xl': '1441px',
    },
    extend: {
      colors: {
        gray: '#A9A9A9',
        grayLight: '#8B8B8B',
        bgGray: "#F1F3F7",
        white: '#fff',
        primary: '#57A2D1',
        borderColor: '#D9D9D9',
        listColor: '#3F3F3F',
        danger: '#F04545',
        blueLight: '#90B5CC',
        togglebg: "#C0C0C0",
        success: "#009B47",
      },
      backgroundImage: {
        bgImg: "url('/src/assets/Images/cloud_img.jpg')",
      },
      fontFamily: {
        RobotoBlack: ['Roboto-Black'],
        RobotoBold: ['Roboto-Bold'],
        RobotoLight: ['Roboto-Light'],
        RobotoMedium: ['Roboto-Medium'],
        RobotoRegular: ['Roboto-Regular'],
      },
      fontSize: {
        xSmall: '14px',
        small: '16px',
        regular: '18px',
        heading3: '20px',
        heading2: '24px',
        heading1: '28px',
        blogHeading3: '32px',
        blogHeading2: '36px',
        blogHeading1: '56px',
      },
      borderRadius: {
        '8': '8px',
        '15': '15px',
      }
    },
    boxShadow: {
      dropdown: '0px 10px 30px rgba(0, 0, 0, 0.1);'
    }
  },
  plugins: [],
}

