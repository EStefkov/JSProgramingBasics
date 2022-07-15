function libriry(input){
    let index=0;
    let bookLokingFor= input[0];
    index++;
    let curentBook=input[index];
    let chekedbooks=0;
    
    while(curentBook!=="No More Books" ){
        
        
        curentBook=input[index];
        if(curentBook=== "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${chekedbooks} books.`);
            break;
        }
        else if(curentBook===bookLokingFor){
            console.log(`You checked ${chekedbooks} books and found it.`);
            break;
        }
        index++;
        chekedbooks +=1;
    }
} libriry (["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



