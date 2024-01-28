let marketingArray =  JSON.parse(localStorage.getItem('marketing')) || []
let administrationArray = JSON.parse(localStorage.getItem('admin.')) || [] ;
let financeArray = JSON.parse(localStorage.getItem('finance')) || []
let webArray = JSON.parse(localStorage.getItem('web')) || []


//--------------------------------------------------------------------------------------//
const administrationEmployeeNumber = document.getElementById('administrationEmployeeNumber')
const totalAdmintrationSalary = document.getElementById('totalAdmintrationSalary')
const AverageAdminstrationSalary = document.getElementById('averageAdminstrationSalary')

administrationEmployeeNumber.innerHTML = administrationArray.length
totalAdmintrationSalary.innerHTML = administrationSalary()
AverageAdminstrationSalary.innerHTML = administrationSalary()/(administrationArray.length || 1)
//--------------------------------------------------------------------------------------//
const marketingEmployeeNumber = document.getElementById('marketingEmployeeNumber')
const totalMarketingSalary = document.getElementById('totalMarketingSalary')
const averageMarketingSalary = document.getElementById('averageMarketingSalary')

marketingEmployeeNumber.innerHTML = marketingArray.length
totalMarketingSalary.innerHTML = marketingSalary()
averageMarketingSalary.innerHTML = Math.round(marketingSalary()/(marketingArray.length || 1))
//--------------------------------------------------------------------------------------//
const webEmployeeNumber = document.getElementById('webEmployeeNumber')
const totalwebSalary = document.getElementById('totalwebSalary')
const averageWebsalary = document.getElementById('averageWebsalary')

webEmployeeNumber.innerHTML = webArray.length
totalwebSalary.innerHTML = webSalary()
averageWebsalary.innerHTML = Math.round( webSalary()/(webArray.length || 1))


//--------------------------------------------------------------------------------------//
const financeEmployeeNumber = document.getElementById('financeEmployeeNumber')
const totalFinanceSalary = document.getElementById('totalFinanceSalary')
const averageFinanceSalary = document.getElementById('averageFinanceSalary')

financeEmployeeNumber.innerHTML = financeArray.length
totalFinanceSalary.innerHTML = financeSalary()
averageFinanceSalary.innerHTML = Math.round( financeSalary()/(financeArray.length || 1))
//--------------------------------------------------------------------------------------//

const totalEmployeeNumbre = document.getElementById('totalEmployeeNumbre')
const totalEmployeeSalary = document.getElementById('totalEmployeeSalary')
const averageEmployeeSalary = document.getElementById(`averageEmployeeSalary`)

totalEmployeeNumbre.innerHTML = totallEmployeeNumber()
totalEmployeeSalary.innerHTML = totalSalary()
averageEmployeeSalary.innerHTML = Math.round(totalSalary() / (totallEmployeeNumber()||1)) 









function totalSalary(){
  return (administrationSalary() + marketingSalary() + webSalary() + financeSalary())
}

function totallEmployeeNumber(){
  return administrationArray.length + marketingArray.length+financeArray.length +webArray.length 
}


function administrationSalary(){
  let totallSalary = 0

  for(let admin of administrationArray){
    totallSalary += parseInt(admin.employeeSalary)
  }
  
  return totallSalary
}
function marketingSalary(){
  let totallSalary = 0

  for(let market of marketingArray){
    totallSalary += parseInt(market.employeeSalary)
  }
  
  return totallSalary
}
function webSalary(){
  let totallSalary = 0

  for(let web of webArray){
    totallSalary += parseInt(web.employeeSalary)
  }
  
  return totallSalary
}
function financeSalary(){
  let totallSalary = 0

  for(let finance of financeArray){
    totallSalary += parseInt(finance.employeeSalary)
  }
  
  return totallSalary
}