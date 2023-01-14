const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


console.log(pass1)
function generate() {
    console.log(characters.length)
    
   
    newPass1 = randomChar()
    for (i=0; i<15-1; i++){
        newPass1 += randomChar()
    }
    newPass2 = randomChar()
    for (i=0; i<15-1; i++){
        newPass2 += randomChar()
    }

    





    pass1.textContent = newPass1
    pass2.textContent = newPass2
    
    
    console.log(newPass1)
}

function randomChar() {
    randomLetter = Math.floor( Math.random()*91 ) 
    newChar = characters[randomLetter]
    console.log(newChar)
    return newChar
}


