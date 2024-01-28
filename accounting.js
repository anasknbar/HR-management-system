let marketingArray =  JSON.parse(localStorage.getItem('marketing')) || []
let administrationArray = JSON.parse(localStorage.getItem('admin.')) || [] ;
let financeArray = JSON.parse(localStorage.getItem('finance')) || []
let webArray = JSON.parse(localStorage.getItem('web')) || []


//--------------------------------------------------------------------------------------//
const administrationEmployeeNumber = document.getElementById('administrationEmployeeNumber')
const totalAdmintrationSalary = document.getElementById('totalAdmintrationSalary')
const AverageAdminstrationSalary = document.getElementById('averageAdminstrationSalary')

administrationEmployeeNumber.innerHTML = administrationArray.length
totalAdmintrationSalary.innerHTML = administrationStatistics()
AverageAdminstrationSalary.innerHTML = administrationStatistics()/(administrationArray.length || 1)
//--------------------------------------------------------------------------------------//
const marketingEmployeeNumber = document.getElementById('marketingEmployeeNumber')
const totalMarketingSalary = document.getElementById('totalMarketingSalary')
const averageMarketingSalary = document.getElementById('averageMarketingSalary')

marketingEmployeeNumber.innerHTML = marketingArray.length
totalMarketingSalary.innerHTML = marketingStatistics()
averageMarketingSalary.innerHTML = Math.round(marketingStatistics()/(marketingArray.length || 1))
//--------------------------------------------------------------------------------------//
const webEmployeeNumber = document.getElementById('webEmployeeNumber')
const totalwebSalary = document.getElementById('totalwebSalary')
const averageWebsalary = document.getElementById('averageWebsalary')

webEmployeeNumber.innerHTML = webArray.length
totalwebSalary.innerHTML = webStatistics()
averageWebsalary.innerHTML = Math.round( webStatistics()/(webArray.length || 1))


//--------------------------------------------------------------------------------------//
const financeEmployeeNumber = document.getElementById('financeEmployeeNumber')
const totalFinanceSalary = document.getElementById('totalFinanceSalary')
const averageFinanceSalary = document.getElementById('averageFinanceSalary')

financeEmployeeNumber.innerHTML = financeArray.length
totalFinanceSalary.innerHTML = financeStatistics()
averageFinanceSalary.innerHTML = Math.round( financeStatistics()/(financeArray.length || 1))
//--------------------------------------------------------------------------------------//

const totalEmployeeNumbre = document.getElementById('totalEmployeeNumbre')
const totalEmployeeSalary = document.getElementById('totalEmployeeSalary')
const averageEmployeeSalary = document.getElementById(`averageEmployeeSalary`)

totalEmployeeNumbre.innerHTML = administrationArray.length + marketingArray.length+financeArray.length +webArray.length
totalEmployeeSalary.innerHTML = administrationStatistics() + marketingStatistics() +  webStatistics() + financeStatistics()
averageEmployeeSalary.innerHTML = Math.round((administrationStatistics()/(administrationArray.length || 1) + marketingStatistics()/(marketingArray.length || 1) + webStatistics()/(webArray.length || 1) + financeStatistics()/(financeArray.length || 1))/((administrationArray.length + marketingArray.length+financeArray.length +webArray.length)||1)
) 






console.log(administrationStatistics())
console.log(marketingStatistics())
console.log(webStatistics())
console.log(financeStatistics())



function administrationStatistics(){
  let totallSalary = 0

  for(let admin of administrationArray){
    totallSalary += parseInt(admin.employeeSalary)
  }
  
  return totallSalary
}
function marketingStatistics(){
  let totallSalary = 0

  for(let market of marketingArray){
    totallSalary += parseInt(market.employeeSalary)
  }
  
  return totallSalary
}
function webStatistics(){
  let totallSalary = 0

  for(let web of webArray){
    totallSalary += parseInt(web.employeeSalary)
  }
  
  return totallSalary
}
function financeStatistics(){
  let totallSalary = 0

  for(let finance of financeArray){
    totallSalary += parseInt(finance.employeeSalary)
  }
  
  return totallSalary
}