function Employee(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
Employee.prototype.company="JavaScript";
var emp1= new Employee("Vineet", "Sharma");
var emp2= new Employee("Martin","Loother");
console.log(emp1.firstName+ " " +emp1.lastName+ " "+emp1.company+" ");
console.log(emp2.firstName+ " " +emp2.lastName+ " "+emp2.company+" ");





Employee.prototype.fullName=function(){
    return this.lastName+" "+this.firstName;
}
var emp3 = new Employee("Vineet", "Sharma");
var emp4= new Employee("Martin", "Loother");

console.log(emp3.fullName);
console.log(emp4.fullName);
