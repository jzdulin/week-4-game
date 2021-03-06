//creates a random number between 1 and 100 to be the target number
var targetNumber = 1 + Math.floor(Math.random() * 100);

//puts the target image on the html page
$("number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;
var wins = 0;
var losses = 0;

//reset function to restart the game after the user wins or loses
var reset = function() {
    counter = 0;
    targetNumber = 1 + Math.floor(Math.random() * 100);
    option1 = 1 + Math.floor(Math.random() * 10);
    option2 = 1 + Math.floor(Math.random() * 10);
    option3 = 1 + Math.floor(Math.random() * 10);
    option4 = 1 + Math.floor(Math.random() * 10);
    $("#number-to-guess").text(targetNumber);
    imageCrystalGreen.attr("data-crystalvalue", option1)
    imageCrystalYellow.attr("data-crystalvalue", option2)
    imageCrystalRed.attr("data-crystalvalue", option3)
    imageCrystalOrange.attr("data-crystalvalue", option4)
};

//creates a random number between 1 and 10 for each crystal
var option1 = 1 + Math.floor(Math.random() * 10);
var option2 = 1 + Math.floor(Math.random() * 10);
var option3 = 1 + Math.floor(Math.random() * 10);
var option4 = 1 + Math.floor(Math.random() * 10);

//creates an imagecystal for each color
var imageCrystalGreen = $("<img>");
var imageCrystalYellow = $("<img>");
var imageCrystalRed = $("<img>");
var imageCrystalOrange = $("<img>");

//Adds a class to edit images using css
imageCrystalGreen.addClass("crystal-image");
imageCrystalYellow.addClass("crystal-image");
imageCrystalRed.addClass("crystal-image");
imageCrystalOrange.addClass("crystal-image");

//gives each imagecrystal a link to the desired crystal image
imageCrystalGreen.attr("src", "assets/images/green.jpeg");
imageCrystalYellow.attr("src", "assets/images/yellow.jpeg");
imageCrystalRed.attr("src", "assets/images/red.jpeg");
imageCrystalOrange.attr("src", "assets/images/orange.jpeg");

//gives each imagecrystal a data attribute called data-crystalvalue
//each has a random number between 1 and 10 set to it that we created earlier
imageCrystalGreen.attr("data-crystalvalue", option1)
imageCrystalYellow.attr("data-crystalvalue", option2)
imageCrystalRed.attr("data-crystalvalue", option3)
imageCrystalOrange.attr("data-crystalvalue", option4)

crystals.append(imageCrystalGreen, imageCrystalYellow, imageCrystalRed, imageCrystalOrange);

//makes it so the user can click on the crystals
crystals.on("click", ".crystal-image", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    if (counter === targetNumber) {
        wins++;
        reset();
    }

    else if (counter >= targetNumber) {
        losses++;
        reset();
    }
    //puts wins, losses, and counter into the html document
    $("#wins").html("<h2>Wins:" + wins + "</h2>");
    $("#losses").html("<h2>Losses:" + losses + "</h2>");
    $("#userscore").html("<h2 class='score'>Your Score:" + counter + "</h2>");
});

// var html = 
//     "<p>Wins: " + wins + "</p>" +
//     "<p>Losses: " + losses + "</p>" +
//     "<h3>Your Score: " + counter + "</h3>";

// document.querySelector("#game").innerHTML = html;