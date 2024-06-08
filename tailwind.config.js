/** @type {import('tailwindcss').Config} */

// const myClass = plugin(function ({ addUtilities }) {
//   addUtilities({
//     ".my-rotate-y-180": {
//       transform: "rotateY(180deg)",
//     },
//   });
// });

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: '475px',
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#005B82",
        secondary: "#00E5B9",
        accent: "#F13024",
      },

      borderRadius: {
        extraLarge: "12 rem",
      },

      keyframes: {
        blob: {
          "0%": {
            translate: "0 0",
          },
          "30%": {
            rotate: "40deg",
          },
          "50%": {
            transform: "translate(300px, 390px) scale(1.1)",
          },
          "90%": {
            translate: "90%",
          },
        },

        fullSpin: {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },

      backgroundImage: {
        // explosion: 'url("/portada.jpg")',
        // circles: 'url("/bg-circles.png")',
        // circleStar: 'url("/circle-star.svg")',
        'bg-semilla': 'url("/public/PORTADA PARA MI SEMILLA.jpg")',

      },
      animation: {
        blob: "blob 8s infinite cubic-bezier(0.8, 0.2, 0.2, 0.8)",
        "blob-reverse":
          "blob 10s infinite cubic-bezier(0.8, 0.2, 0.2, 0.8) reverse",
        fade: "fadeOut 5s ease-in-out",
        fullSpin: "fullSpin 3s linear infinite",
        slide: "slide 4s ease infinite",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    // ...
  ],
};
