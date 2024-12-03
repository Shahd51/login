
const users = {};

function register(username, password) {
    if (users[username]) {
        return ;
    }

    users[username] = { password };
    return ;
}

function login(username, password) {
    if (!users[username]) {
        return ;
    }

    if (password !== users[username].password) {
        return ;
    }
    return ;
}