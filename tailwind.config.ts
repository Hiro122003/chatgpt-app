import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient':
          'linear-gradient(90deg, #1D262E 0%, #063761 50%, #1D262E 100%)',
      },
      backgroundColor: {},
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#090E34',
        dark: '#1D2144',
        primary: '#4A6CF7',
        yellow: '#FBB040',
        'body-color': '#959CB1',
        'custom-blue': '#222f55',
      },
      screens: {
        xs: '450px',
        sm: '575px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      extend: {
        boxShadow: {
          signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
          one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
          sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
