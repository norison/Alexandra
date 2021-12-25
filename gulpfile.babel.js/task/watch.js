import pug from "./pug.js";
import scss from "./scss.js";
import js from "./js.js";
import img from "./img.js";
import font from "./font.js";

export default () => {
  $.gulp.watch($.path.pug.watch).on("all", $.gulp.series(pug, $.browserSync.reload));
  $.gulp.watch($.path.scss.watch).on("all", $.gulp.series(scss, $.browserSync.reload));
  $.gulp.watch($.path.js.watch).on("all", $.gulp.series(js, $.browserSync.reload));
  $.gulp.watch($.path.img.watch).on("all", $.gulp.series(img, $.browserSync.reload));
  $.gulp.watch($.path.font.watch).on("all", $.gulp.series(font, $.browserSync.reload));
};
