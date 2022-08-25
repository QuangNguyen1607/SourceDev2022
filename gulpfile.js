const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const Fiber = require("fibers");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const srcmap = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const c = require("ansi-colors");
const browsersync = require("browser-sync").create();
const prefixer = require("autoprefixer");
const clipboard = require("gulp-clipboard");
var postcss = require("gulp-postcss");
const cache = require("gulp-cache");
const cssImport = require("gulp-cssimport");
const sassUnicode = require("gulp-sass-unicode");
const del = require("del");
const plumber = require("gulp-plumber");
const cleanCSS = require("gulp-clean-css");
const readFileSync = require("graceful-fs").readFileSync;
const tailwindcss = require("tailwindcss");
sass.compiler = require("dart-sass");
/* Options
 * ------ */
const options = {
	pug: {
		src: ["src/views/*.pug"],
		all: "src/**/*.pug",
		dest: "dist",
	},
	scripts: {
		src: "src/js/main.js",
		dest: "dist/scripts",
	},
	CoreScripts: {
		dest: "dist/scripts",
	},
	ProcessStyles: {
		src: [
			"src/components/_core/_**.sass",
			"src/components/_core/**.sass",
			"src/components/_global/**.sass",
			"src/**/**.sass",
		],
		dest: "dist/styles",
	},
	ProcessTailwinCSS: {
		src: "src/tailwind/main.css",
		dest: "dist/styles",
	},
	images: {
		src: "./src/img/**/**.{svg,png,jpg,speg,gif,jpge,PNG,JPGE,JPG,SVG,GIF,SPEG,mp4}",
		dest: "dist/img",
	},
	favicon: {
		src: "src/favicon.ico",
		dest: "dist",
	},
	fonts: {
		src: "src/fonts/*",
		dest: "dist/fonts",
	},
	FontawesomeCSS: {
		src: "src/fontAwesome/**.css",
		dest: "dist/styles",
	},
	browserSync: {
		baseDir: "dist",
	},
};

/* Browser-sync
 * ------------ */
function browserSync(done) {
	browsersync.init({
		notify: true,
		server: {
			baseDir: options.browserSync.baseDir,
		},
		port: 3000,
	});
	done();
}

/* Styles
 * ------ */
