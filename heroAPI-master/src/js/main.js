var HeroApi = (function(){
	var shared = {};
	var resultsContainer = {};

	function populate(hero){
		console.log(hero);
		for (var i = 0; i < hero.data.results.length; i++) {
			var heroDiv = $('<div>');
			var heroInfoDiv = $('<div>');
			var heroDivWrapper = $('<div>');
			var name = $('<h1>');
			var description = $('<p>');
			var heroEvents= $('<p>');
			var heroSeries = $('<p>');
			var heroStories = $('<p>');
			var thumbnail = $('<img>');
			var notFoundImg = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";



			$(heroDiv).addClass('hero-div');
			
			
			$(heroInfoDiv).addClass('hero-info-div');
			$(thumbnail).attr('src', hero.data.results[i].thumbnail.path + '.' + hero.data.results[i].thumbnail.extension);
			$(heroDiv).append(thumbnail);
			$(heroDivWrapper).append(heroDiv);

			$(description).html(hero.data.results[i].description);
			$(description).addClass('hero-description');
			$(heroInfoDiv).append(description);
			$(heroDivWrapper).append(heroInfoDiv);


			$(name).html(hero.data.results[i].name);
			$(heroInfoDiv).append(name);
			$(heroDiv).append(heroInfoDiv);	
			$('.results-container').append(heroDiv);

			if (hero.data.results[i].events.items[0]) {
				$(heroEvents).html(hero.data.results[i].events.items[0].name);
				$(heroEvents).addClass('hero-description');
				$(heroInfoDiv).append(heroEvents);
			}



			if (hero.data.results[i].series.items[0]) {
				$(heroSeries).html(hero.data.results[i].series.items[0].name);
				$(heroSeries).addClass('hero-description');
				$(heroInfoDiv).append(heroSeries);
			}

			if (hero.data.results[i].stories.items[0]) {
				$(heroStories).html(hero.data.results[i].stories.items[0].name);
				$(heroStories).addClass('hero-description');
				$(heroInfoDiv).append(heroStories);
			}

			

			$(heroDiv).on('click', expandInfoWindow);
		}

		function expandInfoWindow(e) {
			e.preventDefault();
			var heroInfo = e.currentTarget.children[1].children;
			$('.hero-info-div').toggleClass('active');
			$(name).toggleClass('active');
			$(this).toggleClass('active');
			$(heroInfo).toggleClass('show');
			
		}

	}

	function setupListeners(){
		var url = 'https://gateway.marvel.com/v1/public/';
		var apiKey = '1462a753c71ee4965b382fa71c3ef8f5';

		$('.button-1').on('click', function(e){
			e.preventDefault();
			var offset = 0;
			for (var i = 0; i < 1; i++) {
				$.ajax({
					url: url + 'characters?apikey=' + apiKey + '&offset=' + offset
				})
				.done(populate);

				// if ( i < 74 ) {
				// 	offset+=20;
				// } else {
				// 	offset+=4;
				// }
			}
		});

		



	}

	function init(){
		setupListeners();
	}
	shared.init = init;

	return shared;
}());

HeroApi.init();