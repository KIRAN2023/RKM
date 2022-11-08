var dashboard = document.getElementById("dashboard");
var users = document.getElementById("users");
var products = document.getElementById("products");
var orders = document.getElementById("orders");
var reviews = document.getElementById("reviews");

var dashboardData = document.getElementById("dashboardOverview");
var userDatas = document.getElementById("usersDatas");
var productsData = document.getElementById("productDashboard");
var ordersData = document.getElementById("ordersDashboard");



dashboard.addEventListener('click', () => {
    dashboardData.style.display = "initial";
    userDatas.style.display = "none";
    productsData.style.display = "none";
    ordersData.style.display = "none";
});

users.addEventListener('click', () => {
    dashboardData.style.display = "none";
    userDatas.style.display = "inline-block";
    productsData.style.display = "none";
    ordersData.style.display = "none";
});

products.addEventListener('click', () => {
    dashboardData.style.display = "none";
    userDatas.style.display = "none";
    productsData.style.display = "inline-block";
    ordersData.style.display = "none";
});

orders.addEventListener('click', () => {
    dashboardData.style.display = "none";
    userDatas.style.display = "none";
    productsData.style.display = "none";
    ordersData.style.display = "inline-block";
});

reviews.addEventListener('click', () => {
    alert("Currently No Reviews Available");

    setTimeout(() =>{
        alert("Redirecting to Dashboard");
    },2000);

    setTimeout(()=>{
        dashboardData.style.display = "grid";
        userDatas.style.display = "none";
        productsData.style.display = "none";
        ordersData.style.display = "none";
    },5000);
});




// PRODUCTS DATA


let action = '<i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i>';

let productData = [
    {productId:6010, productName:'Limca Lime n Lemoni', productPrice:'₹68', productAction: `${action}`},
    {productId:2506, productName:'Miranda Plastic Bottle', productPrice:'₹54', productAction:`${action}`},
    {productId:2551, productName:'Badam Drink Mix', productPrice:'₹191', productAction:`${action}`},
    {productId:2804, productName:'Evocus Black Alkaline Water', productPrice:'₹920', productAction:`${action}`},
    {productId:2556, productName:'Maaza Mango Drink', productPrice:'₹33', productAction:`${action}`},
    {productId:2365, productName:'7up Plastic Bottle', productPrice:'₹61', productAction:`${action}`},
    {productId:2486, productName:'Coca Cola Light', productPrice:'₹3,100', productAction:`${action}`},
    {productId:2789, productName:'Minute Maid Puply Orange', productPrice:'₹60', productAction:`${action}`},
    {productId:2475, productName:'Alofrut Mint Mojito', productPrice:'₹1,030', productAction:`${action}`},
    {productId:2631, productName:'Mountain Dew Can', productPrice:'₹26', productAction:`${action}`},
    {productId:2983, productName:'Thums Up', productPrice:'₹72', productAction:`${action}`},
    {productId:2431, productName:'Pepsi Can (pack 6)', productPrice:'₹920', productAction:`${action}`},

    {productId:2582, productName:'Aquaguard SkyLand 18 Ltr', productPrice:'₹4,578', productAction:`${action}`},
    {productId:2132, productName:'BAJAJ Crest Neo 1200 mm 3 Blade Ceiling Fan', productPrice:'₹1,199', productAction:`${action}`},
    {productId:2163, productName:'Butterfly Rapid Kettle 1.5 Litre + Eco 750 Ml Water Bottle', productPrice:'₹800', productAction:`${action}`},
    {productId:2316, productName:'Prestige Atlas 3.0 Induction Cooktop', productPrice:'₹1,499', productAction:`${action}`},
    {productId:2714, productName:'PHILIPS HP8100/46 Hair Dryer (1000 W, Purple)', productPrice:'₹598', productAction:`${action}`},
    {productId:2398, productName:'Pigeon Favourite Electric Kettle (1.5 L, Silver, Black)', productPrice:'₹499', productAction:`${action}`},
    {productId:2378, productName:'Pigeon 14913 Electric Kettle with Bottle (1.5 L, Silver)', productPrice:'₹699', productAction:`${action}`},
    {productId:2616, productName:'Lifelong LLCMB02 500 W Mixer & Dry Iron Combo', productPrice:'₹1,499', productAction:`${action}`},
    {productId:2516, productName:'Butterfly Rapid Plus 750 W Mixer Grinder', productPrice:'₹3,199', productAction:`${action}`},
    {productId:2148, productName:'Bajaj GX1 500 W Mixer Grinder', productPrice:'₹1,999', productAction:`${action}`},

    {productId:2349, productName:'Apple Fuji Pack 4 pcs', productPrice:'₹169', productAction:`${action}`},
    {productId:2659, productName:'Apple Granny Smith 4 pcs', productPrice:'₹249', productAction:`${action}`},
    {productId:2648, productName:'Apple Red Delicious 4 pcs', productPrice:'₹172', productAction:`${action}`},
    {productId:2873, productName:'Apple Indian 6 pcs', productPrice:'₹99', productAction:`${action}`},
    {productId:2012, productName:'Banana Nendran 4 pcs (Box)', productPrice:'₹129', productAction:`${action}`},
    {productId:2603, productName:'Banana Red (Box)', productPrice:'₹129', productAction:`${action}`},
    {productId:2098, productName:'Sapota 6 pcs (Pack)', productPrice:'₹108', productAction:`${action}`},
    {productId:2903, productName:'Indian Garlic', productPrice:'₹18', productAction:`${action}`},
    {productId:2408, productName:'Green Capsicum', productPrice:'₹66', productAction:`${action}`},
    {productId:2036, productName:'Lauki (Bottle Gourd)', productPrice:'₹39', productAction:`${action}`},
    {productId:2601, productName:'Potato Big', productPrice:'₹33', productAction:`${action}`},
    {productId:2610, productName:'Sweet Potato', productPrice:'₹40', productAction:`${action}`},
    {productId:2708, productName:'Brinjal Black Big', productPrice:'₹35', productAction:`${action}`},
    {productId:2081, productName:'Cluster Beans', productPrice:'₹29', productAction:`${action}`},

]

