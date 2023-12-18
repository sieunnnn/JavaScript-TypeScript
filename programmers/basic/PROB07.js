function solution(my_str, n) {
    let strArr = my_str.split("");
    let answer = [];

    while(strArr.length > 0){
        answer.push(strArr.splice(0, n).join(""));
    }

    return answer;
}