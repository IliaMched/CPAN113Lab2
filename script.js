let number = 22; // Assign any number here
 
if (number > 0) {
	console.log('the number is positive');
    // Output for positive numbers
} else if (number < 0) {
	
	console.log('the number is negative');
    // Output for negative numbers
} else {
	console.log('the number is 0');
    // Output for zero
}
 

let day = 7;  // Change this number between 1 and 7

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number! Please enter a number between 1 and 7.");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5); 


for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i);
}


let globalVar = "I'm global!";
 console.log(globalVar);

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar);
    // Access globalVar and localVar inside the function
    
}
//console.log(localVar); // cant be called outside of the function