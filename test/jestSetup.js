const { configure, shallow, render, mount } = require('enzyme');
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.IntersectionObserver = window.IntersectionObserver
const windowAdditions = {}
Object.assign(global.window, windowAdditions);

window.localStorage = window.sessionStorage = {
  getItem: function(key) {
    return this[key];
  },
  setItem: function(key, value) {
    this[key] = value;
  },
};
document.body.innerHTML = '<div id="scroll-test"></div>'
global.IS_TEST = true;
global.WEBPACK_BUILD_TYPE = 'development';
process.env.LAMBDA_CDN = 'localhost:3000'

window.scroll = (x, y) => {
  return [x, y]
}
