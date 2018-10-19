//Global vars
var generatorID
var imageID
var imageURL
var memefied
var captionURL

//STEP 1: Finad a meme
var search = function() {
    $( "#search-results" ).empty();
    var queryURL = "https://api.imgflip.com/get_memes"; 
    $ .ajax ({
        url: queryURL ,
        method: "GET"
    }) .then ( function ( response ) {
        console.log( response );
        for ( let i = 0 ; response.data.memes.length ; i++ ) {
            let meme = $( "<img>" ).attr( "src", response.data.memes[ i ].url );
            meme.attr( "data-id", response.data.memes[ i ].id);
            meme.addClass("img-fluid")
            meme.addClass("meme-img") 
            $( "#search-results" ).append( meme )
        };
    });
};

search(); //meme templates are pulled on page load

$( document ).on( "click", ".meme-img", function () {
    $("#final-img").empty();
    imageID = $(this).attr( "data-id" )
    console.log( 'image ID ====>', imageID )
    imageURL = $(this).attr( "src" )
    console.log( 'image URL ====>', imageURL )
    memefied = $( "<img>" ).attr( "src", imageURL )
    memefied.addClass( "img-fluid" )
    memefied.attr( "id", "meme-final" ) 
    memefied.attr( "data-id", imageID ) ;
    $( "#final-img" ).append( memefied )
});


//STEP 2: Add some TOP and BOTTOM text
$( document ).on( "click", "#push-btn", function () {
    let topText = $("#top-box").val().trim()
    console.log ("TOP ===>", topText)
    let botText = $("#bot-box").val().trim()
    console.log ("BOTTOM ===>", botText)

    captionUrl = `https://api.imgflip.com/caption_image` 
    $ .ajax ({
        url: captionURL ,
        method: "POST" ,
        data: { 
            template_id: imageID, 
            username: "jonabar",
            password: "gatoPerr0caballoconejo",
            text0: topText,
            text1: botText,
        }

    }) .then ( function ( response ) {
        console.log(response)
        // memefied.attr( "src", response.result.instanceImageUrl )
    })
})