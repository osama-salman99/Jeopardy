function createGame() {
    let nickname = getNickname();
    if (!isValid(nickname)) {
        alert("Nickname is invalid");
        return;
    }
    // TODO: Create game
}

function joinGame() {
    let nickname = getNickname();
    if (!isValid(nickname)) {
        alert("Nickname is invalid");
        return;
    }
    // TODO: Show game id screen
}

function isValid(nickname) {
    return !(nickname === '' || nickname.length > 15);
}

function getNickname() {
    return document.getElementById("nickname_input").value;
}