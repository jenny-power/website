/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
        fontFamily: {
            sans: ["Inter", "ui-sans-serif", "system-ui"],  // body font
            heading: ["Fredoka", "sans-serif"],            // headings
        },
        colors: {
        neonPink: "var(--neon-pink)",
        sunsetOrange: "var(--sunset-orange)",
        sunshineYellow: "var(--sunshine-yellow)",
        mint: "var(--mint)",
        skyBlue: "var(--sky-blue)",
        deepPurple: "var(--deep-purple)",
      },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
      {
        "jenny-light": {
          primary: "#ea76cb",   // your pink
          secondary: "#ec7539ff",
          accent: "#b179f5ff",
          neutral: "#252b30",
          "base-100": "#f6f1f5ff",
          "base-200": "#ffffff",
          "base-300": "#f5bde6",
          info: "#7dc4e4",
          success: "#33ae18ff",
          warning: "#df8e1d",
          error: "#ed8796",
        }
      },
      {
        "jenny-dark": {
          primary: "#f5bde6",      // Macchiato pink
          secondary: "#ef9f76",    // Macchiato flamingo
          accent: "#c6a0f6",       // Macchiato mauve
          neutral: "#1e2030",      // Macchiato neutral surface
          "base-100": "#24273a",   // Macchiato base
          "base-200": "#494d64",   // slightly lighter background
          "base-300": "#2a2c3d",   // even lighter background
          info: "#91d7e3",         // Macchiato sky
          success: "#a6da95",      // Macchiato green
          warning: "#eed49f",      // Macchiato yellow
          error: "#ed8796",        // Macchiato red
        }
      },
        ],
    },
    // darkMode: ['selector', '[data-theme="synthwave"]']
};


