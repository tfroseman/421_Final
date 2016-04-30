var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function(){
    //Default task here
    gulp.src(['node_modules/interact.js/dist/interact.min.js','dev_js/bootstrap.min.js','dev_js/jquery.js']).pipe(gulp.dest('public/javascripts/'));
    gulp.src(['dev_js/conevertimage.js','dev_js/dragblob.js','dev_js/draggingui.js']).pipe(concat('mixed.js')).pipe(uglify()).pipe(gulp.dest('public/javascripts'));
});