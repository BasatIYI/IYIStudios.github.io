// FILE: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                iyiblack: '#0a0a0a',
                iyigray: '#1a1a1a',
                iyiaccent: '#3b82f6', // Example accent
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'glow-blue': '0 0 15px -3px rgba(59, 130, 246, 0.5), 0 0 6px -2px rgba(59, 130, 246, 0.3)',
                'glow-blue-lg': '0 0 25px -5px rgba(59, 130, 246, 0.6), 0 0 10px -3px rgba(59, 130, 246, 0.4)',
            },
            keyframes: {
                'wave-glow': {
                    '0%, 100%': { boxShadow: '0 0 5px 0px rgba(59, 130, 246, 0.4)' },
                    '50%': { boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.7)' },
                },
                'wave-glow-green': {
                    '0%, 100%': { boxShadow: '0 0 5px 0px rgba(22, 163, 74, 0.4)' },
                    '50%': { boxShadow: '0 0 20px 5px rgba(22, 163, 74, 0.7)' },
                },
                'wave-glow-purple': {
                    '0%, 100%': { boxShadow: '0 0 5px 0px rgba(147, 51, 234, 0.4)' },
                    '50%': { boxShadow: '0 0 20px 5px rgba(147, 51, 234, 0.7)' },
                },
            },
            animation: {
                'wave-glow': 'wave-glow 2s infinite ease-in-out',
                'wave-glow-green': 'wave-glow-green 2s infinite ease-in-out',
                'wave-glow-purple': 'wave-glow-purple 2s infinite ease-in-out',
            },
        },
    },
    plugins: [],
}
