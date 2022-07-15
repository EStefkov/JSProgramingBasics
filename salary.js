function salary(input){
    let tabs=Number(input[0])+2;
    let salary=Number(input[1]);
    
    for (let i=2;i<tabs;i++){
        let tabsO=input[i];
        if(tabsO){
        
        if(tabsO==="Facebook"){
            salary=salary-150;
        }else if(tabsO==="Reddit"){
            salary=salary-50;
        }else if(tabsO==="Instagram"){
            salary=salary-100;
        }
    }
    }
    if(salary<=0){
        console.log(`You have lost your salary.`)
    }
    else{
        console.log(salary)
    }
   

}salary

(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


