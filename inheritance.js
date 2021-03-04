// Create an object called Teacher derived from the Person class,
// and implement a method called teach which receives a string called subject, and prints out:
var Person = function(){};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function(){
    return this.name + ',' + this.age + 'years old'
};

var Student = function(){};
Student.prototype = new Person();
Student.prototype.learn = function(subject){
    return console.log( this.name + " just learned " + subject);
}

var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log( this.name + " is now teaching " + subject);
}

var sir = new Teacher();
sir.initialize("Dixit", 57);
sir.teach("OOJS");

