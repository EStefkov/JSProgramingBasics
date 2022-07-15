function vacation(input) {
    let index = 0;
    let vacationCost = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    
    let action;
    let dailyMoney;
   
    let spendingDays = 0;
    let totalDays = 0;
   
    while (savedMoney < vacationCost) {
        index++;
      totalDays++;
      action = input[index];
      index++;
      dailyMoney = Number(input[index]);
   
      if (action === "spend") {
        spendingDays++;
        savedMoney -= dailyMoney;
   
        if (spendingDays === 5) {
          console.log("You can't save the money.");
          console.log(totalDays);
          break;
        }
   
        if (savedMoney < 0) {
          savedMoney = 0;
        }
      } else if (action === "save") {
        spendingDays = 0;
        savedMoney += dailyMoney;
   
        if (savedMoney >= vacationCost) {
          console.log(`You saved the money for ${totalDays} days.`);
          break;
        }
      }
     
    }
  }
   vacation (["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10","spend", "10"])