
let name = prompt("Ingrese su nombre")
let message = document.querySelector("span")

while (name.length < 3) {
    name = prompt("Demasiado corto, el nombre que ingrese debe tener almenos 3 letras")
}

message.textContent = (`Hola ${name.toUpperCase()}`)

let age = prompt("Ingregse edad")


if (age < 18) {
    let allButton = document.querySelectorAll("button")
    swal("You can't buy tickets!", "you don't have the authorized age to buy", "info");
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].style.background = ("rgb(31, 31, 31)")
        allButton[i].disabled = true
        allButton[i].style.color = "white"
    }
}

let tickets = {
    uk: 2,
    germany: 5,
    netherlands: 3,
    croatia: 4
}

function getTickets(country){
    if(tickets[country] > 0){
        tickets[country]--;
        swal("Your are readi!", `successful buy for ${country}`, "success");
        disableSoldOutButtons()
    }else{
        swal("Sould out!", "Tickets not available!", "error"); 
    }
}

function disableSoldOutButtons(){
for(let country in tickets){
    if(tickets[country] == 0){
        let button = document.getElementById("buy_" + country)
        button.innerHTML = "Sould out!"
        button.style.background = ("rgb(31, 31, 31)")
        button.disabled = true        
    }
}
}
