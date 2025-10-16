function solution(my_string, num1, num2) {
    return my_string.split("").reduce((a, c, i) => i === num1 ? a+my_string[num2] : i === num2 ? a+my_string[num1] : a+c, "");
}