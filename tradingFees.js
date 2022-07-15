function fees(input){
    let city=input[0];
    let incomingAm=Number(input[1]);
    let final=0;
    switch (city){
        case "Sofia": 
            if (incomingAm>0 && incomingAm<=500){
                final = incomingAm*0.05; 
                console.log(final.toFixed(2));
            }
            else if (incomingAm>500&&incomingAm<=1000){
                final=incomingAm*0.07;
                console.log(final.toFixed(2));
            }
            else if (incomingAm>1000&&incomingAm<=10000){
                final=incomingAm*0.08;
                console.log(final.toFixed(2));
            }
            else if (incomingAm>10000){
                final=incomingAm*0.12;
                console.log(final.toFixed(2));
            }else {
                console.log("error");
            }
            ;break;
        case "Varna":
            if (incomingAm>0&&incomingAm <=500){
                final = incomingAm*0.045; 
                console.log(final.toFixed(2));
            }
            else if (incomingAm>500&&incomingAm<=1000){
                final=incomingAm*0.075;
                console.log(final.toFixed(2));
            }
            else if (incomingAm>1000&&incomingAm<=10000){
                final=incomingAm*0.10;
                console.log(final.toFixed(2));
            }
            else if (incomingAm>10000){
                final=incomingAm*0.13;
                console.log(final.toFixed(2));
            }else {
                console.log("error");
            };break;
        case "Plovdiv":
            if (incomingAm>0&&incomingAm <=500){
                final = incomingAm*0.055;
                console.log(final.toFixed(2));
            }
            else if (incomingAm>500&&incomingAm<=1000){
                final=incomingAm*0.08;
                console.log(final.toFixed(2));
            }
            else if (incomingAm>1000&&incomingAm<=10000){
                final=incomingAm*0.12;
                console.log(final.toFixed(2));
            }
            else if (incomingAm>10000){
                final=incomingAm*0.145;
                console.log(final.toFixed(2));
            }
            else {
                console.log("error");
            };break;
            default :console.log("error");
    }
    
}fees
(["Plovdiv","-20"])