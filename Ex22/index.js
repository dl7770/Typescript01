"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    return album;
}
console.log(make_album("Artist 1", "Album 1", 1));
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 12));
console.log(make_album("Artist 3", "Album 3", 8));
