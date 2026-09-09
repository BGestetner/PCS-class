import $ from "./pcsTools.js";

const hideMe = $('#hide-me');
hideMe.click(hideMe.hide);

const surprise = $('#surprise');
surprise.click(surprise.hide);
const showMe = $('#show-me');
showMe.click(surprise.show);

const sparkle = $('#sparkle');
sparkle.click(sparkle.sparkle);


