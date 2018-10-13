var key = "1ae2d602-e0b0-4458-a2e7-86954a872f0e";
var queryURL = "http://version1.api.memegenerator.net//Generators_Search?q=" + query + "&pageIndex=0&pageSize=12&apiKey=" + key;
var query = "dog";

$ .ajax ( {
    url: queryURL ,
    method: "GET"
} ) .then ( function ( response ) {
    console.log(response);
});
