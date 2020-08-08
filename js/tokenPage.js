
chrome.runtime.sendMessage("authcode", function (response) {});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    $.ajax({
        url: "https://www.googleapis.com/oauth2/v4/token",
        type: "POST",
        data: `client_id=936475272427.apps.googleusercontent.com&code=${msg}&grant_type=authorization_code&scope=https%3A%2F%2Fwww.google.com%2Faccounts%2FOAuthLogin`,
        success: function (response) {

            var label = document.createElement("h1");
            label.style.color = "green";
            label.innerHTML = "<strong>Success!</strong>"
            document.body.appendChild(label);

            var label2 = document.createElement("p");
            label2.innerText = "Your refresh token is: " + response["refresh_token"];
            document.body.appendChild(label2);

            var copy = document.createElement('button');
            copy.innerText = "Copy to Clipboard";
            copy.addEventListener("click", function () {
                copyToClipboard(response["refresh_token"])
            });
            document.body.appendChild(copy);

            var notice = document.createElement("p");
            notice.innerHTML = "<strong>The refresh token will last a long time. You do not have to do this again unless you need another!</strong>";
            document.body.appendChild(notice);
        },
        error: function(request,status,errror){
            var notice = document.createElement("p");
            notice.style.color = "red";
            notice.innerHTML = "<strong>OnHubAuthHelper:</strong> An error occurred while exchanging the OAuth Code.";
            document.body.appendChild(notice);
        }
    });

});


function copyToClipboard(txt) {
    const x = document.createElement('textarea');
    x.value = txt;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);
}
