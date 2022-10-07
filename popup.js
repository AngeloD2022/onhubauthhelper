const FALLBACK_DEVICE_NAME = 'google-wifi'

const OAUTH2_CLIENT_ID = '936475272427.apps.googleusercontent.com';
const OAUTH2_SCOPE = 'https://www.google.com/accounts/OAuthLogin';

const OAUTH2_LOGIN_URL_BASE = 'https://accounts.google.com/o/oauth2/programmatic_auth';

document.addEventListener("DOMContentLoaded", function () {
	$("#openlogin").click(function () {
		$("#openlogin").prop("disabled", true);
		$("#openlogin").text("Loading...");

		openLoginUrl();
	});
});

function getLoginData() {
	return [
		`scope=${encodeURIComponent(OAUTH2_SCOPE)}`,
		`client_id=${OAUTH2_CLIENT_ID}`,
		`device_name=${FALLBACK_DEVICE_NAME}`
	].join('&');
}

function openLoginUrl() {
	chrome.tabs.create({ url: `${OAUTH2_LOGIN_URL_BASE}?${getLoginData()}` });
}
