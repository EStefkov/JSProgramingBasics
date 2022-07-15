function tenis(input){
    let index=0;
    let turnament = Number(input[index])
     index++;
    let score= Number(input[index]);
    index++;
    let sum=0;
    let wins=0;
    let average=0;
    for (i=0;i<turnament;i++){
        let currentTournament= input[index];
        
        if(currentTournament==="W"){
            sum+=2000;
            average++; 
            wins++;
        }
        else if(currentTournament==="F"){
            sum+=1200;
            average++; 
            
        }
        else if(currentTournament==="SF"){
            sum+=720;
            average++; 
            
        }
        index++;
    }
    console.log(`Final points: ${score+sum}`);
    console.log(`Average points: ${Math.floor(sum/average)}`);
    console.log(`${((wins/average)*100).toFixed(2)}%`)

}
tenis (["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])