const log = function welcome() {
    console.log('Welcome to my application. I am Diksha and a part of FunctionUp Radon cohort');
}
const chunk = function(){
    const months = ['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec'];
    console.log(months.slice(0,4));
    console.log(months.slice(4,8));
    console.log(months.slice(8,12));
}
const tail = function(){
    let arrayOfOddNumbers = [1,3,5,7,9,11,13,15,17,19,21];
    console.log(arrayOfOddNumbers.slice(1,10));
}


const union = function(){
    let arr1 = [1,2,3,4];
    let arr2 = [5,6,7,4];
    let arr3 = [11,12,9,5];
    let arr4 = [14,23,33,12];
    let arr5 = [12,22,23,4];
}
module.exports.log = log
module.exports.chunk=chunk
module.exports.tail=tail
module.exports.union=union