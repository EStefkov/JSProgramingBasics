function green(input){
let greenArea=[input[0]]*7.61;
let discount = greenArea *0.18;
let finalPrice= greenArea - discount;
console.log(`The final price is: ${finalPrice} lv.`)
console.log(`The discount is: ${discount} lv.`)

}
green(["550"])