// USERS DATA

let usersListData = [
    { name: 'KIRAN', mail: 'kiran@gmail.com', mobile:6233456510, address: '5, RKV Road, Erode - 638001', state: 'Tamil Nadu', district: 'ERODE' }
]

// ORDER DATA

let orderStatusData = [
    { orderId:6010, userName:'KIRAN', userAddress:'5, RKV Road, Erode - 638001', orderStatus:'Processing', orderQuantity:1 },
    { orderId:2506, userName:'KIRAN', userAddress:'5, RKV Road, Erode - 638001', orderStatus:'Processing', orderQuantity:1 },
    { orderId:2804, userName:'KIRAN', userAddress:'5, RKV Road, Erode - 638001', orderStatus:'Processing', orderQuantity:1 },

]


// CALLING FUNCTION

window.onload = function(){
    productsDetails(productData);
    usersDetails(usersListData);
    orderStatus(orderStatusData);
}



// DISPLAYING USER DATA

const usersDetails = (usersData) => {
    let userTable = document.getElementById("usersDataTable");
    let user = "";

    for(var users of usersData){
         user +=  ` <tr> <td>${users.name}</td> <td> ${users.mail}</td> <td>${users.mobile}</td> <td>${users.address}</td> <td>${users.state}</td> <td>${users.district}</td>   </tr> `;
    }

    userTable.innerHTML = user;
}


// DISPLAYING PRODUCT DATA


const productsDetails = (productData) => {
    const tableData = document.getElementById("productDatas");
    let datas = "";

    for(let data of productData){
        datas += ` <tr><td> ${data.productId} </td><td>${data.productName}</td><td>${data.productPrice}</td><td> ${data.productAction} </td>  </tr>`;
    }

    tableData.innerHTML = datas;
}

// ORDERS DATA


const orderStatus = (orderStatusData) => {
    const tableData = document.getElementById("orderDatas");
    let datas = "";

    for(let data of orderStatusData){
        datas += ` <tr><td> ${data.orderId} </td><td>${data.userName}</td><td>${data.userAddress}</td><td> ${data.orderStatus} </td> <td> ${data.orderQuantity} </td>  </tr>`;
    }

    tableData.innerHTML = datas;
}