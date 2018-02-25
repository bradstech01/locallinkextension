var CURRENT_TAB        = 'current_tab';
var NEW_FOREGROUND_TAB = 'new_foreground_tab';
var NEW_BACKGROUND_TAB = 'new_background_tab';

chrome.runtime.onMessage.addListener(function(request) {
  openIn(request.target_tab)(request.url);
});

function openIn(target_tab)
{
  switch(target_tab)
  {
    case CURRENT_TAB:        return openLinkInCurrentTab;
    case NEW_FOREGROUND_TAB: return openLinkInNewForegroundTab;
    case NEW_BACKGROUND_TAB: return openLinkInNewBackgroundTab;
  }
}

function openLinkInCurrentTab(url)
{
  chrome.tabs.query({active: true}, function(selected_tabs) {
    selected_tabs.forEach(function(tab){
      chrome.tabs.update(tab.id, {url: url});
    });
  });
}

function openLinkInNewForegroundTab(url)
{
  chrome.tabs.query({active: true}, function(selected_tabs) {
    selected_tabs.forEach(function(tab){
      chrome.tabs.create(
        _propertiesForNewTab(url, tab, {active: true})
      );
    });
  });
}

function openLinkInNewBackgroundTab(url)
{
  chrome.tabs.query({active: true}, function(selected_tabs) {
    selected_tabs.forEach(function(tab){
      chrome.tabs.create(
        _propertiesForNewTab(url, tab, {active: false})
      );
    });
  });
}

function _propertiesForNewTab(
  url,
  base_tab,
  overriding_properties // optional
)
{
  if (typeof overriding_properties === 'undefined')
  {
    overriding_properties = {};
  }

  // I want to emulate native Chrome behavior.
  // So I will open new tab adjacent to base.
  return $.extend(true, // deep copy
  {
    windowId: base_tab.windowId,
    index:    base_tab.index + 1,
    url:      url,
  }, overriding_properties);
}
