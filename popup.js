const displayData = (bookmarks, bookmark) => {
  chrome.storage.local.get(/* String or Array */["phasersTo"], function(items){
      items = [ { "phasersTo": "awesome" } ]
  }); 
  items.forEach(function(line) {
    bookmarks.appendChild(line);
  });
};