// require('dotenv').config();
// require('babel-polyfill');

// const fs = require('fs');
// const path = require('path');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
// const replace = require('gulp-replace');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');
const uglifyjs = require('gulp-uglify');
// const babel = require('gulp-babel');
const sass = require('gulp-sass');
const combineMq = require('gulp-combine-mq');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
// const insert = require('gulp-file-insert');
const metalsmith = require('metalsmith');
const pug = require('metalsmith-pug');
const sitemap = require('metalsmith-sitemap')
const htmlmin = require('metalsmith-html-minifier')
const collections = require('metalsmith-collections')
const permalinks = require('metalsmith-permalinks');
// const moveUp = require('metalsmith-move-up');
// const moveRemove = require('metalsmith-move-remove');

const paths = {
  source: 'src/',
  data: 'src/global.json',
  assets: 'src/assets/**/*',
  fonts: 'src/assets/fonts/*',
  images: 'src/assets/images/',
  sprites: 'src/assets/sprites/',
  favicon: 'src/favicon/*',
  scripts: 'src/scripts/*.js',
  partials: 'src/partials/',
  layouts: 'src/layouts/',
  sass: 'src/sass/',
  content: 'src/content/',
  build: 'build/'
};

gulp.task('copyimages', function() {
  return gulp
    .src(paths.images + '*.+(png|jpg|gif|svg)')
    .pipe(gulp.dest(paths.build + 'assets/images/'));
});

gulp.task('copyfonts', function() {
  return gulp.src(paths.fonts).pipe(gulp.dest(paths.build + 'assets/fonts/'));
});

gulp.task('copyrobots', function() {
  return gulp.src('src/robots.txt').pipe(gulp.dest(paths.build));
});

gulp.task('copylanguagedetector', function() {
  return gulp
    .src('src/scripts/languageDetectorInit.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.build + 'assets/scripts/'));
});

gulp.task('favicon', function() {
  return gulp.src(paths.favicon).pipe(gulp.dest(paths.build));
});

gulp.task('scripts', function(callback) {
  return gulp
    .src('./src/scripts/main.js')
    // .pipe(concat('main.js'))
    // .pipe(
    //   babel({
    //     presets: [
    //       [
    //         'env',
    //         {
    //           targets: {
    //             browsers: ['last 2 versions', 'safari >= 7']
    //           },
    //           modules: false
    //         }
    //       ]
    //     ]
    //   })
    // )
    // .pipe(uglifyjs())
    .pipe(gulp.dest(paths.build + 'assets/scripts/'));
});

gulp.task('scripts-watch', ['scripts'], function(callback) {
  browserSync.reload();
  callback();
});


// gulp.task('imagemin', function() {
//   return gulp
//     .src(paths.images + '*.+(png|jpg|gif|svg)')
//     .pipe(imagemin())
//     .pipe(gulp.dest(paths.build + 'assets/images/'));
// });

// gulp.task('svgsprite', function() {
//   return gulp
//     .src(paths.sprites + '*.svg')
//     .pipe(
//       svgSprite({
//        svg: {
//           xmlDeclaration: false
//         },
//         mode: {
//           inline: true,
//           symbol: {
//             dest: '',
//             sprite: 'sprites.svg'
//           }
//         }
//       })
//     )
//     .pipe(gulp.dest('src/partials'));
// });

gulp.task('html', function(callback) {
  var ms = metalsmith(__dirname) // It's Metalsmith!
    .source(paths.content)
    .destination(paths.build)
    .clean(false)
    .use(collections())
    .use(
      pug({
        useMetadata: true,
        locals: {
          markdown: require('marked')
        }
      })
    )
    .use(permalinks())
    // .use(moveUp('en/**/*'))
    // .use(
    //   sitemap({
    //     hostname: websiteHostname,
    //     omitIndex: true,
    //     privateProperty: 'sitemap_excluded'
    //   })
    // )
    // .use(
    //   moveRemove({
    //     remove: ['scripts/']
    //   })
    // )
    // .use(htmlmin({
    //   removeAttributeQuotes: false
    // }))
    .build(function(err) {
      if (err) {
        console.error(err);
        callback(err);
      }

      browserSync.reload();
      callback();
    });
});

gulp.task('sass', function() {
  return gulp
    .src('src/sass/main.scss')
    // .pipe(
    //   insert({
    //     '/* Normalize */': 'node_modules/normalize.css/normalize.css',
    //     '/* Slick */': 'node_modules/slick-carousel/slick/slick.scss',
    //     '/* Tether */': 'node_modules/tether/dist/css/tether.css',
    //     '/* TetherDrop */': 'node_modules/tether-drop/dist/css/drop-theme-basic.css'
    //   })
    // )
    .pipe(sass().on('error', sass.logError)) // SASS to CSS
    .pipe(combineMq()) // Combine media queries
    .pipe(
      autoprefixer({
        // Add browser vendor prefixes
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(csso()) // Minify CSS
    .pipe(gulp.dest(paths.build + 'assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  runSequence(
    'scripts',
    // 'svgsprite',
    'copyimages',
    'favicon',
    'copyfonts',
    'copyrobots',
    'copylanguagedetector',
    'sass',
    'html',
    function() {
      browserSync.init({
        // Start BrowserSync server
        server: {
          baseDir: paths.build
        },
        port: 5000,
        open: false
      });
      gulp.watch('./src/**/*.+(png|jpg|gif|svg)', [
        'copyimages'
      ]);
      gulp.watch('./src/**/*.+(html|pug)', [
        'html'
      ]);
      gulp.watch('./src/**/*.js', [
        'copylanguagedetector',
        'scripts-watch'
      ]);
      gulp.watch('./src/**/*.+(sass|scss)', ['sass']);
    }
  );
});

gulp.task('build', function(callback) {
  console.log('Build ENV:', process.env.BUILD_ENV);

  runSequence(
    'scripts',
    // 'svgsprite',
    'copyimages',
    'favicon',
    'copyfonts',
    'copyrobots',
    'copylanguagedetector',
    'sass',
    'html',
    callback
  );
});

gulp.task('default', ['serve'], function () {});

