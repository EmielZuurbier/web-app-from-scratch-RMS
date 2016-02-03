(function () {
	"use strict"

	console.log('app is gestart')
	var app = {
		init : function () {
			routes.init();
			console.log("app.init()")
		}
	}

	var routes = {
		init : function () {
			console.log("routes.init()");
			this.addEventListener("hashchange", sections.toggle(window.location.hash))

		}
	}

	var sections = {
		toggle: function(route) {
			console.log("sections.toggle(route)"+ route );
		}
	}

	app.init();


})();

// comma's?
// wat is init