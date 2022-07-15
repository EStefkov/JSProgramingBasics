function toysShop(input){
    let priceOfec = Number(input[0])
    let puzzle=Number(input[1]);
    let sKukli=Number(input[2]);
    let bear=Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    let sum = puzzle + sKukli+bear+minion+truck;
    let sumToys= (puzzle*2.60)+(sKukli*3)+(bear*4.10)+(minion*8.20)+(truck*2);
   if(sum>=50){
    sumToys= sumToys*0.75;
   }
   sumToys = sumToys*0.90;
   let diff = Math.abs(priceOfec - sumToys);
   if (sumToys >=priceOfec){
    console.log(`Yes! ${diff.toFixed(2)} lv left.`)
   } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
   }
}
toysShop(["40.8",

"20",

"25",

"30",

"50",

"10"])