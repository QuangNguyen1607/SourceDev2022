const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const srcmap = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const browsersync = require("browser-sync").create();
const prefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
const cache = require("gulp-cache");
const del = require("del");
const plumber = require("gulp-plumber");
const cleanCSS = require("gulp-clean-css");

/* Options
 * ------ */
const options = {
	pug: {
		src: [
			"src/pages/*.pug",
			"!src/pages/\_*.pug"
		],
		all: "src/components/**/*.pug",
		dest: "dist",
	},
	scripts: {
		src: "src/js/main.js",
		dest: "dist/scripts",
	},
	styles: {
		src: [
			"src/components/_core/_**.sass",
			"src/components/_core/**.sass",
			"src/components/_global/**.sass",
			"src/components/**/**.sass",
		],
		dest: "dist/styles",
	},
	tailwinCSS: {
		src: "app/styles/**/tailwind.css",
		dest: "dist/styles",
	},
	images: {
		src: "./src/img/**/**.{svg,png,jpg,speg,gif,jpge,PNG,JPGE,JPG,SVG,GIF,SPEG,mp4}",
		dest: "dist/images",
	},
	fonts: {
		src: "src/fonts/*",
		dest: "dist/fonts",
	},
	browserSync: {
		baseDir: "dist",
	},
};

/* Browser-sync
 * ------------ */
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: options.browserSync.baseDir,
		},
		port: 3000,
	});
	done();
}

/* Styles
 * ------ */
function tailwinCSS() {
	return gulp
		.src(options.tailwinCSS.src)
		.pipe(srcmap.init())
		.pipe(concat("tailwind.min.css"))
		.pipe(
			plumber(function (err) {
				console.log("tailwinCSS Task Error");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(postcss())
		.pipe(
			rename({
				basename: "tailwind",
				suffix: ".min",
				extname: ".css",
			})
		)
		.pipe(srcmap.write("."))
		.pipe(cleanCSS({ compatibility: "ie8" }))
		.pipe(gulp.dest(options.tailwinCSS.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}
function styles() {
	return gulp
		.src(options.styles.src)
		.pipe(
			plumber(function (err) {
				console.log("Styles Task Error");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(sass().on("error", sass.logError))
		.pipe(
			postcss([
				prefixer({
					overrideBrowserslist: ["last 4 version", "IE 10"],
					cascade: false,
					stats: ["> 1%, IE 10"],
				}),
				cssnano(),
			])
		)
		.pipe(gulp.dest(options.styles.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}

/* Scripts
 * ------ */

function scripts() {
	return gulp
		.src(options.scripts.src)
		.pipe(
			plumber(function (err) {
				console.log("Scripts Task Error");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest(options.scripts.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}

/* Views
 * ------ */

function ProcessPug() {
	return gulp
		.src(options.pug.src)
		.pipe(
			plumber(function (err) {
				console.log("Pug Task Error");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest(options.pug.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}

/* Images
 * ------ */

function images() {
	return gulp
		.src(options.images.src)
		.pipe(
			cache(
				imagemin({
					interlaced: true,
				})
			)
		)
		.pipe(gulp.dest(options.images.dest));
}

/* Fonts
 * ------ */

function fonts() {
	return gulp.src(options.fonts.src).pipe(gulp.dest(options.fonts.dest));
}

/* Clean up
 * ------ */

async function clean() {
	return Promise.resolve(del.sync("dist"));
}

function watchFiles() {
	gulp.watch(options.pug.all, gulp.series(ProcessPug, tailwinCSS));
	gulp.watch(options.styles.src, styles);
	gulp.watch(options.tailwinCSS.src, tailwinCSS);
	gulp.watch(options.scripts.src, scripts);
	gulp.watch(options.images.src, images);
	gulp.watch(options.fonts.src, fonts);
}

/* Build
 * ------ */
const build = gulp.series(
	clean,
	gulp.parallel(styles, ProcessPug, scripts, images, fonts, tailwinCSS)
);
const watch = gulp.parallel(watchFiles, browserSync);
// export tasks
exports.styles = styles;
exports.tailwinCSS = tailwinCSS;
exports.ProcessPug = ProcessPug;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
