const inputs = document.getElementsByTagName("input")
const button = document.getElementById("logBtn")
const parrafo = document.getElementById("passShort")

button.addEventListener("click", (e) =>{
    e.preventDefault()
    logIn()
})

function logIn(){
for(let i=0 ; i< inputs.length ; i++){
    if(inputs[i].value.length == 0){
        swal("Error!", "You have to complete all the fields!", "error")
    }
    if(inputs[i].value.length > 0 && inputs[i].value.length < 6){ 
        parrafo.innerHTML = "Your password is too short"
        }
    } 
}

for(let i=0; i< inputs.length; i++){
    inputs[i].addEventListener("input", (e)=>{
        if(e.target.value.length >= 6 || e.target.value.length == 0){
            parrafo.textContent=""
        }
    })
}
