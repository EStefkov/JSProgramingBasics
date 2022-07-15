function nums(input) {
    let tarNum = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1;
    let currentNumber = Number(input[index]);
    while (sumOfNumbers < tarNum) {
        sumOfNumbers += Number(currentNumber);
        index++;
        currentNumber = input[index];
    }
    console.log(sumOfNumbers)
}
nums(["100", "10", "20", "30", "40"])