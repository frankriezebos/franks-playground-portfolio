$(window).on('load', function(){
    $('.page-wrapper').addClass('animateIn');
});

$(document).ready(function(){
    $('.settings-icon-wrap').click(function(){
        $('.collapsable').addClass('open');
    });

    $('.icon-wrap').click(function(){
        $('.icon-wrap').removeClass('clicked');
        $(this).addClass('clicked');
    });

    $('.icon-wrap.clicked').click(function(){
        $(this).removeClass('clicked');
        $('.collapsable').removeClass('open');
    });
});