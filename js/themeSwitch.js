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
}

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

export function colorSwitch() {
    $('[data-trigger-color]').click(function() {
        var clickedColor = $(this).attr('data-trigger-color');
        $('body').attr('data-color', clickedColor);
        $('[data-trigger-color]').removeClass('active');
        $('[data-trigger-color]').removeClass('tempActive');
        $('[data-trigger-color]').addClass('dim');
        $(this).removeClass('dim');
        $(this).addClass('active');
    });
}

export function vibeSwitch() {
    $('[data-trigger-vibe]').click(function() {
        var clickedVibe = $(this).attr('data-trigger-vibe');
        $('body').attr('data-vibe', clickedVibe);
        $('[data-trigger-vibe]').removeClass('active');
        $('[data-trigger-vibe]').removeClass('tempActive');
        $('[data-trigger-vibe]').addClass('dim');
        $(this).removeClass('dim');
        $(this).addClass('active');

        if ( clickedVibe == 'ocean' ) {
            $('.vibe-indicator').html('Ocean');
            makeItLight();
        } else if ( clickedVibe == 'beach' ) {
            $('.vibe-indicator').html('Beach');
            makeItLight();
        } else if ( clickedVibe == 'space' ) {
            $('.vibe-indicator').html('Space');
            makeItDark();
        } else if ( clickedVibe == 'forest' ) {
            $('.vibe-indicator').html('Forest');
            makeItLight();
        } else if ( clickedVibe == 'mountains' ) {
            $('.vibe-indicator').html('Mountains');
            makeItLight();
        }
    });
}
