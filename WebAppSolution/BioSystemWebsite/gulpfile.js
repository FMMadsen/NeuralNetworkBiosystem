'use strict';
/********************************************
 *  DEPENDENCIES
 ********************************************/
const { src, dest, series, parallel, watch } = require('gulp');
// const sass = require('gulp-sass');
// const concat = require('gulp-concat');
// const minifyCss = require('gulp-clean-css');
// const cssSourceMaps = require('gulp-sourcemaps');
// const del = require('del');
const browserSync = require('browser-sync').create();
/********************************************
 *  WEBSERVER
 ********************************************/
function startWebServer(cb) {
    browserSync.init({ server: { baseDir: "./wwwroot", index: "default.htm" } });
    watch("./wwwroot/*.htm").on('change', browserSync.reload);
    watch("./wwwroot/*.html").on('change', browserSync.reload);
    watch("./wwwroot/css/*.css").on('change', browserSync.reload);
    watch("./wwwroot/js/*.js").on('change', browserSync.reload);
    cb();
}
/********************************************
 *  OUTPUT FILE REMOVE TASK
 ********************************************/
// function cleanCss(cb) {
//     return del('www/css', cb);
// }
// function cleanJs(cb) {
//     return del('www/js', cb);
// }
/********************************************
 *  SCSS TRANSPILE AND CSS BUNDLE
 ********************************************/
// const sassOptions = {outputStyle: 'expanded', errLogToConsole: true};
// function transpileSass(cb) {
//     return src([
//         'source/style/vendor/html5boilerplate/normalize.css',
//         'source/style/vendor/html5boilerplate/main.css',
//         'node_modules/gridlex/dist/gridlex.css',
//         'source/style/*.scss'
//     ])
//     .pipe(sass(sassOptions))
//     .pipe(concat('bundle.css'))
//     .pipe(cssSourceMaps.init())
//     .pipe(minifyCss())
//     .pipe(cssSourceMaps.write('.'))
//     .pipe(dest('./www/css'));
// }
// function watchScss(cb) {
//     watch('source/style/**/*.scss', transpileSass);
//     cb();
// }
/********************************************
 *  JS BUNDLE
 ********************************************/
// function bundleJavaScript(cb) {
//     return src([
//         'source/script/vendor/html5boilerplate/*.js',
//         // 'node_modules/materialize-css/dist/js/materialize.js',
//         'node_modules/materialize-css/js/cash.js',
//         'node_modules/materialize-css/js/component.js',
//         'node_modules/materialize-css/js/global.js',
//         'node_modules/materialize-css/js/anime.min.js',
//         // 'node_modules/materialize-css/js/collapsible.js',
//         'node_modules/materialize-css/js/dropdown.js',              // Use for dropdown of person selector
//         'node_modules/materialize-css/js/modal.js',                 // Use for open modals
//         'node_modules/materialize-css/js/materialbox.js',
//         // 'node_modules/materialize-css/js/parallax.js',
//         // 'node_modules/materialize-css/js/tabs.js',
//         // 'node_modules/materialize-css/js/tooltip.js',
//         'node_modules/materialize-css/js/waves.js',                 // nice anime when hover buttons
//         'node_modules/materialize-css/js/toasts.js',                // popup message to user
//         // 'node_modules/materialize-css/js/sidenav.js',
//         // 'node_modules/materialize-css/js/scrollspy.js',
//         //  'node_modules/materialize-css/js/autocomplete.js',
//         //  'node_modules/materialize-css/js/forms.js',
//         //  'node_modules/materialize-css/js/slider.js',
//         'node_modules/materialize-css/js/cards.js',
//         //  'node_modules/materialize-css/js/chips.js',
//         //  'node_modules/materialize-css/js/pushpin.js',
//         'node_modules/materialize-css/js/buttons.js',
//         // 'node_modules/materialize-css/js/datepicker.js',
//         // 'node_modules/materialize-css/js/timepicker.js',
//         // 'node_modules/materialize-css/js/characterCounter.js',
//         // 'node_modules/materialize-css/js/carousel.js',
//         // 'node_modules/materialize-css/js/tapTarget.js',
//         // 'node_modules/materialize-css/js/select.js',
//         // 'node_modules/materialize-css/js/range.js',
//         'source/script/*.js',
//     ])
//     .pipe(concat('bundle.js'))
//     .pipe(dest('./www/js'));
// }
// function watchJs(cb) {
//     watch('source/script/**/*.js', bundleJavaScript);
//     cb();
// }
/********************************************
 *  EXPORTED TASKS CALLED FROM OUTSIDE
 ********************************************/
// exports.default = parallel(
//     series(cleanCss, transpileSass),
//     series(cleanJs, bundleJavaScript),
// );
//exports.webserver = series(exports.default, startWebServer, watchScss, watchJs);
exports.webserver = startWebServer;