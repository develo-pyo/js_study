//클로져 실제 사용 케이스 1
//closure를 사용하여 private 흉내내기
var counter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
};

var counter1 = counter();
var counter2 = counter();

console.log(counter1.value()); /* 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* 2 */
counter1.decrement();
console.log(counter1.value()); /* 1 */
console.log(counter2.value()); /* 0 */