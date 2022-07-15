function swiming(input){
    let rSec = Number(input[0]);
    let space = Number(input[1]);
    let timeSec= Number(input[2]);

    let time = space * timeSec;
    let slow = Math.floor(space / 15);
    time += (slow*12.5);
    if(time <rSec){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    else {
        let diff= time - rSec;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
swiming(["10464",

"1500",

"20"])