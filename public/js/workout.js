var api = 'https://api.giphy.com/v1/gifs/search';
var APIKEY = '&api_key=BI9JqRvTW6DHJ4dCFrOlrwyJuxsN48yS';
var query = "&q=" + {exercise}; // how can i prefill this with the exercise

function getWorkoutImage () {
    let requestUrl = api + APIKEY + query;
    console.log(requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.getElementById().innerHTML = '<img src = ' + data['data'][0]['images']['downsized']['url'] + '>';
      });
}

getWorkoutImage()

console.log(getWorkoutImage)