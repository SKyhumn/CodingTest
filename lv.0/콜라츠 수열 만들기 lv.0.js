function solution(n) {
    var answer = [n];
    while(n!=1){
        if(Math.round(n%2)==0){
            n=Math.floor(n/2);
        }
        else{
            n=3*n+1;
        }
        answer.push(n);
    }
    return answer;
}
