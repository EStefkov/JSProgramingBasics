function whi(input) {

    let index = 0;
    let word = input[index];
    while (word !== 'Stop') {
        console.log(word);
        index++
        word = input[index];
    }

} whi(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
