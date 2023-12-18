function solution(bin1, bin2) {
    const parseInt1 = parseInt(bin1, 2); // 2 -> 10
    const parseInt2 = parseInt(bin2, 2);
    const answer = (parseInt1 + parseInt2).toString(2); // 10 -> 2
    return answer;
}