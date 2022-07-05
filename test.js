function solution(s, n) {
    var answer = '';
    arr=s.split("")

    function check(item,n){
        if ((item)===" "){
            return item.charCodeAt(0)
        }
        else if ((item)==="z"||(item)==="Z"){            
            num= (parseInt(item.charCodeAt(0))-26)+n
            return num
        }
        else{
            num= item.charCodeAt(0)+n
            return num
        }

    }
    for(let i =0 ; i<arr.length;++i){
        arr[i]=String.fromCharCode(check(arr[i],n))    
    }
    answer=arr.join("")
    return answer;
}

console.log(solution("a B z", 4))


