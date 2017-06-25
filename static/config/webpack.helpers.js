import path from 'path';
import glob from 'glob';


const root = path.resolve(__dirname, '..');
const source = path.resolve(root, 'src');
const build = path.resolve(root, 'build');
const PATH = {
  root: root,
  source: source,
  build: build,
  public: 'https://pubean.com/',
  exclude: '/node_modules/',
  main: path.resolve(source, 'main.js'),
  style: path.resolve(source, 'main.scss'),
  index: path.resolve(source, 'templates/index.ejs'),
  scripts: glob.sync(path.resolve(source, 'scripts/**/*.js')),
  styles: glob.sync(path.resolve(source, 'styles/**/*.scss')),
  templates: glob.sync(path.resolve(source, 'templates/**/*.ejs')),
};

export default {
  PATH,
};
