/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
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
        secondary: {
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
        sans: ['PUREUNJEONNAM', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
