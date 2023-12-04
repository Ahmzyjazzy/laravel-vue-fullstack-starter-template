const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const path = require('path')

require('dotenv').config();
require('laravel-mix-tailwind');

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js'),
                '@assets': path.resolve(__dirname, 'resources/assets'),
                '@sass': path.resolve(__dirname, 'resources/sass')
            }
        }
    })
    .vue();
//using sass
mix.setResourceRoot('/')
    .sass('resources/css/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })