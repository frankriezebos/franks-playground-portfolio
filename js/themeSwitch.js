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
        makeItDark();
    });

    $('[data-trigger-theme="light"]').click(function() {
        makeItLight();
    });

    // detect system/browser theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        makeItDark();
    } else {
        makeItLight();
    }

    // detect change of system/browser theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? "dark" : "light";
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        const newColorScheme = e.matches ? "light" : "dark";
    });

    function makeItLight() {
        $('body').attr('data-theme', 'light');
        $('[data-trigger-theme="dark"]').removeClass('active');
        $('[data-trigger-theme="dark"]').addClass('dim');
        $('[data-trigger-theme="light"]').removeClass('dim');
        $('[data-trigger-theme="light"]').addClass('active');
    }

    function makeItDark() {
        $('body').attr('data-theme', 'dark');
        $('[data-trigger-theme="light"]').removeClass('active');
        $('[data-trigger-theme="light"]').addClass('dim');
        $('[data-trigger-theme="dark"]').removeClass('dim');
        $('[data-trigger-theme="dark"]').addClass('active');
    }
}