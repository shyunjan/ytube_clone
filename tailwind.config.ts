import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { createRequire } from 'node:module';
const _require = createRequire(import.meta.url);
const defaultColors = _require('tailwindcss/colors.js');

// 아래는 TailwindCSS version upgrade로 인한 warning message를 제거하기 위한 코드
delete defaultColors.lightBlue;
delete defaultColors.warmGray;
delete defaultColors.trueGray;
delete defaultColors.coolGray;
delete defaultColors.blueGray;

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  darkMode: 'selector', // 이 속성을 사용하지 않으면 Dark mode가 OS theme를 따른다

  theme: {
    colors: {
      ...colors,
      'dark-main-bg': '#0f0f0f',
      'dark-main-text': '#f1f1f1',
      'tag-bg': '#272727',
    },
    extend: {
      height: {
        68: '17rem',
      },
      width: {
        18: '4.5rem',
      },

      borderWidth: {
        1: '1px',
      },
      fontSize: {
        xxs: ['0.62rem', '1rem'],
      },
      transitionProperty: {
        height: 'height',
      },
      colors: {
        'cod-gray': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#0f0f0f',
        },
        'seashell': {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929',
        },
        'shark': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#272727',
        },
      },
      margin: {
        0.3: '0.3rem',
        0.35: '0.35rem',
        0.4: '0.4rem',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
} as Config;
