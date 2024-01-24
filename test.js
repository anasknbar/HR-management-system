'use strict';
const employeeForm = document.getElementById("employeeForm")
const employeeName = document.getElementById("employeeName")
const department = document.getElementById('department')
const level = document.getElementById("level")
const salary = document.getElementById("salary")
const email = document.getElementById("email")





let marketingArray = []
let administrationArray = []
let financeArray = []
let webArray = []


let uniqueIdArray = []

function EmployeeInfo(fullName,department,employeeLevel,employeeSalary,employeeEmail,employeeId){
  this.fullName = fullName
  this.department = department
  this.employeeLevel = employeeLevel.toLowerCase()
  this.employeeSalary = employeeSalary
  this.employeeEmail = employeeEmail
  this.employeeId = employeeId

  if(this.department === 'Marketing'){
    marketingArray.push(this)
  } else if(this.department === 'Finance'){
    financeArray.push(this)
  } else if(this.department === 'Administration'){
    administrationArray.push(this)
  } else if(this.department === 'Web Development'){
    webArray.push(this)
  }
  

}
employeeForm.addEventListener('submit',function(e){
   e.preventDefault()
 
  const employee = new EmployeeInfo(`${employeeName.value}`,`${department.value}`,`${level.value}`,`${salary.value}`,`${email.value}`,`${uniqueId()}`)
  console.log(marketingArray)
  console.log(administrationArray)
  console.log(financeArray)
  console.log(webArray)


  let html = ''
  if(department.value === 'Marketing'){
    for(let employee of marketingArray){
    
      html += 
      `<div id="card" class="card">
      <img src="images/pic1.png" alt="">
      <ul>
        <li>Name:${employee.fullName}</li>
        <li>Department: ${employee.department}</li>
        <li>Level: ${employee.employeeLevel}</li>
        <li>Salary: ${employee.employeeSalary}</li>
        <li>Email : ${employee.employeeEmail}</li>
        <li>ID: ${employee.employeeId}</li>
        
      </ul>
    </div>
    `
  
    
    }
    document.getElementById('marketing').innerHTML = html
    clearForm()
  } else if(department.value === 'Finance'){
    for(let employee of financeArray){
    
      html += 
      `<div id="card" class="card">
      <img src="images/pic5.png" alt="">
      <ul>
        <li>Name:${employee.fullName}</li>
        <li>Department: ${employee.department}</li>
        <li>Level: ${employee.employeeLevel}</li>
        <li>Salary: ${employee.employeeSalary}</li>
        <li>Email : ${employee.employeeEmail}</li>
        <li>ID: ${employee.employeeId}</li>
        
      </ul>
    </div>
    `
  
    
    }
    document.getElementById('finance').innerHTML = html
  } else if(department.value === 'Administration'){
    for(let employee of administrationArray){
    
      html += 
      `<div id="card" class="card">
      <img src="images/pic6.png" alt="">
      <ul>
        <li>Name:${employee.fullName}</li>
        <li>Department: ${employee.department}</li>
        <li>Level: ${employee.employeeLevel}</li>
        <li>Salary: ${employee.employeeSalary}</li>
        <li>Email : ${employee.employeeEmail}</li>
        <li>ID: ${employee.employeeId}</li>
        
      </ul>
    </div>
    `
  
    
    }
    document.getElementById('administration').innerHTML = html
  } else if(department.value === 'Web Development'){
    for(let employee of webArray){
    
      html += 
      `<div id="card" class="card">
      <img src="images/pic3.png" alt="">
      <ul>
        <li>Name:${employee.fullName}</li>
        <li>Department: ${employee.department}</li>
        <li>Level: ${employee.employeeLevel}</li>
        <li>Salary: ${employee.employeeSalary}</li>
        <li>Email : ${employee.employeeEmail}</li>
        <li>ID: ${employee.employeeId}</li>
        
      </ul>
    </div>
    `
  
    
    }
    document.getElementById('web').innerHTML = html
  }
 
 


 


  
})


function uniqueId(){
  const id = Math.floor(1000 + Math.random() * 9000)
  
  return id
}

function clearForm() {
  let form = document.getElementById("employeeForm");
  let elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    // Check if the element is an input field or textarea
    if (element.tagName === "INPUT") {
      element.value = "";  
    }
  }
}