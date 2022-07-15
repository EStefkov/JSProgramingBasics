function hotelRoom(input){
    let month=input[0];
    let numNights=Number(input[1]);
    let studioSum=0;
    let studioNightPrice=0;
    let apaSum=0;
    let apaNightPrice=0;

    switch(month){
        case"May":;
        case"October":
            studioNightPrice=50;
            studioSum = studioNightPrice* numNights;
            apaNightPrice=65;
            apaSum =apaNightPrice* numNights;
        
            if(numNights>=7&&numNights<=14 ){
                studioSum=studioSum-(studioSum*0.05);
            }
            else if(numNights>14){
                studioSum=studioSum-(studioSum*0.30);
                apaSum=apaSum-(apaSum*0.10);
            }
        ;break;
        case"June":;
        case"September":
            studioNightPrice=75.20;
            studioSum =studioNightPrice* numNights;
            apaNightPrice=68.70;
            apaSum =apaNightPrice* numNights;
            if(numNights>14){
                studioSum=studioSum-(studioSum*0.20);
                apaSum=apaSum-(apaSum*0.10);
            }
            
                ;
        ;break;
        case"July":
        case"August":
            studioNightPrice=76;
            studioSum =studioNightPrice* numNights;
            apaNightPrice=77;
            apaSum=apaNightPrice* numNights;
            if (numNights>14){
                apaSum=apaSum-(apaSum*0.10);
            }
        ;break;
    }
    
    console.log(`Apartment: ${apaSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}
hotelRoom(["June", "14"])