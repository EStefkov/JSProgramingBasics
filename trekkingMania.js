function trakkingMania(input){
    let index=0;
    
    let numOfGroups=Number(input[index]);
    let peopleMusala=0;
    let peopleMonblan=0;
    let peopleKili=0;
    let peopleK2=0;
    let peopleEve=0;
    let procentMusa=0;
    let procentMonblan=0;
    let procentKili=0;
    let procentK2=0;
    let procentEVE=0;
    index++;
    let sum=0;
    for(let i=0;i<numOfGroups;i++){
        let count= Number(input[index]);
        sum+=Number(input[index]);
        
        if(count<=5){
            peopleMusala+=count;
            
        }
        else if(count>=6 && count<=12){
            peopleMonblan+=count;
        }
        else if(count>=13 && count<=25){
            peopleKili+=count;
        }
        else if(count>=26 && count<=40){
            peopleK2+=count;
        }
        else{
            peopleEve+=count;
        }
        index++;
    }
    procentMusa= (peopleMusala/sum)*100
    console.log(`${procentMusa.toFixed(2)}%`);
    procentMonblan=(peopleMonblan/sum)*100;
    console.log(`${procentMonblan.toFixed(2)}%`);
    procentKili=(peopleKili/sum)*100;
    console.log(`${procentKili.toFixed(2)}%`);
    procentK2=(peopleK2/sum)*100;
    console.log(`${procentK2.toFixed(2)}%`);
    procentEVE=(peopleEve/sum)*100;
    console.log(`${procentEVE.toFixed(2)}%`);

}trakkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

