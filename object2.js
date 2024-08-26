var empData=["Sonoo","Vimal","Ratan"];  
for(i=0;i<empData.length;i++){
    console.log(empData[i]);
}

var i;
var emp=new Array();
emp[0]="Arun";
emp[1]="Vivek";
emp[2]="John";
console.log("----------------------------------------")

for(i=0;i<emp.length; i++){
    console.log(emp[i]);

}
console.log("----------------------------------------")

var str="javascript";  
console.log(str.charAt(3))


var s1="javascript from javatpoint indexof";  
console.log("----------------------------------------")

var n= s1.indexOf("x");
console.log(n);
console.log("----------------------------------------")

var s1="abcdefgh";  
var s2= s1.slice(2,4);
console.log(s2);

console.log("----------------------------------------")
var s1="  _   javascript trim _   ";  
var s3= s1.trim(" ");
console.log(s3);
console.log("----------------------------------------")

var str="This is JavaTpoint website";  
var str3= str.split(" ");
console.log(str3);
console.log("----------------------------------------")

var time= new time();
var date=new Date();
var day= date.getDate();
var month= date.getMonth()+1;
var year= date.getFullYear();
console.log("Date is: "+day+"/"+month+"/"+year+ "Time is: "+time);
