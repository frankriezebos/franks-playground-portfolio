export function settingsCollapse() {
    $('.collapsable-wrapper').addClass('hidden');

    $('.settings-icon-wrap').click(function () {
        var dataTriggerSettingAttr = $(this).attr('data-trigger-setting');
        $('.collapsable-item').removeClass('visible');
        $('.collapsable-item[data-target-setting="' + dataTriggerSettingAttr + '"]').addClass('visible');

        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            $('.collapsable-wrapper').removeClass('popIn');
            $('.collapsable-wrapper').addClass('popOut');
        }

        else {
            $('.collapsable-wrapper').removeClass('popOut');
            $('.collapsable-wrapper').removeClass('hidden');
            $('.collapsable-wrapper').addClass('open');
            $('.collapsable-wrapper').addClass('popIn');
            $('.settings-icon-wrap').removeClass('clicked');
            $(this).addClass('clicked');
        }
    });
}