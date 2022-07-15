function oscar(input){
    let index=0
    let nameOfAct=input[index];
    index++;
    let score=Number(input[index]);
    index++;
    let nOfJudge=Number(input[index]);
    index++;

    let hasNominee=false;
    
    for (let i=0;i<nOfJudge;i++){
        let currentJudge= input[index];
        index++;
        let currentPoint=Number(input[index])
        index++;
        
        let total=(currentJudge.length * currentPoint)/2;
        score+= total;
        if (score>=1250.5){
            hasNominee=true;
            console.log(`Congratulations, ${nameOfAct} got a nominee for leading role with ${score.toFixed(1)}!`);
            break;
        }
    }
    if(!hasNominee){
    let diff= Math.abs(score-1250.5);
    console.log(`Sorry, ${nameOfAct} you need ${diff.toFixed(1)} more!`)
    }
}oscar(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
