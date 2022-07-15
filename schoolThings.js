function school(input){
    let pen=Number(input[0])*5.80;
    let markers = Number(input[1])*7.20;
    let prep = Number(input[2])*1.20;
    let procent = Number(input[3]) * 0.01;
    let price = ((pen + markers + prep)-((pen + markers + prep) * procent));
    console.log(price);

}
school(["2 ",

"3 ",

"4 ",

"25 "])