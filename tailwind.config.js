const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        formBlue: "#BBCDF7",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        topToBottom: {
          "50%": { transform: "translateY(-8px)" },
        },
        bottomToTop: {
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        topToBottom: "topToBottom 2.5s ease-in-out infinite",
        bottomToTop: "bottomToTop 2.5s ease-in-out infinite",
      },
      dropShadow: {
        blob: "4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        nav: "0 4px 14px rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [
    function (api) {
      const { addUtilities } = api;

      const newUtilities = {
        ".main-btn": {
          background:
            "linear-gradient(148deg, rgba(125, 176, 247, 1) 0%, rgba(19, 56, 212, 1) 100%)",
          color: "white",
          padding: "8px 24px",
          borderRadius: "9999px",
        },
        ".main-btn-light": {
          background: "#E0E6EE",
          color: "black",
          padding: "8px 24px",
          borderRadius: "9999px",
        },
        ".gradient-text": {
          background:
            "linear-gradient(148deg, rgba(125, 176, 247, 1) 0%, rgba(19, 56, 212, 1) 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".gradient": {
          background:
            "linear-gradient(148deg, rgba(125, 176, 247, 1) 0%, rgba(19, 56, 212, 1) 100%)",
        },
        ".main-input": {
          display: "flex",
          height: "2.5rem",
          width: "100%",

          backgroundColor: "var(--background)",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontSize: "0.875rem",
          borderRadius: "9999px",
          outline: "none",
          boxShadow: "none",
          marginTop: "0.5rem",
          opacity: "1",
          cursor: "pointer",
        },
        ".main-input::placeholder": {
          color: "var(--muted-foreground)",
        },
        ":disabled": {
          cursor: "not-allowed",
          opacity: "0.5",
        },

        ".main-input:focus-visible": {
          outline: "none",
          boxShadow: "none",
        },
      };

      // Register the custom utilities without variants
      addUtilities(newUtilities);
    },
  ],
};

export default config;
