// first task
const m = 84;
const n = 75;


if(m<n){
    console.log('Dela');
}
else{
    console.log('Jim');
}
 


// second task
const x = 84;
const y = 99;
const z = 77;

if(x > y && x > z){
    console.log('Jim');
}
else if(x < y && y > z){
    console.log('Dela');
}
else{
    console.log('Chinku');
}



// third task
function max(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }
    else if(num1 < num2 && num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

max(129, 368, 100);



// fourth task
function max(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        console.log(num1);
    }
    else if(num1 > num2 && num2 < num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

max(130, 270, 40);



// fifth task
const num1 = 120;
const num2 = 300;
const num3 = 230;

const maximum = Math.max(num1, num2, num3);
console.log(maximum);



// sixth task
const a = 120;
const b = 300;
const c = 230;

const minimum = Math.min(num1, num2, num3);
console.log(minimum);








