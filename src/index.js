window.history.pushState({
    "html": document.getElementById("content").innerHTML,
    "pageTitle": document.title
}, "", document.URL);

window.onpopstate = function (ev) {
    if (ev.state) {
        document.getElementById("content").innerHTML = ev.state.html;
        document.title = ev.state.pageTitle;
    }
};

function createGame() {
    let nickname = getNickname();
    if (!isValid(nickname)) {
        alert("Nickname is invalid");
        return;
    }

    getRequest('create_game.html');
}

function joinGame() {
    let nickname = getNickname();
    if (!isValid(nickname)) {
        alert("Nickname is invalid");
        return;
    }
    // TODO: Show game id screen
    getRequest('join_game.html')
}

function isValid(nickname) {
    return !(nickname === '' || nickname.length > 15);
}

function getNickname() {
    return document.getElementById("nickname_input").value;
}

function goTo(response, urlPath) {
    document.title = response.pageTitle;
    document.getElementById("content").innerHTML = response;
    window.history.pushState({
        "html": response
    }, "", urlPath);
}

function getRequest(urlPath) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            goTo(httpRequest.responseText, urlPath)
        }
    }
    httpRequest.open("GET", urlPath);
    httpRequest.send();
}
