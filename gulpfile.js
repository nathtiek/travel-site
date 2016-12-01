var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default', function() {
    console.log("Gulp default task");
});

gulp.task('watch', function(){
    watch('./app/index.html', function() {
        gulp.start('default');
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
    
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
    
});