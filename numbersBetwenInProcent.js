function numbers(input){
    let number=Number(input[0]);
    let countp1=0;
    let countp2=0;
    let countp3=0;
    let countp4=0;
    let countp5=0;
    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;

    for (let i=1;i<=number;i++){
       let numbers = input[i];
       
        if (numbers<200){
             
            countp1+=1;
             p1=(countp1/number)*100;

        }
        else if (numbers>=200 && numbers<=399){
            
            countp2+=1;
             p2=(countp2/number)*100;
        }
        else if(numbers>=400 && numbers<=599){
            
            countp3+=1;
             p3=(countp3/number)*100;
        }
        else if (numbers>=600 && numbers<=799){
            
            countp4+=1;
            p4=(countp4/number)*100;
        }
        else if (numbers>=800){
            
            countp5+=1;
             p5=(countp5/number)*100;
        }
    }
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}numbers(["3",
"1",
"2",
"999"])



