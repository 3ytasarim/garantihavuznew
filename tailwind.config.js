module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#0077b6", // Brand confidence and trust anchor
        "primary-dark": "#005577", // Depth and premium positioning
        accent: "#00a8cc", // Interactive moments and progress indicators
        
        // Background Colors
        background: "#fafafa", // Clean canvas for project photography
        surface: "#ffffff", // Content cards and form backgrounds
        
        // Text Colors
        "text-primary": "#1a1a1a", // Extended reading comfort
        "text-secondary": "#666666", // Clear information hierarchy
        
        // Status Colors
        success: "#28a745", // Project completion and form validation
        warning: "#ffc107", // Seasonal maintenance and timeline alerts
        error: "#dc3545", // Helpful form guidance
        
        // Border Colors
        "border-light": "#e5e5e5", // Clean borders for forms and content separation
        "border-active": "#0077b6", // Active state borders
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Headlines and CTAs
        lato: ['Lato', 'sans-serif'], // Body text
        sans: ['Lato', 'sans-serif'], // Default sans-serif
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      boxShadow: {
        'primary': '0 4px 12px rgba(0, 119, 182, 0.15)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.16)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.aspect-golden': {
          'aspect-ratio': '1.618 / 1',
        },
        '.aspect-photo': {
          'aspect-ratio': '4 / 3',
        },
        '.aspect-landscape': {
          'aspect-ratio': '16 / 9',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}