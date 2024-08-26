//Declaring Class in javascript
class Employee{

    //Initializing  an Object
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
    //Declaring method

    details(){
        console.log(this.id+" "+this.name+"<br>")
    }
}
//passing object to a variable   
var e1=new Employee(101,"Vineet");
var e2=new Employee(102, "Tejas");
e1.details(); //calling method
e2.details();
