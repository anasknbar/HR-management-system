'use strict';
const employeeForm = document.getElementById("employeeForm")
const employeeName = document.getElementById("employeeName")
const department = document.getElementById('department')
const level = document.getElementById("level")
const salary = document.getElementById("salary")
const email = document.getElementById("email")
const image = document.getElementById('img')





// let marketingArray = []
// let administrationArray = []
// let financeArray = []
// let webArray = []

let marketingArray = loadFromLocalStorage('marketingArray') || [];//*
let administrationArray = loadFromLocalStorage('administrationArray') || [];
let financeArray = loadFromLocalStorage('financeArray') || [];
let webArray = loadFromLocalStorage('webArray') || [];//*

function loadFromLocalStorage(key) { //*
  const data = localStorage.getItem(key); // there is data >>> true or there is no data >>> null >>> false 
  return data ? JSON.parse(data) : null; // 'data' >> true

}
render()

// let uniqueIdArray = []

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
 
  const employee = new EmployeeInfo(`${employeeName.value}`,`${department.value}`,`${level.value}`,`${employeesalary(level.value)}`,`${email.value}`,`${uniqueId()}`,`${employeesalary()}`)

  updateLocalStorage();
  
  render()

  
  
})

function updateLocalStorage() {
  saveToLocalStorage('marketingArray', marketingArray);
  saveToLocalStorage('administrationArray', administrationArray);
  saveToLocalStorage('financeArray', financeArray);
  saveToLocalStorage('webArray', webArray);
}
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


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
  let html = ''
  if(department.value === 'Marketing'){
    for(let employee of marketingArray){
    
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
    clearForm()


  } else if(department.value === 'Administration'){
    for(let employee of administrationArray){
    
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
    document.getElementById('administration').innerHTML = html
    clearForm()
    
  } else if(department.value === 'Web Development'){
    for(let employee of webArray){
    
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
    document.getElementById('web').innerHTML = html
    clearForm()
  }
}