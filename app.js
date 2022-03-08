var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("The error occured: " + error);
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    var userInput = txtInput.value;
    var url = getTranslationURL(userInput);
    fetch(url)
    .then(res => res.json())
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandler)
}); 