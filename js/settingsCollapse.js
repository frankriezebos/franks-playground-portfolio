export function settingsCollapse() {
    $('.collapsable-wrapper').addClass('hidden');

    $('.settings-icon-wrap').click(function () {
        var dataTriggerSettingAttr = $(this).attr('data-trigger-setting');
        $('.collapsable-item').removeClass('visible');
        $('.collapsable-item[data-target-setting="' + dataTriggerSettingAttr + '"]').addClass('visible');

        // when you click on the sound icon, it will switch to mute
        if ( dataTriggerSettingAttr == 'sound' ) {
            console.log('sound');
            $('.icon-sound').toggleClass('muted');
            $('.collapsable-wrapper').removeClass('popIn');
            $('.collapsable-wrapper').addClass('popOut');

            if ( $('.icon-sound').hasClass('muted') ) {
                $('.sound-indicator').html('off');
            } else {
                $('.sound-indicator').html('on');
            }
        }

        // close the collapsable wrapper with the options
        else if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            $('.collapsable-wrapper').removeClass('popIn');
            $('.collapsable-wrapper').addClass('popOut');
        }

        // open the collapsable wrapper with the options
        else {
            $('.collapsable-wrapper').removeClass('popOut');
            $('.collapsable-wrapper').removeClass('hidden');
            $('.collapsable-wrapper').addClass('open');
            $('.collapsable-wrapper').addClass('popIn');
            $('.settings-icon-wrap').removeClass('clicked');
            $(this).addClass('clicked');

            if ( dataTriggerSettingAttr == 'theme' ) {
                $('.arrow-up').css('left', '40px');
            }

            if ( dataTriggerSettingAttr == 'color' ) {
                $('.arrow-up').css('left', '295px');
            }

            if ( dataTriggerSettingAttr == 'vibe' ) {
                $('.arrow-up').css('left', '415px');
            }
        }
    });
}