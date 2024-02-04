//enums

enum PrintMedia{
    NewsPaper,
    NewsLetter,
    Magazine,
    Book

}

function getMedia(mediaName:string):PrintMedia{
    if(mediaName === "forbes" || mediaName === "outlook"){
        return PrintMedia.Magazine;
    }
    return PrintMedia.Book;
}

let myMediaType:PrintMedia = getMedia("forbes")

console.log("my media is of type:",myMediaType);