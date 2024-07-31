/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        colors: {
          secondary: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#AEB4BE',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          primary: {
            100: '#CBF9FE',
            200: '#98EDFE',
            300: '#65DAFC',
            400: '#3EC3FA',
            500: '#00A0F7',
            600: '#007CD4',
            700: '#005CB1',
            800: '#00418F',
            900: '#002F76',
          },
        },
      },
      colors: {
        secondary: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#AEB4BE',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        primary: {
          100: '#CBF9FE',
          200: '#98EDFE',
          300: '#65DAFC',
          400: '#3EC3FA',
          500: '#00A0F7',
          600: '#007CD4',
          700: '#005CB1',
          800: '#00418F',
          900: '#002F76',
        },
        error: {
          primary: '#FF542F',
        },
      },
      fontSize: {
        large: '18px',
        medium: '16px',
        small: '14px',
        xsmall: '12px',
      },
      fontFamily: {
        sans: ['MangoDdobak', 'sans-serif'],
      },
      boxShadow: {
        small: '0px 2px 20px -10px rgba(16, 24, 40, 0.08)',
        medium: '0px 6px 15px -2px rgba(16, 24, 40, 0.5)',
        large: '0px 8px 40px -3px rgba(16, 24, 40, 0.10)',
      },
      aspectRatio: {
        icecream: '7 / 10',
      },
      utilities: {
        '.webkit-overflow-scrolling-touch': {
          '-webkit-overflow-scrolling': 'touch',
        },
      },
      keyframes: {
        'bounce-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        'bounce-up-down': 'bounce-up-down 0.3s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
