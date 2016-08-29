var artist = document.getElementById('player-artist');
artist = artist ? artist.textContent : '';

var title = document.getElementById('currently-playing-title');
title = title ? title.textContent : '';

var album = document.getElementsByClassName('player-album')[0];
album = album ? album.textContent : '';

var data = {
  'artist': artist,
  'title': title,
  'album': album
};

chrome.runtime.connect().postMessage(data);
