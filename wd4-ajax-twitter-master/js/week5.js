

var findRegex = (function(){

    var shared = {}

    function url(data){
        var urlRegex = /((http|ftp|https)?:\/\/\S+)/g;
        var firstRegex = data.replace(urlRegex,"<a href='$1' style='color:green'>$1</a>");

        return firstRegex

    }

    function at(data){
        var atRegex = /(^|\W)(@[a-z\d][\w-]*)/ig;
        var secondRegex = data.replace(atRegex, "<a  href='$2' style='color:blue;'>$2</a>");

        return secondRegex
    }

    function hash(data){
        var hashRegex = /(^|\W)(#[a-z\d][\w-]*)/ig;
        var thirdRegex = data.replace(hashRegex, "<a  href='$3' style='color:yellow;'>$3</a>")

        return thirdRegex
    }

        shared = {
            url: url,
            at: at,
            hash: hash
        }

        return shared
})();


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

            	 // $(tweetText).html(findRegex(results[i].text));

            	 $('.results-container').append(tweetText);
            };
    }

     function processSearchTweets(result) {
        var results = JSON.parse(result).statuses;

        for (var i = 0; i < results.length; i++) {
            results[i]
            var timelineResult = document.createElement('p');
            var a = findRegex.hash(results[i].text);
            var b = findRegex.at(a);
            var c = findRegex.url(b);
            $(timelineResult).html(c) ;
            $('.results-container').append(timelineResult);

            if (results[i].geo) {
                var geoData = {
                    lat: results[i].geo.coordinates[0],
                    lng: results[i].geo.coordinates[1]
                } 
                GoogleModule.createMarker(c, geoData)
                console.log(geoData);
            } else{ console.log('none');

            }
        };
    };

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


TwitterApi.init();


var GoogleModule = (function(){
    var shared = {};

    function createMarker(tweet, geoData){

        var infowindow = new google.maps.InfoWindow({
          content: tweet
        });

        var marker= new google.maps.Marker({
          position: geoData,
          map: map
        });

        marker.addListener('click', function(){
          infowindow.open(map, marker);
        });


    }

    function init() {
       
        var ccLatLng = {lat:33.813245, lng:-84.362171};
        map = new google.maps.Map(document.getElementById('map'), {
          center: ccLatLng,
          zoom: 8
        });

          createMarker("marker", ccLatLng);
    };

    shared = {
        init: init,
        createMarker: createMarker
    };

    return shared



}());

        
 













