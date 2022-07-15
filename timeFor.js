function time(input){
    let hourSH=Number(input[0]);
    let minSH=Number(input[1]);
    let hourTH=Number(input[2]);
    let minTH=Number(input[3]);
    let sumTSH=hourSH*60+minSH;
    let sumTTH=hourTH*60+minTH;
    let sum=0;
    
     if (sumTSH<sumTTH){
        console.log(`Late`);
        sum= Math.abs(sumTTH-sumTSH);
        if (sum<60){
            let min= sum%60;
            console.log(`${min}minutes after the start`);
        }
        else{
            let h=Math.floor(sum/60);
            let min= sum%60;
            if(min<10){
                console.log(`${h}:0${min} hours after the start`)
            }
            else {
                console.log(`${h}:${min} hours after the start`)
            }
        }
    }
    else if (sumTTH<=sumTSH && sumTSH - sumTTH <=30){
        console.log(`On time`);
         sum= Math.abs(sumTSH-sumTTH);
         if(sum>0){
            let min= sum%60;
            console.log(`${min} minutes before the start`);
         }
        
    }
   
    else {
        console.log("Early");
        sum= Math.abs(sumTTH-sumTSH);
        if(sum<60){
            let min = sum%60;
            console.log(`${min} minutes before the start`)
        }
        else {
            let h = Math.floor(sum/60);
            let min = sum%60;
            if (min<10){
                console.log(`${h}:0${min} hours before the start`);
            }
            else {
                console.log(`${h}:${min} hours before the start`)
            }
        }
    }
}time (["16", "00", "15", "25"])