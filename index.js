const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const characters2= [["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]];
let passwordEl1 = document.querySelector("#password-el1")
let passwordEl2 = document.querySelector("#password-el2")
let password = ""

function randomIndexGenerator( upperLimit) {
    return Math.floor(Math.random()*upperLimit)
}

function randomPasswordGenerator() {
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""    
    
    passwordEl1.textContent += characters2[0][randomIndexGenerator(26)]
    passwordEl1.textContent += characters2[1][randomIndexGenerator(26)]
    passwordEl1.textContent += characters2[2][randomIndexGenerator(10)]
    passwordEl1.textContent += characters2[3][randomIndexGenerator(29)]
    
    passwordEl2.textContent += characters2[0][randomIndexGenerator(26)]
    passwordEl2.textContent += characters2[1][randomIndexGenerator(26)]
    passwordEl2.textContent += characters2[2][randomIndexGenerator(10)]
    passwordEl2.textContent += characters2[3][randomIndexGenerator(29)]
    
    for(let i = 1;i < 5;i++){
        passwordEl1.textContent += characters[randomIndexGenerator(91)]
        passwordEl2.textContent += characters[randomIndexGenerator(91)] 
    }
}

function copyFirst() {
    window.getSelection().selectAllChildren(document.getElementById("password-el1"));
    document.execCommand("Copy");
}
function copySecond() {
    window.getSelection().selectAllChildren(document.getElementById("password-el2"));
    document.execCommand("Copy");
}
//console.log(randomIndexGenerator(26))






