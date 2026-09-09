import $ from "./pcsTools.js";

const hideMe = $('#hide-me');
hideMe.click(hideMe.hide);

const surprise = $('#surprise');
surprise.click(surprise.hide);
const showMe = $('#show-me');
showMe.click(surprise.show);

const sparkle = $('#sparkle');
// const sparkler = sparkle.sparkle.bind(0, 10, 1000);
sparkle.click(function () { sparkle.sparkle(100, 1000); });

const textChange = $('#text-change');
let timesChanged = 0;
// const textChanger = textChange.text.bind(0,`My text was changed ${++timesChanged} times` );
textChange.click(function () { textChange.text(`My text was changed ${++timesChanged} times`); });

const addClass = $('#add-class');
addClass.click(function () {
        addClass.addClass('new-class');
    }
);