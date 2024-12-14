

var userName = document.getElementById("user-name");
var email = document.getElementById("email-use");
var password = document.getElementById("pass-use");
var action = document.querySelector(".btn")
var alertText = document.getElementById("alert-text")


var checkData = [];
if (localStorage.getItem("all") !== null) {

    checkData = JSON.parse(localStorage.getItem("all"));

};

action.addEventListener("click", getData)


function getData() {
    var singData = {
        nameUs: userName.value,
        pass: password.value,
        email: email.value,
    };
    checkData.push(singData);
    console.log(checkData);

    localStorage.setItem("all", JSON.stringify(checkData))

    function isEmailRegistered(email) {
        return existingEmails.includes(email);

    }

    if (userName !== null && password !== null && email !== null) {

        alertText.classList.replace("text-danger", "text-success")
        alertText = "success";
        document.getElementById("alert-text").innerHTML = alertText;
    }
     else if (userName == null || password == null || email == null) {
        alertText = "All inputs is required";
        document.getElementById("alert-text").innerHTML = alertText;

    }


    else if (email == email.value) {
        alertText = "email already exists";
        document.getElementById("alert-text").innerHTML = alertText;

    }

}

