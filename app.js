
var submitButton= document.getElementById("submit-btn");
var textInput=document.getElementById("translate-input");


var out =document.getElementById("out");

var serverURL="https://api.funtranslations.com/translate/minion.json";

//function to make a path with parameters

function getTranslationURL(input){
   return serverURL+"?"+"text="+input;
}
submitButton.addEventListener("click",function(){
    var inputText=textInput.value;
    fetch(getTranslationURL(inputText))
    .then(respose => respose.json())
    .then(json =>{
        out.innerText=(json.contents.translated)
    });
})

