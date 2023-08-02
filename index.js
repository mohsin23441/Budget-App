let budget = document.getElementById("budgetvalue");
let btn = document.getElementById("submit");


btn.addEventListener("click", myFunction);
let TotalAmount = document.querySelector(".total");


function myFunction() {
    let mainbudget = budget.value
    let total = document.getElementById("EnterAmount");
    total.innerHTML = `${mainbudget}`
    TotalAmount.style.display = "block"
}


let form = document.getElementById("Date")
let submitbtn1 = document.getElementById("submit1")
let totalamount = document.getElementById("totalamount")
let submitbtn2 = document.getElementById("submit1")
let Categories = document.getElementById("Categories");
let submitbtn3 = document.getElementById("submit1")
let description = document.getElementById("Description")
let submitbtn4 = document.getElementById("submit1")
let amount2 = document.getElementById("amount")
let submitbtn5 = document.getElementById("submit1")



submitbtn1.addEventListener('click', myFunction1)
submitbtn1.addEventListener('click', myFunction)

function myFunction1() {
    let dateValue = form.value
    let date1 = document.getElementById("date");
    date1.innerHTML = `${dateValue}`
    let mainamount = totalamount.value
    let amount1 = document.getElementById("amount")
    amount1.innerHTML = `${mainamount} RS`
    let maincafe = Categories.value
    let cafe1 = document.getElementById("cafe")
    cafe1.innerHTML = `${maincafe}`
    let maindescription = description.value
    let des1 = document.getElementById("des")
    des1.innerHTML = `${maindescription}`
    let amount3 = amount2.value
    let expense = document.getElementById('examount')
    expense.innerHTML = `${mainamount}`
    let mainbudget = budget.value
    let amount8 = mainbudget
    let amount9 = mainamount
    let result = mainbudget - mainamount;
    console.log(result);
    let balance = document.getElementById("bal")
    let submitbtn6 = document.getElementById("submit1")
    let mainbal = balance.value
    let bal1 = document.getElementById("bal")
    bal1.innerHTML = `${result}`
}




