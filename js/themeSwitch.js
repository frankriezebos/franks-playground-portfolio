export function themeSwitch() {
    var currentTheme = $('body').attr('data-theme');
    var currentColor = $('body').attr('data-color');
    var currentSound = $('body').attr('data-sound');
    var currentVibe = $('body').attr('data-vibe');

    console.log('current theme:',currentTheme);
    console.log('current color:',currentColor);
    console.log('current volume:',currentSound);
    console.log('current vibe:',currentVibe);

    if ( $('body[data-theme="light"]') ) {
        $('.light-icon').addClass('active');
    }

    $('.collapsable-item li').hover(function() {
        if ( !$(this).hasClass('active') ) {
            $('.collapsable-item li').toggleClass('dim');
            $(this).toggleClass('tempActive');
        }
    });

    $('[data-trigger-theme="dark"]').click(function() {
        console.log('oke maak het donker!');
        $('body').attr('data-theme', 'dark');
        $('[data-trigger-theme="light"]').removeClass('active');
        $(this).removeClass('dim');
        $(this).addClass('active');
    });

    $('[data-trigger-theme="light"]').click(function() {
        console.log('oke maak het licht!');
        $('body').attr('data-theme', 'light');
        $('[data-trigger-theme="dark"]').removeClass('active');
        $(this).removeClass('dim');
        $(this).addClass('active');
    });
}