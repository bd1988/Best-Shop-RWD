let productsQty = document.getElementById("products");
let ordersQty = document.getElementById("orders");
let plan = document.querySelector(".select");
let accountingCheckbox = document.getElementById("accounting");
let terminalCheckbox = document.getElementById("terminal");
let dropdown = document.querySelector(".dropdown");
let planBasicChoose = document.querySelector(".select1");
let planProChoose = document.querySelector(".select2");
let planPremiumChoose = document.querySelector(".select3");
let productsTotal = document.querySelector(".productsSum");
let sumBox = document.querySelector(".sumBox");
let productsDes = document.querySelector(".productsDes");
let ordersTotal = document.querySelector(".ordersSum");
let sumBox2 = document.querySelector(".orders");
let ordersDes = document.querySelector(".ordersDes");
let planTotal = document.querySelector(".planSum");
let planSum = document.querySelector(".plan");
let packageDes = document.querySelector(".packageDes");
let accountingTotal = document.querySelector(".accountingSum");
let rentTotal = document.querySelector(".rentSum");
let totalTotal = document.querySelector(".totalSum");
let alert = document.querySelector(".alert");
let selection = document.querySelector(".selection");
let arrow = document.querySelector(".arrow");
let accountingBox = document.querySelector(".accounting");
let rentBox = document.querySelector(".rent")
let totalBox = document.querySelector(".total")
let productPrice = 2;
let orderPrice = 0.25;
let planPrice = 0;
let accounting = 0;
let rent = 0;
let productsSum = 0;
let orderSum = 0;
let total = 0;

function productsPrice() {
    let sum = productsQty.value * productPrice;
    sumBox.classList.remove("hidden");
    productsTotal.innerText = "$" + sum;
    productsDes.innerText = productsQty.value + " * " + "$" + productPrice;  
    productsSum = sum;
}
productsQty.addEventListener("input", function() {
        let productsQtyValue = productsQty.value;
        if ( productsQtyValue < 0) {
            alert.classList.remove("hidden");
            alert.innerText = "Only positive values";
            productsSum = 0;
            totalF();
         }
        else if (productsQtyValue > 0) {
             productsPrice();
             totalF();
             alert.classList.add("hidden");
         }
         else if (productsQtyValue == 0) {
             alert.classList.add("hidden");
             sumBox.classList.add("hidden");
             productsSum = 0;
             totalF();
         }           
        })
        
function ordersPrice() { 
    let sum2 = ordersQty.value * orderPrice;
    sumBox2.classList.remove("hidden");
    ordersTotal.innerText = "$" + sum2;
    ordersDes.innerText = ordersQty.value + " * " + "$" + orderPrice;
    orderSum = sum2;
    }

ordersQty.addEventListener("input", function() {
        let ordersQtyValue = ordersQty.value;
        if ( ordersQtyValue < 0) {
          alert.classList.remove("hidden");
          alert.innerText = "Only positive values";  
          orderSum = 0; 
          totalF();     
         }
        else if (ordersQtyValue > 0) {
          ordersPrice();
          totalF();
          alert.classList.add("hidden");
        }
        else if (ordersQtyValue == 0) {
         alert.classList.add("hidden");
         sumBox2.classList.add("hidden");
         orderSum = 0;
         totalF();
        }           
       })

plan.addEventListener("click", function(event) {
    dropdown.classList.toggle("hidden");
    arrow.classList.toggle("rotation");
    planBasicChoose.addEventListener("click", function() {
        dropdown.classList.add("hidden");
        plan.innerText = "Basic";
        let newArrow = document.createElement("div");
        plan.appendChild(newArrow);
        newArrow.classList.add("arrow");
        newArrow.classList.add("rotation")
        plan.style.color = "black";
        planSum.classList.remove("hidden");
        planTotal.innerText = "$0";
        packageDes.innerText = "Basic";
        planPrice = 0;
        totalF();
    })
    planProChoose.addEventListener("click", function() {
        dropdown.classList.add("hidden");
        selection.classList.remove("hidden");
        selection.innerText = "Professional";
        plan.innerText = "Professional";
        let newArrow2 = document.createElement("div");
        plan.appendChild(newArrow2);
        newArrow2.classList.add("arrow");
        newArrow2.classList.add("rotation");
        plan.style.color = "black";
        planSum.classList.remove("hidden");
        planTotal.innerText = "$25";
        packageDes.innerText = "Professional";
        planPrice = 25;
        totalF();
    })
    planPremiumChoose.addEventListener("click", function() {
        dropdown.classList.add("hidden");
        selection.classList.remove("hidden");
        selection.innerText = "Premium";
        plan.innerText = "Premium";
        let newArrow3 = document.createElement("div");
        plan.appendChild(newArrow3);
        newArrow3.classList.add("arrow");
        newArrow3.classList.add("rotation");
        plan.style.color = "black";
        planSum.classList.remove("hidden");
        planTotal.innerText = "$60";
        packageDes.innerText = "Premium";
        planPrice = 60;
        totalF();
    })
})

function accClick(){
     accountingBox.classList.remove("hidden");
     accounting = accountingCheckbox.value;
     accountingTotal.innerText = accounting;
}


  accountingCheckbox.addEventListener("click", function() {
         if (accountingCheckbox.checked == true) {
             accClick();
             totalF();
        } else {
            accountingBox.classList.add("hidden");
            accounting = 0;
            totalF();           
         }

  })  

  function rentClick(){
    rentBox.classList.remove("hidden");
    rent = terminalCheckbox.value;
    rentTotal.innerText = rent;
}


 terminalCheckbox.addEventListener("click", function() {
        if (terminalCheckbox.checked == true) {
            rentClick();
            totalF();
        } else {
           rentBox.classList.add("hidden");
           rent = 0;
           totalF();          
        }

 })

 function totalF() {
      totalBox.classList.remove("hidden");
      let suma = planPrice + parseInt(accounting) + parseInt(rent) + productsSum + orderSum;
      totalTotal.innerText = "$" + suma;
      if (suma == 0) {
          totalBox.classList.add("hidden");
      }
 }

 
