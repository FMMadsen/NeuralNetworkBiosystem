


/*
var accessApiUrl = 'access';

var documentInputElementUsername = null,
    documentInputElementPassword = null;
*/

// Set eventhandlers when document is loaded
document.addEventListener('DOMContentLoaded', function () {

    initializeDocumentElements();
    initializeEventHandlers();

    setTimeout(CheckAppLoginStatus, 500);
});

function initializeDocumentElements() {

    /*
    documentButtonLogin = document.getElementById('login-button');
    documentButtonUpdateStatus = document.getElementById('check-access-token-status-button');

    documentInputElementUsername = document.getElementById('user-text-field');
    documentInputElementPassword = document.getElementById('password-text-field');
    */

}

function initializeEventHandlers() {

    /*
    if (documentButtonLogin != null) {
        documentButtonLogin.addEventListener("click", login_clicked);
    }

    if (documentButtonUpdateStatus != null) {
        documentButtonUpdateStatus.addEventListener("click", check_access_token_clicked);
    }
    */

}




/*
function login_clicked() {

    var username = documentInputElementUsername.value;
    var password = documentInputElementPassword.value;
    var getRequestUrl = authenticationApiUrl + '?username=' + username + '&password=' + password;

    fetch(getRequestUrl, { method: "GET" })
        .then((response) => response.json())
        .then(loginResponse);
}

function get_from_server() {

    var accessToken = currentSession.accessToken;
    var getRequestUrl = accessApiUrl + '?accesstoken=' + accessToken;

    fetch(getRequestUrl, { method: "GET" })
        .then((response) => response.json())
        .then(accessCheckResponse);
}
*/

