function fishTank(input){
let fishTank= Number(input[0]) * Number(input[1]) * Number(input[2]);
let volLit = fishTank * 0.001;
let procent = Number(input[3]) * 0.01;
let sum = volLit * (1-procent);
console.log(sum);
}
fishTank(["85 ",

"75 ",

"47 ",

"17 "])