function house(input){
    let flowers=input[0];
    let number = Number(input[1]);
    let buget = Number(input[2]);
    let resolt=0;
    let numFlower=0;
    if (flowers ==="Roses"){
        numFlower = number *5.00;
        if(number>80){
            numFlower = numFlower-(numFlower *0.10);
            if (numFlower<= buget){
                resolt = buget - numFlower;
                console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
            }
            else{
                resolt = numFlower - buget;
                console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
            }
        }
        else {
     
        if (numFlower<= buget){
            resolt = buget - numFlower;
            console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
        }
        else{
            resolt = numFlower - buget;
            console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
        }
    }
        
    } else if( flowers === "Dahlias"){
        numFlower = number *3.80;
    if (number>90){
        numFlower = numFlower - (numFlower*0.15);
        if(numFlower<=buget){
            resolt = buget - numFlower;
            console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
        }
        else{
            resolt = numFlower - buget;
            console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
        }
    }
    else{
        if (numFlower<= buget){
            resolt = buget - numFlower;
            console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
        }
        else{
            resolt = numFlower - buget;
            console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
        }
    }
    } else if (flowers ==="Tulips"){
        numFlower = number *2.80;
        if(number>80){
            numFlower = numFlower - (numFlower*0.15);
            if(numFlower<=buget){
                resolt = buget - numFlower;
                console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
            }
            else{
                resolt = numFlower - buget;
                console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
            }
        }
        else{
            if (numFlower<= buget){
                resolt = buget - numFlower;
                console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
            }
            else{
                resolt = numFlower - buget;
                console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
            }
        }

    } else if (flowers ==="Narcissus"){
        numFlower = number *3;
        if (number<120){
            numFlower = numFlower + (numFlower*0.15);
            if(numFlower<=buget){
                resolt = buget - numFlower;
                console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
            }
            else{
                resolt = numFlower - buget;
                console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
            }
        }
        else{
            if (numFlower<= buget){
                resolt = buget - numFlower;
                console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
            }
            else{
                resolt = numFlower - buget;
                console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
            }
        }

    } else if (flowers === "Gladiolus"){
        numFlower = number *2.50;
        if (number<120){
            numFlower = numFlower + (numFlower*0.20);
            if(numFlower<=buget){
                resolt = buget - numFlower;
                console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
            }
            else{
                resolt = numFlower - buget;
                console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
            }
        }
        else{
            if (numFlower<= buget){
                resolt = buget - numFlower;
                console.log(`Hey, you have a great garden with ${number} ${flowers} and ${resolt.toFixed(2)} leva left.`);
            }
            else{
                resolt = numFlower - buget;
                console.log(`Not enough money, you need ${resolt.toFixed(2)} leva more.`);
            }
        }

    }

}house(["Gladiolus", "119", "360"])