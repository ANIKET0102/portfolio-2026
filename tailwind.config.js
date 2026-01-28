// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'drift-slow': 'drift 10s ease-in-out infinite',
        'drift-fast': 'drift 7s ease-in-out infinite alternate',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -50px) rotate(2deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(-2deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        }
      }
    },
  },
}