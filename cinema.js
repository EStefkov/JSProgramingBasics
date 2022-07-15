function ticket(input){
    let ticketType=input[0];
    let rows = Number(input[1]);
    let coloms = Number(input[2]);
    let places = rows*coloms;
    switch(ticketType){
        case "Premiere": console.log((places * 12.00).toFixed(2));break;
        case "Normal": console.log((places * 7.50).toFixed(2));break;
        case"Discount":console.log((places * 5.00).toFixed(2));break;
    }
}
ticket (["Normal", "21", "13"])