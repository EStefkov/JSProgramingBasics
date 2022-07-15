function deposit(input){
    let index=0;
    let amount=input[index];
    let total = 0;

while(amount!=="NoMoreMoney"){
    let inputAsNum= Number(amount);
    if (inputAsNum<0){
        console.log('Invalid operation!');
        break;
    }
    total+=inputAsNum;
    console.log(`Increase: ${inputAsNum.toFixed(2)}`)
    index++;
    amount=input[index];

}
console.log(`Total: ${total.toFixed(2)}`)
}deposit (["5.51", 
"69.42",
"100",
"NoMoreMoney"])
