function seq(input){
    let numb = Number(input[0]);
    let sum=0;
    while(numb >sum){
        sum=(sum+sum)+1;
        if(numb>=sum){
        console.log(sum);
        }
    }
    
    
}seq(["3"])