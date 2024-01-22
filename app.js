'use strict';
let employesArray = []
const tableBody = document.getElementById('tableBody')


function EmployeeInfo(employeeId,fullName,department,employeeLevel,employeeImg){
  this.employeeId = employeeId
  this.fullName = fullName
  this.department = department
  this.employeeLevel = employeeLevel.toLowerCase()
  this.employeeImg = employeeImg
  this.salary = this.randomSalary()
  this.netSalary = this.netSalary()
  employesArray.push(this)

}


// prototype function for randomly generated salary
EmployeeInfo.prototype.randomSalary = function(){
  if(this.employeeLevel === 'senior'){  // 
    
    return Math.floor((Math.random() * (2000-1500) + 1)+1500)
     
  }else if(this.employeeLevel === 'mid-senior'){
     
    return Math.floor((Math.random() * (1500-1000) + 1)+1000)

  }else if(this.employeeLevel === 'junior'){
    
    return Math.floor((Math.random() * (1000-500) + 1)+500)

  } else{

    return 0

  } 
}

EmployeeInfo.prototype.netSalary = function(){
  return this.salary - (this.salary * 0.075)
}

// prototype function for rendering the instance in the home page
EmployeeInfo.prototype.renderEmployeeInfo = function(){
  
  tableBody.innerHTML += 
  ` 
  <tr>
  <td>${this.employeeId}</td>
  <td>${this.fullName}</td>
  <td>${this.department}</td>
  <td>${this.employeeLevel}</td>
  <td>${this.employeeImg}</td>

  <td>${this.salary }</td>
  <td>${this.netSalary }</td>
  
</tr>

`
}

const employee1 = new EmployeeInfo(1000,'Ghazi Samer','Administration','Senior','url')
const employee2 = new EmployeeInfo(1001,'Lana Ali','Finance','Senior','url')
const employee3 = new EmployeeInfo(1002,'Tamara Ayoub','Merketing','Senior','url')
const employee4 = new EmployeeInfo(1003,'Safi Walid','Administration','Mid-Senior','url')
const employee5 = new EmployeeInfo(1004,'Omar Zaid','Development','Senior','url')
const employee6 = new EmployeeInfo(1005,'Rana Saleh','Development','Junior','url')
const employee7 = new EmployeeInfo(1006,'Hadi Ahmed','Finance','Mid-Senior','url')


for(let employee of employesArray){
  employee.renderEmployeeInfo()
}




// employee1.renderEmployeeInfo()
// employee1.renderEmployeeInfo()

// employee2.renderEmployeeInfo()
// employee2.renderEmployeeInfo()

// employee3.renderEmployeeInfo()
// employee3.renderEmployeeInfo()






