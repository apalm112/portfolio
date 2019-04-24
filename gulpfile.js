// Require the needed npm modules.
const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	csso = require('gulp-csso'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	browserSync = require('browser-sync').create(),
	runSequence = require('run-sequence'),
	pump = require('pump');  // pump is a wrapper for .pipe() that gives moar readable error messages.  https://github.com/gulpjs/gulp/blob/master/docs/why-use-pump/README.md

// Variables w/ path to source & dist folders.
const options = {
	src: 'public',
	dist: 'dist'
};

/* Gulp Tasks      *********************************************************/
gulp.task('cssMinify', (callback) => {
	// Concats SaSS files, creates source map.
	pump([
		gulp.src(options.src + '/scss/custom.scss'),
		maps.init({ largeFile: true }),
		sass(),
		maps.write('./'),
		gulp.dest(options.src + '/dist/css/'),
		browserSync.reload({ stream: true })
	],
	callback
	);
});

gulp.task('styles', ['cssMinify'], (callback) => {
	// Minifies the CSS files for production folder.
	pump([
		gulp.src(options.src + '/css/global.css'),
		csso(),
		rename('all.min.css'),
		gulp.dest(options.src + '/dist/css/')
	],
	callback
	);
});

gulp.task('images', () => {
	// Uses gulp-imagemin module to optimize the images for production.
	return gulp.src(options.src + '/imgs/*')
		.pipe(imagemin())
		.pipe(gulp.dest(options.dist + '/imgs/'));
});

gulp.task('clean', () => {
	// Deletes all of the files and folders in the dist folder created from tasks & other files created during build process.
	return del([
							'public/dist/css/',
							'src/css/'
						]);
});

gulp.task('build', (callback) => {
	//  Runs tasks in sequence to create files for the production folder.
	runSequence('clean', [
												'styles',
												'images',
												'buildOut'
												],
		callback
	);
});

gulp.task('buildOut', () => {
	//  Provides the static development files for the production folder.
	gulp.src(['views/index.pug'], { base: './' })
		.pipe(gulp.dest('dist'));
});

gulp.task('default', (callback) => {
	runSequence('build', ['server'],
		callback
	);
});

gulp.task('server', () => {
	// Start local webserver displaying the project files, refreshes on change to any .scss file.
	browserSync.init({
		server: { baseDir: 'src' }
	});
	gulp.watch(options.src + '/sass/**/*.scss', ['styles']);
});
