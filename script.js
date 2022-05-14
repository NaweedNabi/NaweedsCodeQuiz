


// adding an event listener to the button, so our function can start with the mouse click on the "generate" button on the UI

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// created arrays to store possible password selections.

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["!","#","$","%","&","*","(",")","-","+","=","@","^"];





 // start of password prompts

 //determines lenght of password
function generatePassword(){
  var passLength = prompt("how many characters you want, bro?");
    if (passLength >=8 && passLength <= 20) {
       alert("Aight, bet!")
    } else {
       alert("Not enough or too many, but 8-20 is your window.")
       return;
    }
  
 
//further inquiries into the build up of the password

var confirmUpperCase = confirm("Do you want uppercase letters?")
var confirmLowerCase = confirm("Do you want lowercase letters?")
var confirmNumber    = confirm("Do you want numbers?")
var confirmSpecial   = confirm("Do you want special characters?")
// empty Arrays to store confirm selections, and then to store the random password in once generated, and to be put out.
var selections       = []
var randomPass      = ""

//here we store all of our True selections into our empty "selections" array we created above.  

if (confirmLowerCase) {
  console.log("lower case selected")
  selections.push(lowerCase)
} else {
  confirmLowerCase = false;
  console.log("No lower case")
}
if (confirmUpperCase) {
  console.log ("upper case selected")
  selections.push(upperCase)
}else {
  confirmUpperCase = false;
  console.log("No upper case")
}
if (confirmNumber) {
  console.log ("numbers selected")
  selections.push(numbers)
}else {
  confirmNumber = false;
  console.log("No numbers")
}
if (confirmSpecial) {
  console.log("special characters selected")
  selections.push(specialChar)
}else {
  confirmSpecial = false;
  console.log("No special characters")
}

//   collects above questions regarding password character options.  then create a new variable to contain the True answers, by 
// concatanating all selections which are greater than equal to each other, and then all the ones that were were True.  the concat
//will filter out the false ones, and then return only the true ones.
console.log(confirmUpperCase, confirmLowerCase, confirmSpecial, confirmNumber);
    var questions = [confirmUpperCase, confirmLowerCase, confirmSpecial, confirmNumber]
    var answers = questions.slice(item => item === true)
// if confirms containes no True answers, which is what we are looking for (at least 1)
    if (answers.length === 0){
    // then it'll give this alert to pick at least 1
      alert("Gotta pick at least 1 option!")
     return;
    }



// repeats this for loop based on amount of characters you selected for your pw (8-20)
// performs the two statements in side, which first selects a random character from the 'selections' var and stores it inside var 'allCharacters'
// then created another var 'yourPassword', in which it stores the password, selected from the var 'allCharacters.'
// math.floor(math.random() used to properly index the the var and to select  random index items.
// then used addition assignment to add the values of "yourPassword" to our undefined var randomPass
for (x = 0; x < passLength; x++){
  var allCharacters = selections[Math.floor(Math.random() * selections.length)]
  var yourPassword = allCharacters[Math.floor(Math.random() * allCharacters.length)]
  randomPass += yourPassword
}

//here we return the results of the above funtion to display in our window by selecting the "password" id through the HTML code.
//PHEW!!!

return document.getElementById("password").value = randomPass;
}




