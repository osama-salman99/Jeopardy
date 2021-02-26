function createGame() {
    let nickname = getNickname();
    if (!isValid(nickname)) {
        alert("Nickname is invalid");
        return;
    }
}

function joinGame() {
    let nickname = getNickname();
    if (!isValid(nickname)) {
        alert("Nickname is invalid");
        return;
    }
}

function isValid(nickname) {
    return !(nickname === '' || nickname.length > 15);
}

function getNickname() {
    return document.getElementById("nickname_input").value;
}