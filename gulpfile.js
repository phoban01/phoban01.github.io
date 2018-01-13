var gulp 		= require('gulp'),
	livereload 	= require('gulp-livereload'),
	sass		= require('gulp-sass'),
	minify		= require('gulp-compress');

livereload({ start: true,options:{port:8080} });

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    // .pipe(livereload())
});

gulp.task('compress',function() {
	return gulp.src(['/css/*'])
		.pipe(minify())
})

gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(livereload());
});

gulp.task('watch',function() {
	gulp.watch('scss/**/*.scss',['sass'])
	gulp.watch('*.html',['html'])
	gulp.watch('*.js',['html'])

})

gulp.task('default',['watch'])