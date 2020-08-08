document.addEventListener("DOMContentLoaded", function () {
    $("#authadvicebtn").click(function (){
        synthesizeDataAndRequest();
    })

})

// from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// from https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
function randomString(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}


function synthesizeDataAndRequest() {
    $("#authadvicebtn").prop("disabled",true);
    $("#authadvicebtn").text("Loading...");
    var devname = $("#devname").val();
    $("#step2").show();

    // Generate fake device ID
    let uuid = uuidv4().toUpperCase();

    // Random.org 76 bytes for b64 devicechallenge
    var devicechallenge = "";
    var clientstate = randomString(20) + "_" + randomString(36);
    $.ajax({
        url: "https://www.random.org/cgi-bin/randbyte?nbytes=76&format=h",
        type: 'GET'
    }).done(function (response) {
        devicechallenge = btoa(response.replace(/\s/g, "")).replace(/\+/g, "-");
        doAuthAdvice(devname, uuid, devicechallenge, clientstate)

    })

}


function doAuthAdvice(devname, uuid, devicechallenge, clientstate) {
    $.ajax(
        {
            type: "POST",
            url: "https://oauthaccountmanager.googleapis.com/v1/authadvice",
            dataType: "json",
            data:
                {
                    "external_browser": "true",
                    "report_user_id": "true",
                    "system_version": "13.4",
                    "app_version": "2.16.1",
                    "user_id": [],
                    "safari_authentication_session": "true",
                    "supported_service": [],
                    "request_trigger": "ADD_ACCOUNT",
                    "lib_ver": "3.3",
                    "package_name": "com.google.OnHub",
                    "redirect_uri": "com.google.sso.586698244315-vc96jg3mn4nap78iir799fc2ll3rk18s:/authCallback",
                    "device_name": devname,
                    "client_id": "586698244315-vc96jg3mn4nap78iir799fc2ll3rk18s.apps.googleusercontent.com",
                    "mediator_client_id": "936475272427.apps.googleusercontent.com",
                    "device_id": uuid,
                    "hl": "en-US",
                    "device_challenge_request": devicechallenge,
                    "client_state": clientstate
                },


        }
    ).done(function (response) {
        // Open Chrome Tab
        chrome.tabs.create({url: response["uri"]});
    });

}
