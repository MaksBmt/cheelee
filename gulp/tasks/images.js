import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(app.plugins.newer(app.path.build.images)) //есть ли новые картинки
    .pipe(webp()) //создаем изображение в формате webp
    // .pipe(
    // 	app.plugins.if(
    // 		app.isBuild,
    // 		webp()
    // 	)
    // )
    .pipe(app.gulp.dest(app.path.build.images)) //созданные webp выгружаются в свою папку
    // .pipe(
    // 	app.plugins.if(
    // 		app.isBuild,
    // 		app.gulp.dest(app.path.build.images)
    // 	)
    // )
    .pipe(app.gulp.src(app.path.src.images))  //по новой получаем доступ к папке с исходниками картинок
    // .pipe(
    // 	app.plugins.if(
    // 		app.isBuild,
    // 		app.gulp.src(app.path.src.images)
    // 	)
    // )
    .pipe(app.plugins.newer(app.path.build.images))  //проверяем опять на обновление
    // .pipe(
    // 	app.plugins.if(
    // 		app.isBuild,
    // 		app.plugins.newer(app.path.build.images)
    // 	)
    // )
    .pipe(
      // app.plugins.if(
      // 	app.isBuild,
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
      })
      // )
    )
    .pipe(app.gulp.dest(app.path.build.images)) //выгружаем оптимизированные картинки в папку с результатом
    .pipe(app.gulp.src(app.path.src.svg))       //получаем доступ к svg
    .pipe(app.gulp.dest(app.path.build.images))   //выгружаем их в папку с результатом
    .pipe(app.plugins.browsersync.stream());
}