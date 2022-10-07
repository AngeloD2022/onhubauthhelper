chrome.runtime.onMessage.addListener((msg) => {
    if (msg) {
        $.ajax({
            url: "https://accounts.google.com/o/oauth2/token",
            type: "POST",
            data: [
                'client_id=936475272427.apps.googleusercontent.com',
                `code=${msg}`,
                'grant_type=authorization_code',
                'redirect_uri=urn:ietf:wg:oauth:2.0:oob'
            ].join('&'),
            success: (response) => {
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
            error: () => {
                var notice = document.createElement("p");
                notice.style.color = "red";
                notice.innerHTML = "<strong>OnHubAuthHelper:</strong> An error occurred while exchanging the OAuth Code.";
                document.body.appendChild(notice);
            }
        });
    }
});

chrome.runtime.sendMessage("authcode", () => true);

function copyToClipboard(txt) {
    const x = document.createElement('textarea');
    x.value = txt;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);
}
