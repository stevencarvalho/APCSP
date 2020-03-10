let greeting =''
let time = new Date().getHours()

// if (time<12){
//     greeting = 'Good Morning'
// }   else {
//     if (time<16) {
//         greeting = 'Good Afternoon'
//     }   else {
//         greeting = 'Good Evening'
//     }
// }
// console.log(greeting)


if(time<12){
    greeting = 'Good Morning'
}   else if (time<16) {
    greeting = 'Good Afternoon'
}   else if (time<20) {
    greeting = 'Good Evening'
}   else {
    greeting = 'Good Night'
}

// BOOLEAN LOGIC
// AND OPERATOR
if (time<8 && time>3){
    //some code
}

if (time<8 && time>3 && day === 'Monday'){
    //some code
}

// OR OPERATOR
if (time<8 || time>3){
    //some code
}

// NOT OPERATOR
let hasCar = true

if(hasCar) {
    console.log("You have car")
}

if(!hasCar) {
    //
}

if (hasCar !== true) {
    //some code
    console.log('You don\'t have a car')
}   

// COMBINED STATEMENTS
if((day === 'Monday' && time<12) && hasCar === true){
    console.log.apply("yYou only have a car on Monday mornings")
}

