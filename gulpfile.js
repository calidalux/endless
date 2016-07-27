var gulp        = require('gulp');
var browserSync = require('browser-sync');
var paths = {
  html:['index.html'],
  css:['./css/main.css'],
  scripts:['./js/main.js']
};
var reload = browserSync.reload;
// Static server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    open: true,
  });
});

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('css', function(){
  gulp.src(paths.css)
  .pipe(reload({stream:true}));
});

gulp.task('scripts', function(){
  gulp.src(paths.scripts)
  .pipe(reload({stream:true}));
});

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.script, ['scripts']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watcher', 'browserSync']);
