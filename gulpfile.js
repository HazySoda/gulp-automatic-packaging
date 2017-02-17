var gulp = require('gulp');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

gulp.task('css', function () {
    return gulp.src('src/**/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/css' ) );
});
 
gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/js' ) );
});

gulp.task('rev', function () {
    return gulp.src(['rev/**/*.json', 'src/**/*.aspx'])
        .pipe( revCollector() )
        .pipe( gulp.dest('dist') );
});

gulp.task('default', function() {

});