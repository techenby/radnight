const mix = require('laravel-mix');

mix.postCss('resources/css/radnight.css', 'dist/css', [
    require('tailwindcss'),
]).options({
    processCssUrls: false
});
