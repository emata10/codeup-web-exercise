console.log("Hello from external javaScript")
    alert('Welcome to my website!')
    let userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput)
    alert('Great, that is my favorite color also.');

// Question 1

let lMRL = Number(prompt("How long would you like to rent 'The LMRL'?"));
let BBRL = Number(prompt( 'How long would you like to rent  "The BBRL"?'));
let HRL = Number (prompt( "How long would you like to rent 'The HRL'?"));
let rentalCost = prompt( 'Wait, how much is it to rent a movie per day?');
let LMRL = 3; // Example value for the number of days renting "The LMRL"
let BBR = 5; // Example value for the number of days renting "The BBRL"
let HRL = 2; // Example value for the number of days renting "The HRL"
let rentalCost = 10; // Example value for the rental cost per movie, per day

let totalLMRL = LMRL * rentalCost;
let totalBBRL = BBR * rentalCost;
let totalHRL = HRL * rentalCost;
let finalTotal = totalLMRL + totalBBRL + totalHRL;

console.log('Alrighty, you are renting "The LMRL" for ' + LMRL + ' day(s), "The BBRL" for ' + BBR + ' day(s), "The HRL" for ' + HRL + ' day(s).');
console.log('It will cost $' + rentalCost + ' per movie, per day.');
console.log('Your final total is $' + finalTotal + '.');

// Question 2

let googRate = prompt(" How much does google pay an hour?");
let googHours = prompt( "How many hours did you work for google this week?");
let fbRate = prompt("How much does Meta pay per hour?");
let fbHours = prompt("How many hours did you work for meta this week?");
let amaRate = prompt("How much does amazon pay you per hour?");
let amaHours = prompt("How many hours did you work for amazon this week?");

alert("Congrats, you got paid: $" + (googHours * googRate * fbHours * fbRate * amaHours * amarate));


// Question 3
function schedule(){
    let noConflict = confirm('If class is not currently full click ok!');
    let conflict = confirm('Does this conflict with your schedule? Click okay if not.')
    if(noConflict === true && conflict === true) {
        alert('You will attend class!');
    } else {
        alert('You will not attend class')
    }
}

schedule()

// Question 4

function discount() {
    let customerBuy = confirm = ('Did customer paye for more than two items? Click ok for yes.');
    let offer = confirm('Has offer expired? Click cancel if yes.');
    let premium = confirm('Are you a premium customer? Click ok for yes')
    if (customerBuy === true && offer === true) {
        alert('You may continue with the order!')
    } else {
        alert('You may not order.')
    }
}
discount()