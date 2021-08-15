let btnTranslate = document.querySelector("#btn-translate")
let txtInput=document.querySelector("#txt-input")
let outputDiv =document.querySelector("#output")
let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function getTranslationURL(input)
{
    return serverURL + "?"+ "text" + input;
}
function errorHandler (error){
    console.log("error occured", error)
    alert("something wrong with server")
}
function clickHandler()
{
let inputText = txtInput.value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => console.log(json.contents.translated))
.catch(errorHandler)
}

