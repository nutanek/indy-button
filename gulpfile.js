'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('compile-sass', function () {
    return gulp.src('./sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('compile-sass:watch', function () {
    gulp.watch('./sass/index.scss', ['compile-sass']);
});