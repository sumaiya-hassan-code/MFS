// ======1st screen=====
let firstScreenName = document.getElementById("firstScreenName")
let firstScreenPassword = document.getElementById("firstScreenPassword")
let firstScreenErrornum = document.getElementById("firstScreenErrornum")
let firstScreenErrorPIN = document.getElementById("firstScreenErrorPIN")
let firstScreenBtn = document.getElementById("firstScreenBtn")
let firstscreen = document.getElementById("firstscreen")
let secondScreen = document.getElementById("secondScreen")



firstScreenBtn.addEventListener("click", () => {
    if (firstScreenName.value=="") {
        firstScreenErrornum.removeAttribute("hidden")
    } 
    else if (firstScreenPassword.value=="") {
        firstScreenErrorPIN.removeAttribute("hidden")
    }
    else {
        secondScreen.removeAttribute("hidden")
        firstscreen.style.display="none"
    }
})

// ======1st screen=====

// ==========2nd screeen=============
let add_Money_Btn = document.getElementById("add_Money_Btn")
let cash_out_Btn = document.getElementById("cash_out_Btn")

let add_money = document.getElementById("add_money")
let cash_out = document.getElementById("cash_out")

let add_money_Input = document.getElementById("add_money_Input")
let cash_out_Input = document.getElementById("cash_out_Input")

let add_money_btn = document.getElementById("add_money_btn")
let cash_out_btn = document.getElementById("cash_out_btn")

let current_amount = document.getElementById("current_amount")



add_Money_Btn.addEventListener("click",()=>{
    add_money.removeAttribute("hidden")
    cash_out.setAttribute("hidden",true)
})
cash_out_Btn.addEventListener("click",()=>{
    cash_out.removeAttribute("hidden")
    add_money.setAttribute("hidden",true)
})



add_money_btn.addEventListener("click", () => {

    if (add_money_Input.value == "") {

        alert("Please enter a valid amount");

    } else {

        current_amount.innerText =parseInt(current_amount.innerText) + parseInt(add_money_Input.value);
        add_money_Input.value = "";

    }

});

cash_out_btn.addEventListener("click", () => {

    if (cash_out_Input.value == "") {

        alert("Please enter a valid amount");

    } else {

        current_amount.innerText =parseInt(current_amount.innerText) - parseInt(cash_out_Input.value);
        cash_out_Input.value = "";
    }

});