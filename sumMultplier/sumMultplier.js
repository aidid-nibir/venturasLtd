const sumMultuplier = (arr) => {
    let result = "NO";
    let grandTotal = 0;
    arr.map((el) => {
        grandTotal += el;
    });
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] > grandTotal * 2) {
                result = "YES";
            }
        }
    }
    console.log(result);
}
sumMultuplier([1, 2, 3, 9, 9])