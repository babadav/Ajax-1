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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhlcm9BcGkgPSAoZnVuY3Rpb24oKXtcblx0dmFyIHNoYXJlZCA9IHt9O1xuXHR2YXIgcmVzdWx0c0NvbnRhaW5lciA9IHt9O1xuXG5cdGZ1bmN0aW9uIHBvcHVsYXRlKGhlcm8pe1xuXHRcdGNvbnNvbGUubG9nKGhlcm8pO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaGVyby5kYXRhLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBoZXJvRGl2ID0gJCgnPGRpdj4nKTtcblx0XHRcdHZhciBoZXJvSW5mb0RpdiA9ICQoJzxkaXY+Jyk7XG5cdFx0XHR2YXIgaGVyb0RpdldyYXBwZXIgPSAkKCc8ZGl2PicpO1xuXHRcdFx0dmFyIG5hbWUgPSAkKCc8aDE+Jyk7XG5cdFx0XHR2YXIgZGVzY3JpcHRpb24gPSAkKCc8cD4nKTtcblx0XHRcdHZhciBoZXJvRXZlbnRzPSAkKCc8cD4nKTtcblx0XHRcdHZhciBoZXJvU2VyaWVzID0gJCgnPHA+Jyk7XG5cdFx0XHR2YXIgaGVyb1N0b3JpZXMgPSAkKCc8cD4nKTtcblx0XHRcdHZhciB0aHVtYm5haWwgPSAkKCc8aW1nPicpO1xuXHRcdFx0dmFyIG5vdEZvdW5kSW1nID0gXCJodHRwOi8vaS5hbm5paGlsLnVzL3UvcHJvZC9tYXJ2ZWwvaS9tZy9iLzQwL2ltYWdlX25vdF9hdmFpbGFibGVcIjtcblxuXG5cblx0XHRcdCQoaGVyb0RpdikuYWRkQ2xhc3MoJ2hlcm8tZGl2Jyk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0JChoZXJvSW5mb0RpdikuYWRkQ2xhc3MoJ2hlcm8taW5mby1kaXYnKTtcblx0XHRcdCQodGh1bWJuYWlsKS5hdHRyKCdzcmMnLCBoZXJvLmRhdGEucmVzdWx0c1tpXS50aHVtYm5haWwucGF0aCArICcuJyArIGhlcm8uZGF0YS5yZXN1bHRzW2ldLnRodW1ibmFpbC5leHRlbnNpb24pO1xuXHRcdFx0JChoZXJvRGl2KS5hcHBlbmQodGh1bWJuYWlsKTtcblx0XHRcdCQoaGVyb0RpdldyYXBwZXIpLmFwcGVuZChoZXJvRGl2KTtcblxuXHRcdFx0JChkZXNjcmlwdGlvbikuaHRtbChoZXJvLmRhdGEucmVzdWx0c1tpXS5kZXNjcmlwdGlvbik7XG5cdFx0XHQkKGRlc2NyaXB0aW9uKS5hZGRDbGFzcygnaGVyby1kZXNjcmlwdGlvbicpO1xuXHRcdFx0JChoZXJvSW5mb0RpdikuYXBwZW5kKGRlc2NyaXB0aW9uKTtcblx0XHRcdCQoaGVyb0RpdldyYXBwZXIpLmFwcGVuZChoZXJvSW5mb0Rpdik7XG5cblxuXHRcdFx0JChuYW1lKS5odG1sKGhlcm8uZGF0YS5yZXN1bHRzW2ldLm5hbWUpO1xuXHRcdFx0JChoZXJvSW5mb0RpdikuYXBwZW5kKG5hbWUpO1xuXHRcdFx0JChoZXJvRGl2KS5hcHBlbmQoaGVyb0luZm9EaXYpO1x0XG5cdFx0XHQkKCcucmVzdWx0cy1jb250YWluZXInKS5hcHBlbmQoaGVyb0Rpdik7XG5cblx0XHRcdGlmIChoZXJvLmRhdGEucmVzdWx0c1tpXS5ldmVudHMuaXRlbXNbMF0pIHtcblx0XHRcdFx0JChoZXJvRXZlbnRzKS5odG1sKGhlcm8uZGF0YS5yZXN1bHRzW2ldLmV2ZW50cy5pdGVtc1swXS5uYW1lKTtcblx0XHRcdFx0JChoZXJvRXZlbnRzKS5hZGRDbGFzcygnaGVyby1kZXNjcmlwdGlvbicpO1xuXHRcdFx0XHQkKGhlcm9JbmZvRGl2KS5hcHBlbmQoaGVyb0V2ZW50cyk7XG5cdFx0XHR9XG5cblxuXG5cdFx0XHRpZiAoaGVyby5kYXRhLnJlc3VsdHNbaV0uc2VyaWVzLml0ZW1zWzBdKSB7XG5cdFx0XHRcdCQoaGVyb1NlcmllcykuaHRtbChoZXJvLmRhdGEucmVzdWx0c1tpXS5zZXJpZXMuaXRlbXNbMF0ubmFtZSk7XG5cdFx0XHRcdCQoaGVyb1NlcmllcykuYWRkQ2xhc3MoJ2hlcm8tZGVzY3JpcHRpb24nKTtcblx0XHRcdFx0JChoZXJvSW5mb0RpdikuYXBwZW5kKGhlcm9TZXJpZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaGVyby5kYXRhLnJlc3VsdHNbaV0uc3Rvcmllcy5pdGVtc1swXSkge1xuXHRcdFx0XHQkKGhlcm9TdG9yaWVzKS5odG1sKGhlcm8uZGF0YS5yZXN1bHRzW2ldLnN0b3JpZXMuaXRlbXNbMF0ubmFtZSk7XG5cdFx0XHRcdCQoaGVyb1N0b3JpZXMpLmFkZENsYXNzKCdoZXJvLWRlc2NyaXB0aW9uJyk7XG5cdFx0XHRcdCQoaGVyb0luZm9EaXYpLmFwcGVuZChoZXJvU3Rvcmllcyk7XG5cdFx0XHR9XG5cblx0XHRcdFxuXG5cdFx0XHQkKGhlcm9EaXYpLm9uKCdjbGljaycsIGV4cGFuZEluZm9XaW5kb3cpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGV4cGFuZEluZm9XaW5kb3coZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dmFyIGhlcm9JbmZvID0gZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmNoaWxkcmVuO1xuXHRcdFx0JCgnLmhlcm8taW5mby1kaXYnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQkKG5hbWUpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JChoZXJvSW5mbykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblx0XHRcdFxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMoKXtcblx0XHR2YXIgdXJsID0gJ2h0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYy8nO1xuXHRcdHZhciBhcGlLZXkgPSAnMTQ2MmE3NTNjNzFlZTQ5NjViMzgyZmE3MWMzZWY4ZjUnO1xuXG5cdFx0JCgnLmJ1dHRvbi0xJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2YXIgb2Zmc2V0ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTsgaSsrKSB7XG5cdFx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdFx0dXJsOiB1cmwgKyAnY2hhcmFjdGVycz9hcGlrZXk9JyArIGFwaUtleSArICcmb2Zmc2V0PScgKyBvZmZzZXRcblx0XHRcdFx0fSlcblx0XHRcdFx0LmRvbmUocG9wdWxhdGUpO1xuXG5cdFx0XHRcdC8vIGlmICggaSA8IDc0ICkge1xuXHRcdFx0XHQvLyBcdG9mZnNldCs9MjA7XG5cdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdC8vIFx0b2Zmc2V0Kz00O1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRcblxuXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQoKXtcblx0XHRzZXR1cExpc3RlbmVycygpO1xuXHR9XG5cdHNoYXJlZC5pbml0ID0gaW5pdDtcblxuXHRyZXR1cm4gc2hhcmVkO1xufSgpKTtcblxuSGVyb0FwaS5pbml0KCk7Il19
