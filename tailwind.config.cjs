/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    safelist: [
        'animate-prompt-up',
        'animate-prompt-down',
        'animate-modal-inner-up',
        'animate-modal-inner-down',
        'animate-modal-up',
        'animate-modal-down',
    ],
    theme: {
        extend: {
            boxShadow: {
                '2xl-up': '0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 -2px 10px -6px rgba(0, 0, 0, 0.1)'
            },
            fontFamily: {
                'cc-sans-serif': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']
            },
            keyframes: {
                'prompt-up': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0%)' },
                },
                'prompt-down': {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                'modal-inner-up': {
                    '0%': { transform: 'translateY(2.5%)', opacity: 0 },
                    '100%': { transform: 'translateY(0%)', opacity: 1 },
                },
                'modal-inner-down': {
                    '0%': { transform: 'translateY(0%)', opacity: 1 },
                    '100%': { transform: 'translateY(2.5%)', opacity: 0 },
                },
                'modal-up': {
                    '0%': { backgroundColor: 'rgb(51, 65, 85, 0)' },
                    '100%': { backgroundColor: 'rgb(51, 65, 85, .7)' },
                },
                'modal-down': {
                    '0%': { backgroundColor: 'rgb(51, 65, 85, .7)' },
                    '100%': { backgroundColor: 'rgb(51, 65, 85, 0)' },
                }
            },
            animation: {
                'prompt-up': 'prompt-up .5s ease forwards',
                'prompt-down': 'prompt-down .5s ease forwards',
                'modal-inner-up': 'modal-inner-up .5s ease forwards',
                'modal-inner-down': 'modal-inner-down .5s ease forwards',
                'modal-up': 'modal-up .5s ease forwards',
                'modal-down': 'modal-down .5s ease forwards',
            }
        },
    },
    plugins: [],
}
