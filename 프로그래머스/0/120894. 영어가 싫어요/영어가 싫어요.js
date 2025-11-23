function solution(numbers) {
    var numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (var i = 0; i < 10; i++) {
        numbers = numbers.replaceAll(numberWords[i], i);
    }
    return numbers*1;
}