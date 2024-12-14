


var emailInput = document.getElementById("btn-email");
var passInput = document.getElementById("btn-Password");
var noneValid = document.getElementById("demo");

var dataStore = [];


if (localStorage.getItem("all") !== null) {

    dataStore = JSON.parse(localStorage.getItem("all"));

};


function validEmail() {
    var regex = /^[a-z]{1,10}[0-9]{2,10}@gmail.com&/
    if (regex.test(emailInput.value) == true) {
        noneValid.classList.replace("d-block" , "d-none");

        return true;

    }

    else {
        noneValid.classList.replace("d-none" , "d-block")
        return false;

    }
};

function validPass() {
    var regex = /^[a-z]{1,10}[0-9]{1,10}/
    if (regex.test(passInput.value) == true) {
        noneValid.classList.replace("d-block", "d-none");

        return true;

    }

    else {
        noneValid.classList.replace("d-none", "d-block")
        return false;

    }
};


function addData() {


    validEmail();
    validPass();

    if (validEmail()==true &&  validPass()==true) {  var loginData ={
        emailName: emailInput.value,
        passworld: passInput.value,
               
    };
    dataStore.push(loginData);
    console.log(dataStore);

    localStorage.setItem("all", JSON.stringify(dataStore))

   window.location.href="auto.html";
    }
    


  
}