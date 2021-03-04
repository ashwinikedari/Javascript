let user = {"name": "Ashwini"};
let b = {printName:function(){
    return console.log(this.name);
}}

b.printName.call(user);