var TwitterApi = (function(options) {
    var shared = {};
    var options = options || {};
    var resultsContainer = $('.results-container');

    function setupListeners() {

        console.log('setupListeners()');

        // var $results = JSON.parse(results);
        // console.log($results);

        $('.timeline-button').on('click', function(e) {
            e.preventDefault();
            removeTweets();

			$.ajax('twitter-proxy.php?op=user_timeline&screen_name=' + $('.screen-name-input').val())
            .done(processTweetResults)

        });

        $('.quick-search').on('click', function(e) {
            e.preventDefault();
            removeTweets();
            $.ajax('twitter-proxy.php?op=search_tweets&q=' + $('.input-search').val())
            .done(processSearchTweets);

        });

        $('.custom').click('submit', function(e) {

            e.preventDefault();
            removeTweets();

             $.ajax('twitter-proxy.php?op=search_tweets&q=' + $('.query').val() + '&count=' + $('.limit').val() + '&result_type=' + $('.result').val())
    
            .done(processSearchTweets);
        });
    }

    function processTweetResults(result) {
        var results = JSON.parse(result);
        // console.log(results);
        // console.log(results.length);

        for (var i = 0; i < results.length; i++) {

            	 var tweetText = document.createElement('p');

            	 $(tweetText).html(findRegex(results[i].text));

            	 $('.results-container').append(tweetText);
            };
    }

     function processSearchTweets(result) {
        var results = JSON.parse(result).statuses;
        // console.log(result);

        for (var i = 0; i < results.length; i++) {
            results[i]
            var timelineResult = document.createElement('p');
            $(timelineResult).html(findRegex(results[i].text));
            $('.results-container').append(timelineResult);
        }

    }

    function removeTweets(){
    	for (var i = 0; i<$('p').length; i++) {
    		$('p').remove();
    	}
    }

   

    var init = function() {
        // console.log('init()');
        setupListeners();
        // $.ajax('twitter-proxy.php?op=search_tweets&q=france')
        // .done(processTweetResults)
    };
    shared.init = init;

    return shared;
}());

function findRegex(data) {
        var urlRegex = /((http|ftp|https)?:\/\/\S+)/g;
        var atRegex = /(^|\W)(@[a-z\d][\w-]*)/ig;
        var hashRegex = /(^|\W)(#[a-z\d][\w-]*)/ig;
        var firstRegex = data.replace(urlRegex,"<a href='$1' style='color:green'>$1</a>");
        var secondRegex = firstRegex.replace(atRegex, "<a  href='$2' style='color:blue;'>$2</a>");
        console.log(secondRegex);
        return secondRegex
    }

TwitterApi.init();

















