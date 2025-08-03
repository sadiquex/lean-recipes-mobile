/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#008000',
      },
      fontFamily: {
        'sora-bold': ['Sora-Bold', 'sans-serif'],
        'sora-extra-bold': ['Sora-ExtraBold', 'sans-serif'],
        'sora-extra-light': ['Sora-ExtraLight', 'sans-serif'],
        'sora-light': ['Sora-Light', 'sans-serif'],
        'sora-medium': ['Sora-Medium', 'sans-serif'],
        'sora-regular': ['Sora-Regular', 'sans-serif'],
        'sora-semi-bold': ['Sora-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
