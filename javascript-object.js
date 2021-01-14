/*
    Demo : Creating Objects

    ** Define external name and salary information field Employee constructor.
    ** Create calculate the total salary received and the total tax amount received so far in the year.
      Tax brackets
        ** 20% tax up to 20,000
        ** 25% tax up to 30,000
        ** 27% tax after 30,000

*/

function Employee(name,salary){

    if (!(this instanceof Employee)){
        return new Employee(name,salary);
    }
    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth()+1;
    var tax = 0;
    var total=this.salary*month;    

    if (total<=20000){
        tax = total*0.2;
    }else if(total >20000 && total<=30000){
        tax = total * 0.25;
    }else{
        tax = total * 0.3;
    }

    return {
        tax : tax,
        paid : total - tax 
    }
}

var emp1 = Employee('John',3000);
var emp1_salary = emp1.calculateSalary();

console.log(`Name : ${emp1.name}, Tax: ${emp1_salary.tax} Paid: ${emp1_salary.paid}`)

var emp2 = new Employee('Eddie',4000);
var emp2_salary = emp2.calculateSalary();
