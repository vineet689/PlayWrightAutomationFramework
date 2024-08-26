
//object creation
emp={id:102,name:"Shyam Kumar",salary:40000}  
console.log(emp.id+" "+emp.name+" "+emp.salary); 

//Object creation by new keyword
var emp2=new Object();
emp2.id= 100;
emp2.name="Vineet";
emp2.salary=50000;
console.log("The object data is: "+emp2.id+ " "+emp2.name+" "+emp2.salary);

//Defining function
function emp1(id, name, salary){
    this.id=id;
    this.name=name;
    this.salary=salary;

    this.changeSalary=changeSalary;

    function changeSalary(otherSalary){
        this.salary=otherSalary;

    }
}
e=new emp1(1001, "VineetSharma", 5000000);
console.log("By Function: "+e.id+" "+e.name+" "+e.salary);
e.changeSalary(4500000);
console.log("By Function: "+e.id+" "+e.name+" "+e.salary);

//Array object in JavaScript
 var empData=["Sonoo","Vimal","Ratan"];  
for(i=0; i<empData.length;i++){
    console.log(empData(i))
}
