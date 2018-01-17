var gulp 		= require('gulp'),
	postcss		= require('gulp-postcss'),
	cssnano		= require('cssnano'),
	flexibility = require('postcss-flexibility'),
	autoprefixr = require('autoprefixer'),
	livereload 	= require('gulp-livereload'),
	sass		= require('gulp-sass'),
	concat		= require('gulp-concat'),
	uglify		= require('gulp-uglify'),
	minify		= require('gulp-compress');

var bower_path = 'bower_components/'
var js_srcs = [
	bower_path + 'viewport-units-buggyfill/viewport-units-buggyfill.js',
	bower_path + 'viewport-units-buggyfill/viewport-units-buggyfill.hacks.js',
	bower_path + 'css-grid-polyfill-binaries/css-polyfills.min.js',
	bower_path + 'flexibility/flexibility.js',
	bower_path + 'jquery/dist/jquery.min.js',
	'js/main.js'
]

var postcss_plugins = [
        flexibility(),
        autoprefixr(),
        // cssnano()
    ];


gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postcss_plugins))
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