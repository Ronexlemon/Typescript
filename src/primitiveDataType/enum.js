"use strict";
//enums
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["NewsPaper"] = 0] = "NewsPaper";
    PrintMedia[PrintMedia["NewsLetter"] = 1] = "NewsLetter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === "forbes" || mediaName === "outlook") {
        return PrintMedia.Magazine;
    }
    return PrintMedia.Book;
}
let myMediaType = getMedia("forbes");
console.log("my media is of type:", myMediaType);
