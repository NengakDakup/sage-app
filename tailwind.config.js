/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "md": "900px",
      },
      width: {
        'custom-743': '743px',
      },

      height: {
        'custom-976': '976px',
      }, 

      padding: {
        '24px': '24px',
        '64px': '64px',
      },
      
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, hsl(var(--gradient-primary-from)) 0%, hsl(var(--gradient-primary-to)) 100%)',
      },
      boxShadow: {
        'light': '-3px 4px 0px 0px hsla(0, 0%, 100%, 1)',
        'dark': '-3px 4px 0px 0px hsla(258, 100%, 52%, 1)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsla(var(--background))",
        'background-lighter': "hsla(var(--background-lighter))",
        foreground: "hsl(var(--foreground))",
        blue: {
          DEFAULT: "hsl(var(--blue))",
          darkest: "hsl(var(--blue-darkest))",
        },
        "purple-light": "hsl(var(--purple-light))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        customCardsLeft: "hsl(var(--custom-card-left))",

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    function ({ addUtilities }) {
      addUtilities({
        '.border-blur-gradient': {
          position: 'relative',
          zIndex: '1',
        },
        '.border-blur-gradient::before': {
          content: '""',
          position: 'absolute',
          top: '-1px',
          right: '-1px',
          bottom: '-1px',
          left: '-1px',
          zIndex: '-1',
          background: 'linear-gradient(to bottom, #A109FF, #4912FF)', // Gradient background
          borderRadius: 'inherit', // Ensure the border radius matches the parent
          filter: 'blur(10px)', // Adjust blur intensity as needed
        },
      });
    },

  ],
}