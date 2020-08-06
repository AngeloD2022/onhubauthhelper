
var port = chrome.extension.connect
let authcode = cookie.value;
$.ajax({
    url: "https://www.googleapis.com/oauth2/v4/token",
    type: "POST",
    data: `client_id=936475272427.apps.googleusercontent.com&code=${authcode}&grant_type=authorization_code&scope=https%3A%2F%2Fwww.google.com%2Faccounts%2FOAuthLogin`
}).done(function (response) {
    var label = document.createElement("p");
    $(label).css("color", "green");
    $(label).html("<strong>Success!</strong>");
    $.append(label);
    var copy = document.createElement('button');
    $(copy).text("Copy refresh_token");
    $(copy).click(function () {
        copyToClipboard(response["refresh_token"])
    });
    $("#step2").append(b);

});

console.log(cookies);


function copyToClipboard(txt) {
    const x = document.createElement('textarea');
    x.value = txt;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);
}
