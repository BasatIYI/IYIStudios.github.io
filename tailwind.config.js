/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        iyiblack: "#0a0a0a",
        iyigray: "#1a1a1a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "wave-glow": {
          "0%, 100%": { boxShadow: "0 0 5px #3b82f666" },
          "50%": { boxShadow: "0 0 20px 5px #3b82f6b3" },
        },
        "wave-glow-green": {
          "0%, 100%": { boxShadow: "0 0 5px #16a34a66" },
          "50%": { boxShadow: "0 0 20px 5px #16a34ab3" },
        },
        "wave-glow-purple": {
          "0%, 100%": { boxShadow: "0 0 5px #9333ea66" },
          "50%": { boxShadow: "0 0 20px 5px #9333eab3" },
        },
      },
      animation: {
        "wave-glow": "wave-glow 2s infinite ease-in-out",
        "wave-glow-green": "wave-glow-green 2s infinite ease-in-out",
        "wave-glow-purple": "wave-glow-purple 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
