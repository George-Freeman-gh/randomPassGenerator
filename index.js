const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let passCur1 = ""
let passCur2 = ""


const getRandomPassword = () => {
    let password1 = [];
    let password2 = [];
    
    for(let i = 0; i < 15 ; i++) {
     
        password1.push(characters[Math.floor(Math.random() * characters.length)])
        password2.push(characters[Math.floor(Math.random() * characters.length)])
    }

    
   document.getElementById("randomPass1").value =  password1.join("")
   passCur1 = password1.join("");

   document.getElementById("randomPass2").value =  password2.join("")
   passCur2 = password2.join("");
}


const pass1 = document.getElementById("randomPass1")
const pass2 = document.getElementById("randomPass2")


const copyText1 = () => {

    pass1.select();
    document.execCommand("copy")
    alert(`Copied the text: ${passCur1}`);
}


const copyText2 = () => {

    pass2.select();
    document.execCommand("copy")
    alert(`Copied the text: ${passCur2}`);
}