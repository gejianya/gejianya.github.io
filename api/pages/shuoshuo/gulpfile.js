{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"const gulp = require('gulp') const uglify = require('gulp-uglify-es').default const cleanCSS = require('gulp-clean-css') const concat = requ...","date":"2022-10-20T23:03:06.389Z","updated":"2022-10-20T22:05:27.366Z","comments":true,"path":"api/pages/shuoshuo/gulpfile.js","covers":null,"excerpt":"","content":"<link rel=\"stylesheet\" class=\"aplayer-secondary-style-marker\" href=\"/assets/css/APlayer.min.css\"><script src=\"/assets/js/APlayer.min.js\" class=\"aplayer-secondary-script-marker\"></script>const gulp = require('gulp')\nconst uglify = require('gulp-uglify-es').default\nconst cleanCSS = require('gulp-clean-css')\nconst concat = require('gulp-concat')\nconst rename = require('gulp-rename')\n\nconst minify_css = () => (\n    gulp.src('src/css/*.css')\n        .pipe(cleanCSS({ compatibility: 'ie8' }))\n        .pipe(rename('artitalk.min.css'))\n        .pipe(gulp.dest('dist/css'))\n);\n\nconst concat_js = () => (\n    gulp.src(['src/plugins/*.js', 'src/main.js'])\n        .pipe(concat('artitalk.js'))\n        .pipe(gulp.dest('dist/js'))\n);\n\nconst minify_js = () => (\n    gulp.src('dist/js/artitalk.js')\n        .pipe(uglify())\n        .pipe(rename('artitalk.min.js'))\n        .pipe(gulp.dest('dist/js'))\n);\n\nmodule.exports = {\n    minify_css: minify_css,\n    concat_js: concat_js,\n    minify_js: minify_js\n};\n\ngulp.task('dist', gulp.parallel(\n    minify_css,\n    gulp.series(\n        concat_js,\n        minify_js\n    )\n))\n\ngulp.task('default', gulp.series('dist'));\n","count_time":{"symbolsCount":966,"symbolsTime":"1 mins."},"toc":""}