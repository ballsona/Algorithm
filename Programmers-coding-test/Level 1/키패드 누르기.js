// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    var result = '';
    const lastLoc = {'L':10, 'R':12};
    numbers.forEach(n=>{
        if(n%3 == 1){
            lastLoc['L'] = n;
            result += 'L';
            console.log(n)
        } else if (n%3 == 0 && n != 0){
            lastLoc['R'] = n;
            result += 'R';
            console.log(n)
        } else {
            const [str,loc] = compareDist(n,lastLoc['L'],lastLoc['R'],hand);   
            console.log(n,str,loc)
            lastLoc[str] = loc 
            result += str
        }
    })
    return result
}

function compareDist(n,l,r,hand){
    const target = (n == 0) ? 11 : n;
    const dist = {
        'left': Math.abs((target - (l+1) ) / 3),
        'right': Math.abs((target - (r-1) ) / 3)
    }
    if(dist['left'] > dist['right']){
        return ['R',n]
    } else if (dist['left'] < dist['right']) {
        return ['L',n]
    } else {
        return [hand === 'left'?'L':'R',n]
    }
}