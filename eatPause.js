function pause(input){
    let nameOfS=(input[0]);
    let timeOfS=Number(input[1]);
    let eBreak =Number(input[2]);
    let timeForE= eBreak/8;
    let timeForR=eBreak/4;
    let leftTime= eBreak -timeForE - timeForR;
    
    if(leftTime>=timeOfS){
        let finalTime= leftTime-timeOfS;
        console.log(`You have enough time to watch ${nameOfS} and left with ${Math.ceil(finalTime)} minutes free time.`)
    }
    else {
        let finalTime= timeOfS - leftTime;
        console.log(`You don't have enough time to watch ${nameOfS}, you need ${Math.ceil(finalTime)} more minutes`)
    }

}
pause(["Teen Wolf",

"48",

"60"])