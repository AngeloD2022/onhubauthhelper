chrome.webRequest.onBeforeSendHeaders.addListener(function (details){
    for(var i = 0; i < details.requestHeaders.length; ++i){
        console.log(details.requestHeaders[i].name)
        if(details.requestHeaders[i].name === "User-Agent"){
            details.requestHeaders[i].value = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko)";
            break;
        }
    }
    return {requestHeaders: details.requestHeaders};
},{urls: ['https://accounts.google.com/embedded/setup/v2/safarivc?*']},
    [ 'blocking', 'requestHeaders'])
