function deli(input){
    let chiken = Number(input[0])*10.35;
    let fish = Number(input[1])*12.40;
    let vege = Number(input[2]) * 8.15;
    let desert = (chiken + fish + vege) *0.20;
    let finPrice = (chiken + fish + vege) + desert +2.50;
    console.log(finPrice);


}
deli(["2 ",

"4 ",

"3 "])