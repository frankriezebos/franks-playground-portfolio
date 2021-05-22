import {
    pageTransitions
} from "./pageloader.js";
import {
    attractHover
} from "./attract.js";
import {
    settingsCollapse
} from "./settingsCollapse.js";
import {
    followMouse
} from "./followMouse.js";
import {
    themeSwitch,
    colorSwitch
} from "./themeSwitch.js";

$(window).on('load', function () {
    pageTransitions();
});

$(document).ready(function () {
    attractHover();
    settingsCollapse();
    followMouse();
    themeSwitch();
    colorSwitch();
});