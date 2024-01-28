'use strict';
const employeeForm = document.getElementById("employeeForm")
const employeeName = document.getElementById("employeeName")
const department = document.getElementById('department')
const level = document.getElementById("level")
const salary = document.getElementById("salary")
const email = document.getElementById("email")
const image = document.getElementById('img')







let marketingArray =  JSON.parse(localStorage.getItem('marketing')) || []
let administrationArray = JSON.parse(localStorage.getItem('admin.')) || [] ;
let financeArray = JSON.parse(localStorage.getItem('finance')) || []
let webArray = JSON.parse(localStorage.getItem('web')) || []


render()





function EmployeeInfo(fullName,department,employeeLevel,employeeSalary,employeeEmail,employeeId){
  this.fullName = fullName
  this.department = department
  this.employeeLevel = employeeLevel.toLowerCase()
  this.employeeSalary = employeeSalary
  this.employeeEmail = employeeEmail
  this.employeeId = employeeId
  
  if(this.department === 'Marketing'){
    
    marketingArray.push(this)
    console.log(marketingArray)
  } else if(this.department === 'Finance'){
    financeArray.push(this)
    console.log( financeArray)
  } else if(this.department === 'Administration'){
    administrationArray.push(this)
    console.log( administrationArray)
  } else if(this.department === 'Web Development'){
    webArray.push(this)
    console.log(webArray)
  }
  

}
employeeForm.addEventListener('submit',function(e){
   e.preventDefault()
 
  const employee = new EmployeeInfo(`${employeeName.value}`,`${department.value}`,`${level.value}`,`${employeesalary(level.value)}`,`${email.value}`,`${uniqueId()}`,`${employeesalary()}`)

  // updateLocalStorage();
  localStorage.setItem('marketing',JSON.stringify(marketingArray))
  localStorage.setItem('finance',JSON.stringify(financeArray))
  localStorage.setItem('web',JSON.stringify(webArray))
  localStorage.setItem('admin.',JSON.stringify(administrationArray))

  
 render()

  
  
})











function uniqueId(){
  const id = Math.floor(1000 + Math.random() * 9000)
  
  return id
}
function employeesalary(level) {
  if(level === 'Senior'){
    return Math.floor(Math.random()*(2000-1500 + 1))+1500
  } else if ( level === 'Mid-Senior'){
    return Math.floor(Math.random()*(1500-1000 + 1))+1000
  } else if( level === 'Junior'){
    return Math.floor(Math.random()*(1000-500 + 1))+500
  }
}

function clearForm() {
  let form = document.getElementById("employeeForm");
  let elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    
    if (element.tagName === "INPUT") {
      element.value = "";  
    }
  }
}

function render(){
  
  if(marketingArray.length){
    let html = ''
    console.log(marketingArray)
    for(let employee of marketingArray){
    
      html += 
      `<div id="card" class="card">
          <img src="images/pic5.png" alt="&#128532;">
          <ul>
            <li>Name: ${employee.fullName}</li>
            <li>Department: ${employee.department}</li>
            <li>Level: ${employee.employeeLevel}</li>
            <li>Salary: ${employee.employeeSalary}</li>
            <li>Email: ${employee.employeeEmail}</li>
            <li>ID: ${employee.employeeId}</li>
            
          </ul>
       </div>
    `
  
    
    }

    document.getElementById('marketing').innerHTML = html
    clearForm()
  }  if(financeArray.length){
    let html = ''
    console.log(financeArray)
    for(let employee of financeArray){
    
      html += 
      `<div id="card" class="card">
          <img src="images/pic5.png" alt="">
          <ul>
            <li>Name: ${employee.fullName}</li>
            <li>Department: ${employee.department}</li>
            <li>Level: ${employee.employeeLevel}</li>
            <li>Salary: ${employee.employeeSalary}</li>
            <li>Email: ${employee.employeeEmail}</li>
            <li>ID: ${employee.employeeId}</li>
          </ul>
       </div>
    `
    }
    document.getElementById('finance').innerHTML = html
    clearForm()


  }  if(administrationArray.length){
    let html = ''
    console.log(administrationArray)
    for(let employee of administrationArray){
    
      html += 
      `<div id="card" class="card">
          <img src="images/pic5.png" alt="">
          <ul>
            <li>Name: ${employee.fullName}</li>
            <li>Department: ${employee.department}</li>
            <li>Level: ${employee.employeeLevel}</li>
            <li>Salary: ${employee.employeeSalary}</li>
            <li>Email: ${employee.employeeEmail}</li>
            <li>ID: ${employee.employeeId}</li>
            
          </ul>
       </div>
    `
    }
    document.getElementById('administration').innerHTML = html
    clearForm()
    
  }  if(webArray.length){
    let html = ''
    console.log(webArray)
    for(let employee of webArray){
    
      html += 
      `<div id="card" class="card">
          <img src="images/pic5.png" alt="">
          <ul>
            <li>Name:${employee.fullName}</li>
            <li>Department: ${employee.department}</li>
            <li>Level: ${employee.employeeLevel}</li>
            <li>Salary: ${employee.employeeSalary}</li>
            <li>Email: ${employee.employeeEmail}</li>
            <li>ID: ${employee.employeeId}</li>
            
          </ul>
       </div>
    `
    }
    document.getElementById('web').innerHTML = html
    clearForm()
  }
}




