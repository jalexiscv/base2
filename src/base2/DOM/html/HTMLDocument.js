
// http://www.whatwg.org/specs/web-apps/current-work/#htmldocument
// http://www.whatwg.org/specs/web-apps/current-work/#getelementsbyclassname

var HTMLDocument = Document.extend({
	"@!(document.nodeType)": {
		nodeType: 9
	},
	
	"@!(document.getElementsByClassName)": { // firefox3?
		getElementsByClassName: function(document, classNames) {
			return this.matchAll(document, "." + classNames.join("."));
		}
	}
}, {
	// http://www.whatwg.org/specs/web-apps/current-work/#activeelement	
	"@(document.activeElement===undefined)": {
		bind: function(document) {
			this.base(document);
			document.activeElement = null;
			document.addEventListener("focus", function(event) { //-dean: is onfocus good enough?
				document.activeElement = event.target;
			}, false);
			return document;
		}
	}
});