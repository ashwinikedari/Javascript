/**INHERITANCE USING PROTOTYPE START */
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

/**INHERITANCE USING PROTOTYPE END */

/**INHERITANCE USING CLASS START */

class Person1 {
    constructor(first, last, age, gender, interests){
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests
    }

    greeting(){
        console.log(`Hi, i am ${this.name.first}`)
    }

    farewell(){
        console.log(`${this.name.first} has left the building. Bye for now!`)
    }
}

let han = new Person1('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leia = new Person1('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();


class Teacher1 extends Person1{
    constructor(first, last, age, gender, interests, subject, grade){
        super(first, last, age, gender, interests);
        this.subject = subject;
        this.grade = grade;
    }
}

let snape = new Teacher1('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
console.log(snape.age);
console.log(snape.subject);

/**INHERITANCE USING CLASS END */