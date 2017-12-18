var gulp       = require('gulp')
var browserify = require('browserify')
var source     = require('vinyl-source-stream')

gulp.task('build', function() { // build というタスクを定義します
    browserify({
        'entries': ['./main.js']
    }) // browserify の設定をして・・・
        .bundle() // 一つのファイルにまとめたものを 
        .pipe(source('bundle.js')) // bundle.js という名前のファイルに記録して
        .pipe(gulp.dest('./')) // "./" に書き出します
})

gulp.task('default', ['build']) // デフォルトの gulp タスクは build です。