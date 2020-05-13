//closure 실수 사례
// var arr=[]
// function test(){
//     for(var i=0; i<5; i++){
//         arr[i] = function(){
//             return i;
//         }
//     }
// }
// test();
// for(var i in arr){
//     console.log(arr[i]());
// }


//위의 문제를 수정 1 : let
// var arr=[]
// function test(){
//     for(var i=0; i<5; i++){
//         let ii = i;
//         arr[ii] = function(){
//                 return ii;
//             }
//     }
// }
// test();
// for(var i in arr){
//     console.log(arr[i]());
// }

//위의 문제를 수정 2 : inner function
// var arr=[]
// function test(){
//     for(var i=0; i<5; i++){
//         arr[i] = (function(id){
//                 return function(){
//                     return id;
//                 }
//             })(i);
//     }
// }
// test();
// for(var i in arr){
//     console.log(arr[i]());
// }

//위 문제를 수정 3 : callback
var arr=[]

function callback(id){
    return function(){
        return id;
0    }    
}

function test(){
    for(var i=0; i<5; i++){
        arr[i] = callback(i);
    }
}

test();
for(var i in arr){
    console.log(arr[i]());
}

