
// http://www.whatwg.org/specs/web-apps/current-work/#domtokenlist0

// I'm not supporting length/index(). What's the point?

var ClassList = Module.extend({
  add: function(element, token) {
    if (!this.has(element, token)) {
      element.className += (element.className ? " " : "") + token;
    }
  },

  has: function(element, token) {
    var regexp = new RegExp("(^|\\s)" + token + "(\\s|$)");
    return regexp.test(element.className);
  },

  remove: function(element, token) {
    var regexp = new RegExp("(^|\\s)" + token + "(\\s|$)", "g");
    element.className = trim(element.className.replace(regexp, "$2"));
  },

  toggle: function(element, token) {
    this[this.has(element, token) ? "remove" : "add"](element, token);
  }
});

function _ElementClassList(element) {
  ClassList.forEach(function(method, name, module) {
    this[name] = bind(method, module, element);
  }, this);
};
