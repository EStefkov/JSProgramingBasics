function fishingBoat(input){
    let buget = Number(input[0]);
    let season=input[1];
    let numF=input[2];
    let boat=0;
    switch(season){
        case "Spring":
            boat= 3000;
            if(numF<=6){
                boat= boat - (boat*0.10);
            }
            else if(numF>6&&numF<=11){
                boat=boat- (boat*0.15);
            }
            else if (numF>=12){
                boat=boat- (boat*0.25);
            }
            if(numF%2==0){
                boat= boat-(boat*0.05);
            }
            ;break;
        case "Summer":
            boat=4200;
            if(numF<=6){
                boat= boat - (boat*0.10);
            }
            else if(numF>6&&numF<=11){
                boat=boat- (boat*0.15);
            }
            else if (numF>=12){
                boat=boat- (boat*0.25);
            }
            if(numF%2==0){
                boat= boat-(boat*0.05);
            }
            ;break;
        case "Autumn":
            boat =4200;
            if(numF<=6){
                boat= boat - (boat*0.10);
            }
            else if(numF>6&&numF<=11){
                boat=boat- (boat*0.15);
            }
            else if (numF>=12){
                boat=boat- (boat*0.25);
            }
           ;break;
        case "Winter":
            boat =2600;
            if(numF<=6){
                boat= boat - (boat*0.10);
            }
            else if(numF>6&&numF<=11){
                boat=boat- (boat*0.15);
            }
            else if (numF>=12){
                boat=boat- (boat*0.25);
            }
            if(numF%2==0){
                boat= boat-(boat*0.05);
            }
            ;break;
    }
    let diff= Math.abs(buget-boat).toFixed(2);
    if(buget>=boat){
        console.log(`Yes! You have ${diff} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${diff} leva.`);
    }
}fishingBoat(["3600",

"Autumn",

"6"])