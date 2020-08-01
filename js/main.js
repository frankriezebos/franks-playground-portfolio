import {
    pageTransitions
} from "./pageloader.js";
import {
    attractHover
} from "./attract.js";
import {
    settingsCollapse
} from "./settingsCollapse.js";

$(window).on('load', function () {
    pageTransitions();
});

$(document).ready(function () {
    attractHover();
    settingsCollapse();
});