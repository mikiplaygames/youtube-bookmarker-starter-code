chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("instagram.com")) {
    chrome.storage.local.get(/* String or Array */["phasersTo"], function(items){
      //  items = [ { "phasersTo": "awesome" } ]
    });    
    items.append(tab.url);
    chrome.storage.local.set({ "phasersTo": items }, function(){
      //  Data's been saved boys and girls, go on home
    });
  }
});