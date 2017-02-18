var gulp = require('gulp');
var flatten = require('gulp-flatten');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('css', function () {
    return gulp.src('src/**/*.css', {base: 'src'})
        .pipe(autoprefixer({
            browsers: [
                'Chrome > 20',
                'Firefox > 20',
                'IE 9',
                'last 2 versions',
                '> 5%'
            ],
            cascade: false,
            remove:false
        }))
        .pipe(cleanCSS({
            compatibility: '*',
            level: 2
        }))
        .pipe(gulp.dest('dist'))
        .pipe(flatten())
        .pipe(rev())
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/css' ) );
});
 
gulp.task('js', function () {
    return gulp.src('src/**/*.js', {base: 'src'})
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(flatten())
        .pipe(rev())
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/js' ) );
});

gulp.task('rev', function () {
    return gulp.src(['rev/**/*.json', 'src/**/*.aspx'])
        .pipe( revCollector({
            replaceReved: true
        }) )
        .pipe( gulp.dest('dist') );
});

gulp.task('default', function() {

});