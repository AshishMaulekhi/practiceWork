/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation:{
        backgroundPositionSpin:"background-postion-spin 3000ms infinite alternate",
      },

      keyframes:{
        "background-positon-spin":{
            "0%":{backgroundPosition: "top center"},
            "100%":{backgroundPosition:"bottom center"}
        },
      },


      screens:{
        'xs':'476px',
        'sm':'640px',
        'md':'768px',
        'bs':'900px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
        '2xl-mx':{'max':'1535px'},
        'xl-mx':{'max':'1279px'},
        'lg-mx':{'max':'1023px'},
        'bs-mx':{'max':'899px'},
        'md-mx':{'max':'767px'},
        'sm-mx':{'max':'639px'},
        'xs-mx':{'max':'475px'}

      },
      colors : { 
        'navyS': {
            '50': '#E3E8F0',
            '100': '#C6D1E1',
            '200': '#A9BAD2',
            '300': '#8DA3C3',
            '400': '#708CB4',
            '500': '#5475A5',
            '600': '#375E96',
            '700': '#1B4787',
            '800': '#0A192F',
            
        },
        'mintS': {
            '50': '#E0FFF8',
            '100': '#C2FFEF',
            '200': '#A4FFE7',
            '300': '#87FFDE',
            '400': '#69FFD6',
            '500': '#4CFFCD',
            '600': '#2EFFC5',
            '700': '#11FFBC',
            '800': '#00E6A8',
            '900': '#00CC96',
            '950': '#009F77',
        },
        'mineshaft': {
        '50': '#E8EBF5',
        '100': '#D1D6EB',
        '200': '#B8C0E1',
        '300': '#A0AACD',
        '400': '#8892B0',
        '500': '#727C9A',
        '600': '#5C6684',
        '700': '#474F6E',
        '800': '#333959',
        '900': '#1F2343',
        '950': '#0F122A',
    },
    'light': {
      '50': '#F2F5FE',
      '100': '#E6ECFD',
      '200': '#D9E2FB',
      '300': '#CCD6F7',
      '400': '#B8C2EE',
      '500': '#A3AEE4',
      '600': '#8F9ADA',
      '700': '#7B86CF',
      '800': '#6772C5',
      '900': '#535EBB',
      '950': '#3E4AA6',
  }
    }
    },
  },
  plugins: [],
}

