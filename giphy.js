// ### INSTRUCTIONS ----

// 1. Before you can make any part of our site work, you need to create an array of strings, 
// each one related to a topic that interests you. Save it to a variable called `topics`.
// * We chose animals for our theme, but you can make a list to your own liking.

// 2. Your app should take the topics in this array and create buttons in your HTML.
// * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images 
// from the GIPHY API and place them on the page.

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user 
// clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on).
// * This data is provided by the GIPHY API.
// * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` 
// array. Then make a function call that takes each topic in the array remakes the buttons on the 
// page.

// ----------------- VARIABLES -------------------

var apiKey = "v7q7VC0AnloqRgI91sh83r1YKtesgNpo"
var queryURL = "http://api.giphy.com/v1/gifs/search" + "?q=" + "dolphins" + "&api_key=" + apiKey 
var topics = ["smirk", "grin", "frown", "pout", "resting-bitch-face", "glare", "bawling", "frustrated"]

// ----------------- FUNCTIONS -------------------



for (i = 0; i < topics.length; i++) {
    var topicsButton = $("<button>").html(topics[i])
    topicsButton.attr("id", topics[i])
    $("#buttons").append(topicsButton) 
}

$("#gif-search").on("click", function(){
    console.log("we got clicked!", $("#gif-input").val());
    var myNewButton = $("<button>").html($("#gif-input").val())
    myNewButton.attr("id", $("#gif-input").val())
    $("#buttons").append(myNewButton)
})

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) { 
      console.log(response);
      var dolphinIMG = $("<img>").attr("src", response.data[0].images.preview_gif.url)
      $("#gif-section").append(dolphinIMG)
  })

// new onclick for buttons
$(document).on('click', 'button', function(){
	console.log('yes !!', $(this).id)
})
