
// Filtration Panel

var product = document.querySelectorAll(".productBox");
var checkbox = document.querySelectorAll(".checkbox");
var groceryCheck = document.querySelectorAll(".groceryCheck");
var bevergeCheck = document.querySelectorAll(".bevergeCheck");
var HouseholdCheck = document.querySelectorAll(".HouseholdCheck");


var groceryProducts = document.querySelectorAll(".groceryProducts");
var bevergeProducts = document.querySelectorAll(".bevergeProducts");
var HouseholdProducts = document.querySelectorAll(".householdProducts");
var discountCheckBox = document.querySelectorAll(".discountCheckBox");


var groceryCheckBoxes = document.querySelectorAll(".groceryCheckBoxes");

var list = [];
var discountList = [];
var discountedProductValues = [];
var discountedProducts = [];

var productCount = 0;
var count = 0;
var disCount = 0;

for (var check of checkbox) {

    check.addEventListener('click', function (e) {

        if (this.checked == true) {
            if (e.target.id == "allProductsGrocery") {

                for (var check of groceryCheck) {
                    if (check.checked && check.id != "allProductsGrocery") {
                        const products = document.querySelectorAll(`.p-btn--${check.value}`);
                        count += products.length;
                    }
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;

            } else if (e.target.id == "allProductsBeverge") {

                for (var check of bevergeCheck) {
                    if (check.checked && check.id != "allProductsBeverge") {
                        const products = document.querySelectorAll(`.p-btn--${check.value}`);
                        count += products.length;
                    }
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;

            } else if (e.target.id == "allProductsHousehold") {
                for (var check of HouseholdCheck) {
                    if (check.checked && check.id != "allProductsHousehold") {
                        const products = document.querySelectorAll(`.p-btn--${check.value}`);
                        count += products.length;
                    }
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;
            }

            if (e.target.id == "discountCheckBox") {
                const discountBoxValue = e.target.value;
                discountedProductValues.push(discountBoxValue);
                discountedProductValues.forEach(discountedProduct);
            }

            const category = e.target;

            product.forEach((element) => element.classList.add("product-not-active"));

            const products = document.querySelectorAll(`.p-btn--${category.dataset.btnNum}`);

            if (products.length == 0) {
                document.getElementById("noProductsAvailable").innerHTML = ` No ${e.target.name} Products is Available`;
                setTimeout(() => {
                    this.checked = false;
                    e.target.disabled = true;
                    document.getElementById("noProductsAvailable").innerHTML = ``;
                    product.forEach((element) => element.classList.remove("product-not-active"));
                }, 5000);
            } else {
                document.getElementById("noProductsAvailable").innerHTML = "";
            }

            productCount = products.length + productCount;

            list.push(category.dataset.btnNum);
            list.forEach(displayProducts);
            discountedProductValues.forEach(discountedProduct);

        }

        if (this.checked != true) {

            if (e.target.id == "allProductsGrocery") {

                for (var check of groceryCheck) {
                    check.disabled = false;
                }

                for (var checkedData of list) {

                    for (var checks of checkbox) {
                        // var limit = e.target.value;
                        if (checks.value == checkedData && checks.disabled != true) {
                            checks.checked = true;
                        }
                    }
                }

                this.disabled = false;
                e.target.checked = false;
                count = 0;

            } else if (e.target.id == "allProductsBeverge") {

                for (var check of bevergeCheck) {
                    check.disabled = false;
                }

                for (var checkedData of list) {

                    for (var checks of checkbox) {
                        // var limit = e.target.value;

                        if (checks.value == checkedData && checks.disabled != true) {
                            checks.checked = true;
                        }
                    }
                }

                this.disabled = false;
                e.target.checked = false;
                count = 0;

            } else if (e.target.id == "allProductsHousehold") {

                for (var check of HouseholdCheck) {
                    check.disabled = false;
                }

                for (var checkedData of list) {

                    for (var checks of checkbox) {
                        // var limit = e.target.value;

                        if (checks.value == checkedData && checks.disabled != true) {
                            checks.checked = true;
                        }
                    }
                }

                this.disabled = false;
                e.target.checked = false;
                count = 0;
            }

            if (e.target.id == "discountCheckBox") {
                for (var checkedData of list) {

                    for (var checks of checkbox) {
                        // var limit = e.target.value;

                        if (checks.value == checkedData && checks.disabled != true) {
                            checks.checked = true;
                        }
                    }
                }
                discountedProductValues.splice(discountedProductValues.indexOf(e.target.value), 1);
                e.target.checked = false;
                count = 0;
            }

            const category = e.target;

            const products = document.querySelectorAll(`.p-btn--${category.dataset.btnNum}`);

            products.forEach((element) => element.classList.add("product-not-active"));

            const removes = category.dataset.btnNum;
            list.splice(list.indexOf(removes), 1);

            productCount = productCount - products.length;

            list.forEach(displayProducts);
            discountedProductValues.forEach(discountedProduct);

        }

        if (list.length == 0) {
            product.forEach((element) => element.classList.remove("product-not-active"));
            productCount = 0;
            document.getElementById("productsAvailable").innerHTML = "";

        }

        function displayProducts(datas) {
            var products = document.querySelectorAll(`.p-btn--${datas}`);

            products.forEach((element) => element.classList.remove("product-not-active"));

            if (productCount != 0) {

                document.getElementById("productsAvailable").innerHTML = ` ${Math.abs(productCount - count)} Products Available `;
            }

            if (discountedProductValues != 0) {
                document.getElementById("productsAvailable").innerHTML = ` ${Math.abs(disCount)} Products Available `;
            }
        }

        function discountedProduct(discountValues) {
            var values = discountValues;
            // var p = document.querySelectorAll(`.p-btn--${li}`);
            // p.forEach((element) => element.classList.add("product-not-active"));

            for (var li of list) {
                var p = document.querySelectorAll(`.p-btn--${li}`);
                var b = document.querySelectorAll(`data-btn--${li}`);

                p.forEach((element) => {
                    if (element.id == values) {
                        discountedProducts.push(li);
                    } else {
                        var ps = document.querySelectorAll(`.p-btn--${li}`);
                        b.checked = false;
                        ps.forEach((element) => element.classList.add("product-not-active"));
                    }
                });
            }

            for(var a of discountedProducts){
                var ps = document.querySelectorAll(`.p-btn--${a}`);

                ps.forEach((element) => element.classList.remove("product-not-active"));

                // disCount =disCount + ps.length;
            }
        }

    });
}

// SEARCH FILTRATION

function clearAll() {
    list.splice(0, list.length);
    discountedProductValues.splice(0, discountedProductValues.length);
    
    productCount = 0;
    count = 0;
    disCount=0;
    document.getElementById("productsAvailable").innerHTML = "";
    document.getElementById("noProductsAvailable").innerHTML = "";

    product.forEach((element) => element.classList.remove("product-not-active"));
    for (var check of checkbox) {
        check.checked = false;
        check.disabled = false;
    }
}

// SEARCH FILTRATION SECTION

function filter() {
    var filter = document.getElementById('findData').value.toUpperCase();
    var products = document.querySelectorAll(".productBox");

    for (var productsDiv of products) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}

function filterGrocery() {
    var filter = document.getElementById('findData1').value.toUpperCase();
    var groceryProducts = document.querySelectorAll(".groceryProducts");

    for (var productsDiv of groceryProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}
function filterBeverges() {
    var filter = document.getElementById('findData2').value.toUpperCase();
    var bevergeProducts = document.querySelectorAll(".bevergeProducts");

    for (var productsDiv of bevergeProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}
function filterHousehold() {
    var filter = document.getElementById('findData3').value.toUpperCase();
    var householdProducts = document.querySelectorAll(".householdProducts");

    for (var productsDiv of householdProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}


// PAYMENT SUCCESS TOGGLE 
var openModal = document.querySelector("#payNowBtn");
var success = document.querySelector(".paymentModal");

if (openModal) {
    openModal.addEventListener('click', () => {
        success.showModal();
    });
}

var closeModal = document.querySelector("#donePayment");
if (closeModal) {
    closeModal.addEventListener('click', () => {
        success.close();
    });
}


var reg = document.getElementById("Registered");
var successfulRegistered = document.getElementById("registeredSuccessfulModal");

if (reg) {
    reg.addEventListener('click', () => {
        successfulRegistered.showModal();
    });
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


// PAYMENT SUCCESFUL REDIRECT

function redirect() {

    alert("Redirecting To Your Cart");

    setTimeout(() => {
        window.open("cart.html", "_self");
    }, 2000)
}
