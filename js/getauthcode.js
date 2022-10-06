const OAUTH2_LOGIN_URL_BASE = 'https://accounts.google.com/o/oauth2/programmatic_auth';
const COOKIE_NAME = 'oauth_code';

chrome.runtime.onMessage.addListener(function (message) {
    if (message === "authcode") {
        console.log("message received for code")
        chrome.cookies.get({ url: OAUTH2_LOGIN_URL_BASE, name: COOKIE_NAME }, function (cookie) {
            console.log("cookie returned", cookie)
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, cookie.value, () => true);
            })
        });
    }
})