function ProcessTailwinCSS() {
	return gulp
		.src(options.ProcessTailwinCSS.src)
		.pipe(srcmap.init())
		.pipe(concat("tailwind.min.css"))
		.pipe(
			plumber(function (err) {
				console.log("ProcessTailwinCSS Task Error");
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
		.pipe(cleanCSS({ compatibility: "ie8" }))
		.pipe(srcmap.write("."))
		.pipe(gulp.dest(options.ProcessTailwinCSS.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}
function ProcessFontAwesomeCSS() {
	return gulp
		.src(options.FontawesomeCSS.src)
		.pipe(srcmap.init())
		.pipe(
			plumber(function (err) {
				console.log("FontawesomeCSS Task Error");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(postcss())
		.pipe(
			rename({
				basename: "fontawesome",
				suffix: ".min",
				extname: ".css",
			})
		)
		.pipe(cleanCSS({ compatibility: "ie8" }))
		.pipe(gulp.dest(options.FontawesomeCSS.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}
function ProcessStyles() {
	return gulp
		.src(options.ProcessStyles.src)
		.pipe(srcmap.init())
		.pipe(concat("main.min.sass"))
		.pipe(
			sass
				.sync({
					fiber: Fiber,
				})
				.on("error", sass.logError)
		)
		.pipe(sassUnicode())
		.pipe(cssImport())
		.pipe(sass().on("error", sass.logError))
		.pipe(
			postcss([
				tailwindcss("./tailwind.config.js"),
				prefixer({
					env: ["last 4 version", "IE 9"],
					cascade: false,
				}),
				cssnano(),
			])
		)
		.pipe(
			rename({
				basename: "main",
				suffix: ".min",
				extname: ".css",
			})
		)
		.pipe(srcmap.write("."))
		.pipe(gulp.dest(options.ProcessStyles.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}
function CoreStyles() {
	let config = JSON.parse(readFileSync("./config.json"));
	return gulp
		.src(config.css, {
			allowEmpty: true,
		})
		.pipe(plumber())
		.pipe(concat("global.min.css"))
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
		.pipe(gulp.dest("./dist/styles"))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}
/* Scripts
 * ------ */
function CoreScripts() {
	let config = JSON.parse(readFileSync("./config.json"));
	return gulp
		.src(config.js, {
			allowEmpty: true,
		})
		.pipe(concat("global.min.js"))
		.pipe(uglify())
		.pipe(
			rename({
				basename: "global",
				suffix: ".min",
				extname: ".js",
			})
		)
		.pipe(srcmap.write("."))
		.pipe(gulp.dest(options.CoreScripts.dest))
		.pipe(
			browsersync.reload({
				stream: true,
			})
		);
}
function ProcessScripts() {
	return gulp
		.src(options.scripts.src)
		.pipe(srcmap.init())
		.pipe(babel())
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(
			rename({
				basename: "main",
				suffix: ".min",
				extname: ".js",
			})
		)
		.pipe(srcmap.write("."))
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

function ProcessImages() {
	return gulp.src(options.images.src).pipe(gulp.dest(options.images.dest));
}

/* Fonts
 * ------ */

function ProcessFonts() {
	return gulp.src(options.fonts.src).pipe(gulp.dest(options.fonts.dest));
}
/* Fonts
 * ------ */

function ProcessFavicon() {
	return gulp
		.src(options.favicon.src, {
			allowEmpty: true,
		})
		.pipe(gulp.dest(options.favicon.dest));
}

/* Clean up
 * ------ */

async function ProcessClean() {
	return Promise.resolve(del.sync("dist"));
}

function watchFiles() {
	gulp.watch(options.pug.all, gulp.series(ProcessPug, ProcessStyles));
	gulp.watch(options.pug.src, ProcessPug);
	gulp.watch(options.ProcessStyles.src, ProcessStyles);
	gulp.watch(options.ProcessTailwinCSS.src, ProcessTailwinCSS);
	gulp.watch(options.scripts.src, ProcessScripts);
	gulp.watch("./config.json", gulp.series(CoreScripts, CoreStyles));
	gulp.watch(options.images.src, ProcessImages);
	gulp.watch(options.fonts.src, ProcessFonts);
	gulp.watch(options.favicon.src, ProcessFavicon);
}
// -------------------------------------
//   End Message
// -------------------------------------
const end = done => {
	console.log(" ");
	console.log(c.green("--------------------------------------"));
	console.log(c.green.bold.underline("🚚 Source Build Done !!"));
	console.log(c.green("--------------------------------------"));
	console.log(" ");
	done();
};
/* Build
 * ------ */
const ProcessBuildSource = gulp.series(
	ProcessClean,
	gulp.parallel(
		ProcessPug,
		CoreStyles,
		ProcessStyles,
		ProcessFontAwesomeCSS,
		CoreScripts,
		ProcessScripts,
		ProcessImages,
		ProcessFavicon,
		ProcessFonts
	),
	end
);
const watch = gulp.parallel(watchFiles, browserSync);
// export tasks
exports.CoreStyles = CoreStyles;
exports.ProcessStyles = ProcessStyles;
exports.ProcessFontAwesomeCSS = ProcessFontAwesomeCSS;
exports.ProcessPug = ProcessPug;
exports.CoreScripts = CoreScripts;
exports.scripts = ProcessScripts;
exports.images = ProcessImages;
exports.favicon = ProcessImages;
exports.fonts = ProcessFonts;
exports.clean = ProcessClean;
exports.build = ProcessBuildSource;
exports.watch = watch;
exports.default = ProcessBuildSource;
