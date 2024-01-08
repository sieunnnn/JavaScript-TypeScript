function solution(polynomial) {
    const arr = polynomial.split(" + ");
    let sumOfX = 0;
    let sumOfNumber = 0;
    let answer = [];

    arr.forEach((n) => {
        if (n.includes("x")) {
            const strVal = n.replace("x", "") || "1";
            sumOfX += parseInt(strVal, 10);
        } else {
            sumOfNumber += parseInt(n);
        }
    });

    if (sumOfX) answer.push(`${sumOfX === 1 ? "" : sumOfX}x`);
    if (sumOfNumber) answer.push(sumOfNumber);
    return answer.join(" + ");
}