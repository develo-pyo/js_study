function Person(){
    this.name = 'pyo';
    this.age = 15;
    this.print = function(){
        return 'name is ' + this.name;
    }
}

var person = new Person();
console.log(person.print());
person.name = 'sue';
console.log(person.print());


function ChildPerson(){
    this.gender = 'M';
}

ChildPerson.prototype = new Person();
var childPerson = new ChildPerson();
console.log(childPerson.print());
console.log(childPerson.gender);

childPerson.weight = 5;
console.log(childPerson.weight);

var childPerson2 = new ChildPerson();
console.log(childPerson2.weight);
