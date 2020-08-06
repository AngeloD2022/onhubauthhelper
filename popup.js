document.addEventListener("DOMContentLoaded",function (){
    $("#authadvicebtn").click(function () {
        chrome.tabs.create({url:"https://accounts.google.com/embedded/setup/v2/safarivc?as=_t6Nn42CYVqJvJTUCe134g&scope=https://www.google.com/accounts/OAuthLogin+https://www.googleapis.com/auth/userinfo.email&client_id=936475272427.apps.googleusercontent.com&redirect_uri=com.google.sso.586698244315-vc96jg3mn4nap78iir799fc2ll3rk18s:/authCallback?login%3Dcode&sarp=1&delegated_client_id=586698244315-vc96jg3mn4nap78iir799fc2ll3rk18s.apps.googleusercontent.com&hl=en-US&device_name=testdevice&auth_extension=ADa53XKbtVGk5LuZCFGnGi77i_hdEwobhLHqRkdvUzg4P0fTFHDbH8mZN_JERmJudK_ufpb6UAUyQpiXdMNI2Z4htISGyFE4XrsuoPQhcfGt1ZgIBbb7zh0&system_version=13.4&app_version=2.16.1&kdlc=1&lib_ver=3.3&wv_mode=1"})
        // console.log("sooasfd")
    });

})
