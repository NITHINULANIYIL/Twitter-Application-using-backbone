$(function() {

	var Tweets = Backbone.Router.extend({
		routes: {
		    "": "index"
		},
		index: function() {
			var formView = new window.FormView;
		}
	});
	var Tweets = new Tweets();

	Backbone.history.start();

});
