/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                'fade-in': 'fade-in 5s ease-out'
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            }
        },
    },
    plugins: [],
}