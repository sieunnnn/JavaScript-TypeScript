function solution(score) {
    let averages = score.map(s => (s[0] + s[1]) / 2);
    let sortedAvgs = [...averages].sort((a, b) => b - a);
    let ranks = [];
    let currentRank = 1;

    for (let i = 0; i < sortedAvgs.length; i++) {
        if (ranks[sortedAvgs[i]] === undefined) {
            ranks[sortedAvgs[i]] = currentRank;
        }
        currentRank++;
    }

    let answer = averages.map(avg => ranks[avg]);
    return answer;
}
