const tailwindCSS = require('tailwindcss');
const postCSSImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        postCSSImport(),
        tailwindCSS('./tailwind.config.cjs'),
        autoprefixer()
    ]
};