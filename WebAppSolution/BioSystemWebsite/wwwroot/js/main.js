


/*
var accessApiUrl = 'access';

var documentInputElementUsername = null,
    documentInputElementPassword = null;
*/

var canvasElement, ctx, canvasHeight, canvasWidth;

// Set eventhandlers when document is loaded
document.addEventListener('DOMContentLoaded', function () {

    initializeDocumentElements();
    initializeEventHandlers();

    PaintInitialCanvas();

    // StartGame();

    // setTimeout(CheckAppLoginStatus, 500);
});

function initializeDocumentElements() {
    canvasElement = document.getElementById("main-canvas");
    canvasWidth = canvasElement.width;
    canvasHeight = canvasElement.height;

    if (canvasElement == null) {
        //Do something error handling if the canvas html was not found
    }

    if (!canvasElement.getContext) {
        //Error handling
    }

    ctx = canvasElement.getContext("2d");




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

function PaintInitialCanvas() {

    //ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}


function StartGame() {
    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
    draw();
    window.requestAnimationFrame(gameLoop);
}

function draw() {
    let randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';
    ctx.fillStyle = randomColor;
    ctx.fillRect(50, 50, 100, 100);
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

