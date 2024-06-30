// first task
function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
       if(largest < numbers[i]){
            largest = numbers[i];
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 300];
const tallest = maxInArray(heights);
console.log('Tallest person is: ',tallest);




// second task
function minInArray(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
       if(lowest > numbers[i]){
            lowest = numbers[i];
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 137, 300];
const lowest = minInArray(heights2);
console.log('Smallest person is: ',lowest);

