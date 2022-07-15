function hello(input){
    let hour = Number(input[0]);
    let min = Number (input[1]);
    min = min+15;
    if (min>59){
        hour+=1;
        min-=60;
        if (hour>23 && min<10){
            console.log(`Time after 15 min will be  00:0${min}`);
        }
        else if (hour>23 && min >=10) {
            
            console.log(`Time after 15 min will be 00:${min}`);
        }
        else if (hour<23&& min <10){
            console.log ( `Time after 15 min will be ${hour}:0${min}`);
        }
        else {
            console.log(`Time after 15 min will be ${hour}:${min}`);   
    
        }
        
    }
    else if (min<59 && min>9) {
        console.log(`Time after 15 min will be ${hour}:${min}`);   
    }
    else if (min<59 && min<10){
        console.log(`Time after 15 min will be ${hour}:0${min}`);
    }
}
hello(["23","45"])