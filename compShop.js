function shoping(input){
    let buget = Number(input[0]);
    let vCards= Number(input[1]);
    let nCpu=Number(input[2]);
    let nRam= Number(input[3]);
    let priceOfCards= vCards*250;
    let cpu=nCpu * (priceOfCards *0.35);
    let ram= nRam *(priceOfCards*0.10);
    let final= priceOfCards + cpu + ram;
    if (vCards>nCpu){
        final=final-(final*0.15);
    }
    if (buget>final){
        let sum= buget - final;
        console.log(`You have ${sum.toFixed(2)} leva left!`);
    }
    else{
        let sum= final - buget;
        console.log(`Not enough money! You need ${sum.toFixed(2)} leva more!`);
    }
}
shoping (["920.45",

"3",

"1",

"1"])