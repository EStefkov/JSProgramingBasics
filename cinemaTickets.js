function cinemaTickets(input){
    let index=0
    let nameOfFilm= input[index];
    index++;
    let freeSpace =Number(input[index]);
    index++
    let typeOfTicket='';
    let standartTickets=0;
    let totalTickets=0;
    let kidTickets=0;
    let studentTickets=0;
    let totalKidTickets=0;
    let totalStudentTickets=0;
    let totalStandartTickets=0;

    let soldTickets=0;
    while (nameOfFilm !== "Finish"){
       while(freeSpace>totalTickets){
        
        typeOfTicket = input[index];
        index++;
        if (typeOfTicket === "standard"){
        standartTickets ++;
        totalTickets++;
    }
        else if(typeOfTicket === "kid"){
        kidTickets ++;
        totalTickets++;
    }
        else if (typeOfTicket==="student"){
            studentTickets++;
            totalTickets++
        }
        else if(typeOfTicket ==="End"){
            break;
        }

    }
    let percent = ((standartTickets + studentTickets + kidTickets)*100)/ freeSpace;
    console.log(`${nameOfFilm} - ${percent.toFixed(2)}% full.`);

    nameOfFilm= input[index];
    index++;
    soldTickets += totalTickets;
    totalTickets= 0;
    totalKidTickets +=kidTickets;
    kidTickets=0;
    totalStandartTickets += standartTickets;
    standartTickets=0;
    totalStudentTickets += studentTickets;
    studentTickets =0;

    freeSpace=Number(input[index]);
    index++;
    
    
}
  percentStudent = (totalStudentTickets * 100) / soldTickets;
  percentKids = (totalKidTickets * 100) / soldTickets;
  percentStandard = (totalStandartTickets * 100) /  soldTickets;
  //
  console.log(`Total tickets: ${soldTickets}`);
  console.log(`${percentStudent.toFixed(2)}% student tickets.`);
  console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
  console.log(`${percentKids.toFixed(2)}% kids tickets.`);
}cinemaTickets (["Shutter Island"
,"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Rush",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Deadpool",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Finish"
   
   ])