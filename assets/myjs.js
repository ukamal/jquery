$(document).ready(function () {
   $('ul li').hover(function () {
       $(this).find('ul li').slideToggle(500);
   });

    $(".sidebar-social").click(function(){
        $(this).animate({left: '-60px'});
    });

    $('#play').click(function () {
       $('#slider').cycle('resume');
    });
    $('#pause').click(function () {
       $('#slider').cycle('pause');
    });
    $('#slider').cycle({
        fx:     'all',
        speed: 500,
        next: '#next',
        prev: '#prev'
    });

});