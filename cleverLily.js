function cleverLily(input){
    let years=Number(input[0]);
    let priceW=Number(input[1]);
    let priceOfToy=Number(input[2]);
    let sum=0;
    let sold=0;
    let giftM=10;
    let oddbirthday=0;
    let brotherFund=0;
    for(i=1;i<=years;i++){
        if(i%2===0){
            sum+=giftM;
            giftM +=10; 
            brotherFund+=1;
        }else{
            oddbirthday+=1;
            sold=oddbirthday*priceOfToy;

        }

    }let allsum=(sum+sold)-brotherFund;
    if(allsum>=priceW){
        console.log(`Yes! ${Math.abs(allsum-priceW).toFixed(2)}`);
    }
    else {
        console.log(`No! ${Math.abs(allsum-priceW).toFixed(2)}`);
    }

}cleverLily (["10",
"170.00",
"6"])
