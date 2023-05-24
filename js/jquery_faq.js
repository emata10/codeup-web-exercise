$(document).ready(function() {
    $("#toggle-link").click(function() {
        $("dd").toggleClass("invisible");
        return false;
    });
    $("dt").click(function() {
        $(this).toggleClass("highlight");
    });
    $("li").click(function() {
        $(this).parent().find("li:first-child").css("color", "blue");
    });
    $("button").click(function() {
        $("ul").each(function() {
            $(this).find("li:last-child").css("background-color", "yellow");
        });
    });
});




$(document).ready(function() {
    $('.button').click(function() {
        var currentFrame = $(this).parent();
        var currentIndex = $('.frame').index(currentFrame);
        var newIndex;
        if (currentIndex == 0) {
            newIndex = 1;
        } else if (currentIndex == 1) {
            newIndex = Math.round(Math.random()) == 0 ? 0 : 2;
        } else if (currentIndex == 2) {
            newIndex = 1;
        }

        var newFrame = $('.frame').eq(newIndex);
        var currentImage = currentFrame.css('background-image');
        var newImage = newFrame.css('background-image');

        currentFrame.css('background-image', newImage);
        newFrame.css('background-image', currentImage);
    });
});
