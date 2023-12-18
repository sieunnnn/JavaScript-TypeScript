function solution(numbers) {
    let values = [
        "zero", "one", "two", "three", "four", "five"
        , "six", "seven", "eight", "nine"
    ]

    values.forEach((value, idx) => {
        numbers = numbers.replaceAll(value, idx);
    })

    return Number(numbers);
}