alert("You are now entering SocialLoft")

var password = "1234";
var response;
var entryCount = 0;
var error = false;

while(response != password){
    response = window.prompt("Enter Password")
}
 alert("Success!");

function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    alert(name);
}


