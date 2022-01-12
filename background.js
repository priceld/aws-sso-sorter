chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'd-906766da4c.awsapps.com'},
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

