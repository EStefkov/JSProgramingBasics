function eq(input){
    let price = Number(input[0]);
    let sneakers = price - (price * 0.40);
    let cloth = sneakers - ( sneakers *0.20);
    let ball = cloth * 0.25;
    let acsseoary= ball *0.20;
    let sum = price + sneakers + cloth + ball + acsseoary;
    console.log(sum);

}
eq(["365"]);