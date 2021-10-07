// Manage Local Storage

function addToLocalStorage() {
    var userInput = document.getElementById("userInput").value

    if (userInput != "") {

        console.log("adding " + userInput + " to Local Storage")

        // get current local storage or empty string if not defined
        var cLocalStorage = localStorage.getItem("localStorageKey123") || ""

        // reset local storage object with appended userInput and newline
        var newLocalStorage = cLocalStorage + userInput + "\n"
        localStorage.setItem("localStorageKey123", newLocalStorage)

        updateChatArea()

    } else {
        console.warn("no user input entered")
        alert("No User Input to add to localStorage")
    }

}

function clearLocalStorage() {
    console.log("clearing local storage...")
    localStorage.clear()
    updateChatArea()
}

// Manage Session Storage

function addToSessionStorage() {
    var userInput = document.getElementById("userInput").value

    if (userInput != "") {
        console.log("adding " + userInput + " to Session Storage")

        // get current session storage or empty string if not defined
        var cSessionStorage = sessionStorage.getItem("sessionStorageKey123") || ""

        // reset session storage object with appended userInput and newline
        var newSessionStorage = cSessionStorage + userInput + "\n"
        sessionStorage.setItem("sessionStorageKey123", newSessionStorage)

        updateChatArea()
    } else {
        console.warn("no user input entered")
        alert("No User Input to add to sessionStorage")
    }

}

function clearSessionStorage() {
    console.log("clearing session storage...")
    sessionStorage.clear()
    updateChatArea()
}


// Common

function updateChatArea() {
    console.log("updating chat area...")
    document.getElementById("localStorageContent").innerHTML = localStorage.getItem("localStorageKey123");
    document.getElementById("sessionStorageContent").innerHTML = sessionStorage.getItem("sessionStorageKey123");
}


// On Start, Check to See if Client's Browser supports Web Storage
if (typeof (Storage) !== "undefined") {
    console.log("browser supports local web storage")
    updateChatArea()
} else {
    alert("Your browser does not support local web storage!")
    console.error("browser does not support local web storage!")
}

