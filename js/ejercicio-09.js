const num = [8, 15, 23, 42, 16, 4, 10, 7, 19];

let sumIndex =  0;

for(let i = 0; i < num.length; i++){
    if(i % 2 === 0){
        sumIndex += num[i];
    }
}

console.log(`${sumIndex}`)