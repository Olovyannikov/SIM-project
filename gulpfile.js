const gulp = require('gulp');
const {series, parallel} = require('gulp');

const gulpClean = require('gulp-clean');

const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync("package.json"));

const clean = () => gulp.src([
    './build',

], {read: false,allowEmpty : true}).pipe(gulpClean());

const createDirs = (cb) => {
    fs.mkdirSync('build', {recursive: true})

    cb ()
}


const generatePackageJson = (cb) => {

    fs.writeFileSync("build/package.json", JSON.stringify({
        name: packageJson.name,
        version: packageJson.version,
        dependencies : packageJson.devDependencies
    }, null, 4))

    fs.copyFileSync ("./yarn.lock", "./build/yarn.lock")

    cb ()
};

exports.default = series(
    createDirs,
    clean,
    createDirs,
    parallel (
        generatePackageJson
    )
)
