function sumStr(input){
    let entry=(input[0]);
    sum=0;
    for (let i=0;i<entry.length;i++){
        sum+=Number(entry[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}sumStr(["564891"])