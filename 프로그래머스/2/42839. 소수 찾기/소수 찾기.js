function solution(numbers) {
    numbers = numbers.split("");
    var number_list = new Set();
    var visited = Array(numbers.length).fill(false);
    for (var i = 1; i <= numbers.length; i++) {
        dfs(numbers, visited, "", number_list, i)
    }
    console.log(number_list)
    var answer = 0;
    for (number of number_list) {
        if (isPrime(number)) answer += 1;
    }
    return answer;
}

function dfs(numbers, visited, number, number_list, length) {
    for (var i = 0; i < numbers.length; i++) {
        if (number.length === length) {
            number_list.add(parseInt(number));
            return;
        }
        if (!visited[i]) {
            visited[i] = true;
            dfs(numbers, visited, number+numbers[i], number_list, length);
            visited[i] = false;
        }
    }
}

function isPrime(number) {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number%i === 0) return false;
    }
    return true;
}