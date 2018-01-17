var gulp 		= require('gulp'),
	livereload 	= require('gulp-livereload'),
	sass		= require('gulp-sass'),
	concat		= require('gulp-concat'),
	uglify		= require('gulp-uglify'),
	minify		= require('gulp-compress');

var bower_path = 'bower_components/'
var js_srcs = [
	bower_path + 'css-grid-polyfill-binaries/css-polyfills.min.js',
	'js/main.js'
]


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

gulp.task('js',function() {
	return gulp.src(js_srcs)
		.pipe(concat('app.min.js'))
		.pipe(uglify())
	.pipe(gulp.dest('js/'))
})

gulp.task('watch',function() {
	livereload({ start: true,options:{port:8080} });	
	gulp.watch('scss/**/*.scss',['sass'])
	gulp.watch('*.html',['html'])
	gulp.watch('*.js',['js','html'])

})

gulp.task('default',['watch'])