/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#E31B23', // Seoul Fire Red
                    hover: '#C1161D',
                },
                secondary: {
                    DEFAULT: '#0F172A', // Slate 900
                    light: '#1E293B', // Slate 800
                },
                accent: {
                    DEFAULT: '#F8FAFC', // Slate 50
                },
                surface: {
                    DEFAULT: '#020617', // overall dark background (near slate-950)
                    soft: '#020617', // alias for consistency
                },
                card: {
                    DEFAULT: '#020617', // used for dark cards when needed
                },
            },
            backgroundImage: {
                'hero-radial':
                    'radial-gradient(circle at top left, rgba(227,27,35,0.24), transparent 55%), radial-gradient(circle at bottom right, rgba(15,23,42,0.9), #020617)',
            },
            fontFamily: {
                sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
