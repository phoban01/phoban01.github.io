'use strict';

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    hash            = require('gulp-hash'),
    nano            = require('gulp-cssnano'),
    del             = require("del");

var config = {}
config.bower_dir = './bower_components'

var sassPaths = [
    config.bower_dir + '/foundation-sites/scss',
    config.bower_dir + '/motion-ui/src',
];

gulp.task('sass',function() {
    gulp.src('scss/app.scss')
        .pipe(sass({
              includePaths: sassPaths,
              outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
                    browsers : ["last 20 versions"]
                }))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(nano())
        .pipe(gulp.dest("css/"));
})

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
