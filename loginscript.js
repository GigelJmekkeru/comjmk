const username = document.querySelector(".enterUsername");
const password = document.querySelector(".enterPassword");

function tryAgainText(){
    var text = document.getElementById("wrongPsswdText");
    text.style.display = "block";
}
function Login(){
    if(username == "admin" && password == "1234"){
        window.location.replace("mainpage.html");
    }
    else{
        tryAgainText();
    }
}