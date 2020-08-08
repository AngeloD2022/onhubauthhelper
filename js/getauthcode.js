chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === "authcode") {
        console.log("message received for code")
        chrome.cookies.get({url: "https://accounts.google.com/", name: "oauth_code"}, function (cookie) {
            console.log("code returned", cookie)
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, cookie.value, function (response) {
                })
            })
        });
    }
})
