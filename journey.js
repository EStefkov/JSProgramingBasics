function journey(input){
    let buget = Number(input[0]);
    let season= input[1];
    let place;
    let cost=0;
    let type;
    switch (season){
        case"summer": 
        if(buget<=100){
            place = "Bulgaria";
            cost=buget*0.30;
            type="Camp";

        }
        else if(buget>100 && buget<=1000){
            place = "Balkans";
            cost =buget*0.40;
            type="Camp";
        }
        else if(buget>1000){
            place = "Europe";
            cost=buget*0.90;
            type="Hotel";
        }
        ;break;
        case"winter": 
        type="Hotel";
        if(buget<=100){
            place = "Bulgaria";
            cost=buget*0.70;
            

        }
        else if(buget>100 && buget<=1000){
            place = "Balkans";
            cost=buget*0.80;
        }
        else if(buget>1000){
            place = "Europe"; 
            cost=buget*0.90;   
        }
        ;break;
    }
    
    console.log(`Somewhere in ${place}`);
    console.log(`${type} - ${cost.toFixed(2)}`);
}
journey (["1500", "summer"])