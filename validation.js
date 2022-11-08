// LOGIN Show Password PANEL

function showpass() {
    var userpass = document.getElementById("userloginpass");

    var eye = document.getElementById("eye");
    var eyehide = document.getElementById("eyehide");

    if (userpass.type === "password") {
        userpass.type = "text";
        eyehide.style.display = "none";
        eye.style.display = "block";
    } else {
        userpass.type = "password";
        eye.style.display = "none";
        eyehide.style.display = "block";
    }
}


//Login Form Validation

var mail = "kiran@gmail.com";
var password = 2023;

function userMailValidate() {

    var usermail = document.getElementById("usermaillogin").value;
    var error1 = document.getElementById("error1");


    if (usermail.trim() != mail) {
        error1.innerHTML = "Enter Valid Mail";
        document.getElementById("usermaillogin").style.border = "2px solid #8B0000";
        return false;
    }
    if (usermail.trim() == mail) {
        error1.innerHTML = "";
        document.getElementById("usermaillogin").style.border = "2px solid 	#089000";
        return true;
    }

}

function userPasswordValidate() {
    var userpassword = document.getElementById("userloginpass").value;
    var error2 = document.getElementById("error2");

    if (userpassword.trim() != password) {
        error2.innerHTML = "Enter Valid Password";
        document.getElementById("userloginpass").style.border = "2px solid #8B0000";
        return false;
    }

    if (userpassword.trim() == password) {
        error2.innerHTML = "";
        document.getElementById("userloginpass").style.border = "2px solid 	#089000";
        return true;
    }
}

function login() {
    var successful = document.getElementById("succefulLogin");

    if (userMailValidate() && userPasswordValidate()) {
        successful.innerHTML = "Login Successful";
        setTimeout(() => {
            alert("Redirecting To Dashboard Page");
        }, 2000);
        setTimeout(() => {
            window.open("admin.html");
        }, 5000)
    } else {
        alert("Enter Valid Data");
        return false;
    }
}


// REGISTRATION VALIDATION
var mailError = document.getElementById("mailError");
var phoneError = document.getElementById("phoneError");

var submitValidate = false;

function userNameValidate() {
    var user = document.getElementById("usernames");
    var nameError = document.getElementById("nameError");
    var usernameValidate = "^[A-Za-z]+$";

    if (!user.value.match(usernameValidate)) {
        nameError.innerHTML = "UserName Must be Only Aplhabets";
        document.getElementById("usernames").style.border = "2px solid #8B0000";
        return false;
    }
    document.getElementById("usernames").style.border = "2px solid 	#089000";
    nameError.innerHTML = "";
    return true;
}

function mailValidate() {
    var mail = document.getElementById("mailid");
    var mailValidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!mail.value.match(mailValidate)) {
        mail.style.border = "2px solid #8B0000";
        mailError.innerHTML = "Enter Valid Mail Address";
        return false;
    }
    mail.style.border = "2px solid #089000";
    mailError.innerHTML = "";
    return true;
}

function phoneValidate() {
    var mobile = document.getElementById("mobilenumber");
    var phoneValidate = "^[6-9]{1}[0-9]{9}$";

    if (!mobile.value.match(phoneValidate)) {
        mobile.style.border = "2px solid #8B0000";
        phoneError.innerHTML = "Enter Valid Phone Number";
        return false;
    }
    mobile.style.border = "2px solid #089000";
    phoneError.innerHTML = "";
    return true;
}

function passwordValidate() {
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirmpassword");
    if (password.value == confirmpassword.value) {
        password.style.border = "2px solid #089000";
        confirmpassword.style.border = "2px solid #089000";

        document.getElementById("passwordError").innerHTML = "";
        return true;
    } else {
        password.style.border = "2px solid #8B0000";
        confirmpassword.style.border = "2px solid #8B0000";

        document.getElementById("passwordError").innerHTML = "Password Not Matched";
        return false;
    }
}



function validated() {
    var successRegistered = document.getElementById("registeredSuccessfulModal");


    if (userNameValidate() && mailValidate() && phoneValidate() && passwordValidate()) {

        successRegistered.showModal();

        return false;
    } else {
        alert("Enter Valid Data");
        return false;
    }
}

function succefulRegister() {
    var successfulRegistered = document.getElementById("registeredSuccessfulModal");
    var registerModal = document.querySelector(".Registermodal");
    var loginModal = document.querySelector(".Loginmodal");

    var registerButton = document.getElementById("registeredButton");
    registerButton.addEventListener('click', () => {
        successfulRegistered.close();
        loginModal.showModal();
        registerModal.close();
    });
}


// Product Description Page

const swipeImage = (e) => {
    var datas = document.querySelector(".productImageGrid").children;

    document.querySelector(".mainimg").src = e.children[0].src;

    for (var data of datas) {
        data.classList.remove("activeImageHighlight");
        data.classList.remove("imageactive");
    }

    e.classList.add("imageactive");
    e.classList.add("activeImageHighlight");

}