function formatString(str) {
  str = str.replace(/ /g, '-');
  str = str.replace(/'/g, '');
  return str;
}

function openLyrics(/*String*/ artist, /*String*/ track) {
  artist = formatString(artist);
  track = formatString(track);

  let url = `https://www.musixmatch.com/lyrics/${artist}/${track}`;

  chrome.tabs.create({ url: url });
}

function checkForGoogleMusicUrl(tabId, _, tab) {
  if (tab.url.indexOf('play.google.com/music/listen') > -1) {
    chrome.pageAction.show(tabId);
  }
}

chrome.tabs.onUpdated.addListener(checkForGoogleMusicUrl);

chrome.runtime.onConnect.addListener((port) => {

  port.onMessage.addListener((data) => {
    if(data.title && data.artist) {
      openLyrics(data.artist, data.title);
    }
  });
});

// Called when the user clicks on the page action icon.
chrome.pageAction.onClicked.addListener((_) => {
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});