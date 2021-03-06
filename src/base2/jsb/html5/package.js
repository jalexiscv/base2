
base2.global.html5 = new base2.Package(this, {
  name:    "html5",
  version: "0.5",
  imports: "Function2,Enumerable,dom,jsb",
  
  NOT_SUPPORTED: function() {
    throw "Not supported in html5-now.js.";
  },

  get: function(element, propertyName) {
    return this.getBehavior(element).get(element, propertyName);
  },

  set: function(element, propertyName, value) {
    this.getBehavior(element).set(element, propertyName, value);
  },

  getBehavior: function(element) {
    return this[element.nodeName.toLowerCase()] || behavior;
  }
});

eval(this.imports);
