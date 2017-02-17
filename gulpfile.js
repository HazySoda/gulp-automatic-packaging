var gulp = require('gulp');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/css' ) );
});
 
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/js' ) );
});

gulp.task('rev', function () {
    return gulp.src(['rev/**/*.json', 'src/aspx/*.aspx'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                'css': '/dist/css',
                '/js/': '/dist/js/'
            }
        }) )
        .pipe( gulp.dest('dist/aspx') );
});

gulp.task('default', function() {
	
});