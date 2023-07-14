"use strict";
let username = [
    "Admin", "Latif", "Musa", "Aisha", "Ali"
];
for (let i = 0; i < username.length; i++) {
    if (username[i] === "Admin") {
        console.log("Greetings!! Admin, would you like to see a status report?");
    }
    else {
        console.log('Hello' + " " + username[i] + " " + 'thank you for logging in again.');
    }
}
;
if (username.length === 0) {
    console.log("We need to find some users!");
}
username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
username = [];
let current_users = [
    "Mark", "Ayesha", "Dua", "Aleezay", "Fatima"
];
let new_users = [
    "Aisha", "Ali", "Dane", "Warda"
];
for (let i = 0; i < username.length; i++) {
    const username01 = new_users[i];
    let isusernameinused = username.some(username => username.toLowerCase() === username01.toLowerCase());
    if (isusernameinused) {
        console.log(`The username '${username}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_users}' is available.`);
    }
}
