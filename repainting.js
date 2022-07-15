function rep(input){
    let nylon = (Number(input[0])+2)* 1.50;
    let paint = (Number(input[1])+ (Number(input[1])*0.10)) * 14.50;
    let chemical = Number(input[2])*5;
    let bags = 0.40;
    let sum = nylon + paint + chemical +bags;
    let worker = ((sum * 0.30) * Number(input[3])) + sum;
    console.log(worker);

}
rep(["10 ",

"11 ",

"4 ",

"8 "])