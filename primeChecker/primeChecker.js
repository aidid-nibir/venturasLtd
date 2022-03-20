function isPrime(num) {
    let result = "";
    if (num < 2) result = "false";

    for (let k = 2; k < num; k++) {
        if (num % k == 0) {
            result = "false";
        }
    }
    result = "true";
    console.log(result);
}
isPrime(901);