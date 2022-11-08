var loginToggle = document.querySelector("#loginToggle");
var toggle = document.querySelector(".Loginmodal");

var RegisterClose = document.querySelector(".RegisterClose");
var RegisterModal = document.querySelector(".Registermodal");

loginToggle.addEventListener('click', () => {
    toggle.showModal();
    RegisterModal.close();
});

RegisterClose.addEventListener('click', () => {
    RegisterModal.close();
});

// LOGIN MODAL PANEL

var modal = document.querySelector(".Loginmodal");

var registerToggle = document.querySelector(".Registermodal");
var toggleClose = document.querySelector(".RegisterClose");

var openModal = document.querySelector(".login");
var closeModal = document.querySelector(".close");
var toggleRegister = document.querySelector("#toggleRegister");

toggleRegister.addEventListener('click', () => {
    registerToggle.showModal();
    modal.close();
});

toggleClose.addEventListener('click', () => {
    RegisterModal.close();
});

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});


var progressSection = document.getElementById('ratingSection');
var progressBar = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBar.forEach(progress => {
        const value = progress.dataset.progress;
        progress.style.opacity = 1;
        progress.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBar.forEach(progress => {
        progress.style.opacity = 0;
        progress.style.width = 0;
    });
}

// window.addEventListener('scroll', () => {
//     var progressPosition = progressSection.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight;

//     if (progressPosition < screenPosition) {
//         showProgress();
//     } else {
//         hideProgress();
//     }
// });



// SHIPMENT PAGE TOGGLE

function toggleShipmentPage() {

    document.getElementById('ship').style.display = "none";
    document.getElementById('cartBtn').style.display = "none";
    document.getElementById('shipment').style.display = "block";
    // SHIPMENT DETAILS
    var customerName = document.getElementById("customerName");
    var customerMobile = document.getElementById("customerNumber");
    var customerAddress = document.getElementById("customerAddress");

    document.getElementById("customer").innerHTML = customerName.value;
    document.getElementById("customerMobile").innerHTML = customerMobile.value;
    document.getElementById("customerShippingAddress").innerHTML = customerAddress.value;

}

function backToCart() {
    document.getElementById('ship').style.display = "grid";
    document.getElementById('cartBtn').style.display = "block";
    document.getElementById('shipment').style.display = "none";
}

function payment() {
    document.getElementById('shipment').style.display = "none";
    document.getElementById('paymentSection').style.display = "grid";
}

function backToShippingPage() {
    document.getElementById('shipment').style.display = "grid";
    document.getElementById('paymentSection').style.display = "none";
}


var hours = 10;
var Minutes = 59;
var Seconds = 60;

setInterval(() => {
    var cl = document.getElementById('clock');
    if(Seconds==0){
        Seconds = 60;
        if(Minutes==0){
            Minutes = 59
            if(hours==0){
                cl.innerHTML = `Offer Expired`;
            }
            hours--;
        }else{
            Minutes--;
        }
    }else{
        cl.innerHTML = `${hours} : ${Minutes} : ${Seconds--}`;
    }
},1000);
