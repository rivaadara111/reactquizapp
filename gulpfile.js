var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var webpack = require('webpack-stream');


gulp.task('sass', function() {
   gulp.src('./sass/sass.scss')
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
       }))
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('compile-react', function() {
	return gulp.src('./js/main.jsx')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(webpack({
      output: {
        filename: 'main.js'
    },
    module: {
      loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
}
}))
		.pipe(gulp.dest('./js'));
});

gulp.task('browser-sync', ['compile-react'], function() {

	browserSync.init({
		server: './'
	});

	gulp.watch(['./js/main.jsx'], ['compile-react']);
	gulp.watch(['./js/main.js','./css/style.css','./build/css/style.min.css', 'index.html'] ).on('change', browserSync.reload);
  gulp.watch('./sass/*.scss', ['sass']);
  });

gulp.task('default', ['sass', 'browser-sync']);
