function clothes(input){
    let temp=Number(input[0]);
    let dayTime=input[1];
    let cloth;
    let shoes;
    switch (dayTime){
        case "Morning":
            if (temp>=10&&temp<=18){
                cloth ="Sweatshirt";
                shoes ="Sneakers";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            }
            else if(temp>18&&temp<=24){
                cloth ="Shirt";
                shoes ="Moccasins";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            }
            else if(temp>24){
                cloth ="T-Shirt";
                shoes ="Sandals";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            };break;
        case "Afternoon":
            if (temp>=10&&temp<=18){
                cloth ="Shirt";
                shoes ="Moccasins";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            }
            else if(temp>18&&temp<=24){
                cloth ="T-Shirt";
                shoes ="Sandals";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            }
            else if(temp>24){
                cloth ="Swim Suit";
                shoes ="Barefoot";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            };break;
        case "Evening":
            if (temp>=10&&temp<=18){
                cloth ="Shirt";
                shoes ="Moccasins";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            }
            else if(temp>18&&temp<=24){
                cloth ="Shirt";
                shoes ="Moccasins";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            }
            else if(temp>24){
                cloth ="Shirt";
                shoes ="Moccasins";
                console.log(`It's ${temp} degrees, get your ${cloth} and ${shoes}.`);
            };break;
    }
}clothes (["22",

"Afternoon"])