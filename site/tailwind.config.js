/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                canvas: '#121212',
                surface: '#1c1c1e',
                border: '#333333',
                primary: {
                    DEFAULT: '#22c55e',
                    strong: '#16a34a',
                },
                text: {
                    DEFAULT: '#e5e5e5',
                    muted: '#a1a1aa',
                },
                alert: '#ef4444',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                heavy: '0 20px 50px rgba(0,0,0,0.5)',
            },
            borderRadius: {
                sm: '2px',
                DEFAULT: '2px',
                md: '2px',
                lg: '2px',
            },
        },
    },
    plugins: [],
}
