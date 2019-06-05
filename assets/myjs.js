$(document).ready(function () {
   $('ul li').hover(function () {
       $(this).find('ul li').slideToggle(500);
   });

    $(".sidebar-social").click(function(){
        if($(this).hasClass('open')){
                    $(this).removeClass('open');
                    $('#switch-style').animate({'left':'-307px'});
                }else{
                    $(this).addClass('open');
                    $('#switch-style').animate({'left':'0'});
                }
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
       /*********Start of input password*********/
    $('#pass').keyup(function () {
        length = $('#pass').val().length;
        if (length ==0){
            $('#checker').removeClass('weak');
            $('#checker').removeClass('good');
            $('#checker').removeClass('strong');
            $('#checker').text('');
        }
        else if (length <=4){
            $('#checker').addClass('weak');
            $('#checker').removeClass('good');
            $('#checker').removeClass('strong');
            $('#checker').text('weak');
        }
        else if (length <=8){
            $('#checker').addClass('good');
            $('#checker').removeClass('weak');
            $('#checker').removeClass('strong');
            $('#checker').text('good');
        }
        else if (length <=12){
            $('#checker').addClass('strong');
            $('#checker').removeClass('weak');
            $('#checker').removeClass('good');
            $('#checker').text('strong');
        }
    });

});
