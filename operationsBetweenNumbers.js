function oBN(input){
    let nOne=Number(input[0]);
    let nTwo=Number(input[1]);
    let sum=0;
    let eOrD;
    let symbow=input[2];
    switch(symbow){
        case"+": sum=nOne+nTwo;
        if (sum%2==0){
            eOrD="even";
        } 
        else{
            eOrD="odd";
        }
        console.log(`${nOne} ${symbow} ${nTwo} = ${sum} - ${eOrD}`)
        ;break;
        case"-": sum=nOne-nTwo;
        if (sum%2==0){
            eOrD="even";
        } 
        else{
            eOrD="odd";
        }
        console.log(`${nOne} ${symbow} ${nTwo} = ${sum} - ${eOrD}`)
        ;break;
        case"*": sum=nOne*nTwo;
        if (sum%2==0){
            eOrD="even";
        } 
        else{
            eOrD="odd";
        }
        console.log(`${nOne} ${symbow} ${nTwo} = ${sum} - ${eOrD}`)
        ;break;
        case"/": sum= (nOne/nTwo).toFixed(2);
        if(nTwo===0){
            console.log(`Cannot divide ${nOne} by zero`);
        }
        else {
            console.log(`${nOne} ${symbow} ${nTwo} = ${sum}`)
        };break;
        case"%": sum=nOne%nTwo;
        if(nTwo===0){
            console.log(`Cannot divide ${nOne} by zero`);
        }
        else {
            console.log(`${nOne} ${symbow} ${nTwo} = ${sum}`)
        };break;
        
    }
    
}oBN (["7",

"3",

"*"])