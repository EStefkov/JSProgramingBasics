function number(input){
    let number= Number(input[0]);
    let min = '-100';
    let max= '100';
    if (number<=max  && number!=0 && number>=min){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
number(["-2"])