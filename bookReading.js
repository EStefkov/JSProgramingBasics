function books(input){
    let pages = Number(input[0]);
    let readed = Number(input[1]);
    let days = Number(input[2]);
    let hours = (pages / readed) / days;
    console.log(hours);
}
books(["432 ",

"15 ",

"4 "]);