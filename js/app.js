$(document).ready(function() {

    //Smooth Scrolling Menu
    (function() {

        var menu = $('.nav.navbar-nav');
        var links = menu.find('a');


        links.on('click', function(e) {
            var target = $($(this).attr('href'));

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 2000);
            }
        });
    })();
});
