function maxNum(input){
let inputEl=input[0];
let index=1;
let minNumber=Number.MAX_SAFE_INTEGER;
while(inputEl!=='Stop'){
    let currentNum=Number(inputEl);
    if(currentNum<minNumber){
        minNumber = currentNum;
    }
    inputEl = input[index];
    index++;
}
console.log(minNumber)
} maxNum (["100",
"999",
"80",
"70",
"Stop"])
