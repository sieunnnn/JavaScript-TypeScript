function solution(array) {
    // array 의 최댓값 만큼의 길이를 가진 새로운 배열 생성
    let newArray = new Array(Math.max(...array)+1).fill(0);
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] += 1
    }

    if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
        return -1
    } else {
        return newArray.indexOf(Math.max(...newArray));
    }
}