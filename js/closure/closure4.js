//클로져 실제 사용 케이스 2

var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // 외부 함수 범위 (outer functions scope)
      return function(d){
        // 지역 범위 (local scope)
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// 익명 함수 없이 작성할 수도 있다.

// 전역 범위 (global scope)
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // 외부 함수 범위 (outer functions scope)
      return function sum4(d){
        // 지역 범위 (local scope)
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20