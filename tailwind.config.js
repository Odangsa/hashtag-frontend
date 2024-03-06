/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  center: true,
  padding: "2rem",
  screens: {
    "2xl": "1400px",
  },
  extend: {
    colors: {
      background: "hsl(var(--background))",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      beige: "#FFF5E1",
      dbeige: "#EEE4D2",
      brown: "#2F2924",
      dbrown: "#655D53",
      accent: "#05ACEE",
      error: "#C13515",
      accentPurple: "#9269C3",
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [];
