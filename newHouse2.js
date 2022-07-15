function newHouse(input){
    let flower = input[0];
    let number = Number(input[1]);
    let buget = Number(input[2]);
    let sum=0;
    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    switch(flower){
        case"Roses":
            sum=number*5;
            if(number>80){
                sum=sum*0.90;
            };break;
        case"Dahlias":
        sum=number*3.80;
            if(number>90){
                sum=sum*0.85;
            };break;
        case"Tulips":
        sum=number*2.80;
            if(number>80){
                sum=sum*0.85;
            };break;
        case"Narcissus":
        sum=number*3;
            if(number<120){
                sum=sum + (sum*0.15);
            };break;
        case"Gladiolus":
        sum=number*2.50;
            if(number<80){
                sum=sum + (sum*0.20);
            };break;
    }
    let diff= Math.abs(buget- sum);
    if (sum<=buget){
        console.log(`Hey, you have a great garden with ${number} ${flower} and ${(diff).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money, you need ${(diff).toFixed(2)} leva more.`)
    }
}
newHouse(["Roses",

"55",

"250"])