/* Imported Jquery */

$("#arrowDown").on("click", function () {
    $('html, body').animate({
        scrollTop: $('main').offset().top
    }, 800)
})
