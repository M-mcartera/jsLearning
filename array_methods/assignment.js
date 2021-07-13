const numbers = [1, 2,3,4,5,6];
const filteredArray = numbers.filter(number => number > 5);
console.log(filteredArray);
const mappedArray = numbers.map((num)=>({'num':num}));
console.log(mappedArray);
const reducedArray = numbers.reduce((curval, prevval) =>{
return curval * prevval
},1);

console.log(reducedArray);

const findMax = (...numbers) =>{
    let [max] = numbers;
    let [min] = numbers;
    for(const num of numbers){
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    const result = [min,max];
    return result;
}

const [min, max] = findMax(...numbers);
console.log(min,max);
