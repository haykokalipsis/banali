const mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/css/app.scss', 'public/css');
    // .vue()
    // .js('resources/js/app.js', 'public/js')
