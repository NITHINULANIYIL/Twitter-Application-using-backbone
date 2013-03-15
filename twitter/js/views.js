
$(function() {

	window.FormView = Backbone.View.extend({
		el: $("#key"),
		search_twitter: function(e) {
			e.preventDefault();
			var self = this;
			var item = $("#q").val();
			var n=item.split(",");
			var first=n[0];
			var second =n[1];
			console.log(first);
			console.log(second);
			$.getJSON("http://search.twitter.com/search.json?callback=?",{
				q: first
		
			},
				function(data) {
				$("#tts li").fadeOut();
				for(var i in data.results) {
					var twt = new Tweet(data.results[i]);
					//console.log(data.results[i]);
					var ttV = new TweetView({model: twt});
					ttV.render();
					
			}
			});


			$.getJSON("http://search.twitter.com/search.json?callback=?",{
				q: second
		
			},
				function(data) {
				$("#tts1 li").fadeOut();
				for(var i in data.results) {
					var twt1 = new Tweet(data.results[i]);
					//console.log(data.results[i]);
					var ttV1 = new TweetView({model: twt1});
					ttV1.render();
					
			}
			});

		},
		events: {
			"submit": "search_twitter"
		}
    });

	window.TweetView = Backbone.View.extend({
		render: function() {
			var tweet = _.template( $("#tt").html(), this.model.toJSON());
			$("#tts").append(tweet);
			$("#t_" + this.model.get("id")).fadeIn();
		}
	});

});



