console.log('hello world');



//pour declarer une variable
var myNumber=42 // var n'a pas de tdz
var otherNumber
otherNumber=26
const anotherNumber=282 // quand on met const on ne peut plus mettre var othernumber , other number = xxx
let yetAnotherNumber=2323//la diff entre const et let , c'est que avec const on peut pas reaffecter
//console.log(myNumber);


//declaration d'une fonction

function add (a,b){
return a+b
}

document.querySelector("#submit")
.addEventListener("click", function writeToChat(event){

    var message = document.querySelector("#message").value
    var discussionElt = document.querySelector(".discussion")
    discussionElt.innerHTML += "<p>" + message 



})


//Les 7 types sur js
//Number
//String
//Boolean
//Null
//Undefined
//Symbol
//objet