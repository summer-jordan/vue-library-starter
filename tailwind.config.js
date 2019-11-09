module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#00141E',
      'grey-darkest': '#263238',
      'grey': '#455a64',
      'grey-dark': '#1c313a',
      'grey-light': '#718792',
      'grey-lightest': '#eceff1',
      'white': '#ffffff',
      'input-b': '#DCE2E8',
      'blue-grey': '#686E7D',
      'blue-grey-light': '#F6F9FC',
      'blue': '#004263',
      'blue-light': '#0D5980',
      'blue-lighter': '#3689B3',
      'blue-lightest': '#73BFE6',
      'blue-white': '#F5FCFF',
      'brand': '#1BA8E1',
      'brand-light': '#51B8E0',
      'brand-lighter': '#90D5F0',
      'brand-lightest': '#C8ECFA',
      'brand-white': '#F2FAFC',
      'red-lightest' : '#FEECEB',
      'red-lighter' : '#FBB4AF',
      'red-light' : '#F77B72',
      'red' : '#F44336',
      'red-dark' : '#DC3C31',
      'red-darker' : '#922820',
      'red-darkest' : '#491410',
      'orange-lightest' : '#FFF1E6',
      'orange-lighter' : '#FFC599',
      'orange-light' : '#FF9A4D',
      'orange' : '#FF6F00',
      'orange-dark' : '#E66400',
      'orange-darker' : '#994300',
      'yellow-light': '#fff382',
      'yellow-lighter': '#fff9c2',
      'yellow-lightest': '#fcfbeb',
      'green-lightest' : '#E3FCEC',
      'green-lighter' : '#A2F5BF',
      'green-light' : '#51D88A',
      'green' : '#38C172',
      'green-dark' : '#1F9D55',
      'green-darker' : '#1A4731',
      'teal': '#4dc0b5',
      'indigo': '#6574cd',
      'purple': '#9561e2',
      'pink': '#f66d9b',
    },
    textColor: theme => theme('colors'),
    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors'),
    }),
    container: {
      // center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      'xxl': '1720px',
    },
    fontFamily: {
      'sans': [
        'open-sans',
        'helvetica-neue',
        'sans-serif',
      ],
      'serif': [
        'Literata',
        'Georgia',
        'serif',
      ],

      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ]
    },
    fontSize: {
      'xxs': '.5rem',     // 12px
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.125rem',  // 34px
      '5xl': '2.25rem',   // 36px
      '6xl': '2.5rem',    // 40px
      '7xl': '2.75rem',   // 44px
      '8xl': '3rem',      // 48px
      '12xl': '4rem',      // 64px
      '14xl': '4.5rem',      // 72px
    },
    lineHeight: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },
    letterSpacing: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.05em',
    },
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '36': '10rem',
      '48': '12rem',
      '54': '14rem',
      '64': '16rem',
      '74': '22.5rem',
      '84': '23.5rem',
      '360': '28.5rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw'
    },
    height: {
      'none': '0',
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '18': '5rem',
      '24': '6rem',
      '32': '8rem',
      '36': '10rem',
      '48': '12rem',
      '64': '16rem',
      'map': '25rem',
      'full': '100%',
      'screen': '100vh'
    },
    minWidth: {
      '0': '0',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '500': '31.25rem',
      'full': '100%',
      'screen': '100vh'
    },
    maxWidth: {
      'xs': '20rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
      'drawer': '25rem',
    },
    maxHeight: {
      'full': '100%',
      'screen': '100vh',
    },
    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '8rem',
      '34': '9rem',
      '36': '10rem',
    },
    margin: {
      'auto': 'auto',
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '84': '5.25rem',
      '-px': '-1px',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.15rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-84': '-5.25rem',
    },
    boxShadow: {
      default: '0 2px 4px 0 rgba(28,49,58,0.20)',
      'md': '0 4px 8px 0 rgba(28,49,58,0.12), 0 2px 4px 0 rgba(28,49,58,0.08)',
      'lg': '0 15px 30px 0 rgba(28,49,58,0.12), 0 5px 15px 0 rgba(28,49,58,0.08)',
      'lg-dark': '0 15px 30px 0 rgba(28,49,58,0.42), 0 5px 15px 0 rgba(28,49,58,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(28,49,58,0.06)',
      'none': 'none',
      drawer: '-8px 0 8px 0 rgba(28,49,58,.02), 0 0 24px 0 rgba(28,49,58,.08)'
    },
    zIndex: {
      'auto': 'auto',
      '1': 1,
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '55': 55,
      '60': 60,
      '70': 70,
      '75': 75,
      '80': 80,
      'tipTop': 2147483001,
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '40': '.4',
      '50': '.5',
      '75': '.75',
      '100': '1',
    },
    fill: {
      'current': 'currentColor',
      'none': 'none',
    },
    stroke: {
      'current': 'currentColor',
    },
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColor: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeight: ['responsive', 'hover'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive', 'hover'],
    opacity: ['responsive', 'hover'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover'],
    fill: [],
    stroke: ['hover'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover'],
    textSizes: ['responsive'],
    fontStyle: ['responsive', 'hover'],
    fontSmoothing: ['responsive', 'hover'],
    textDecoration: ['responsive', 'hover'],
    textTransform: ['responsive', 'hover'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: [],
};