//a function named carLoanPayment that takes 3 arguments and returns the monthly payment to the main program

function carLoanPayment(amount, timeFrame, rate){
  monthlyInterest = (rate/12)/100
  dollar1 = ((1+monthlyInterest)**timeFrame -1)/(monthlyInterest*(1+monthlyInterest))
  payment1 = amount/dollar1
  return payment1
  }
  
//a function named homeLoanPayment that takes 3 arguments and returns the monthly payment to the main program
//term can only be 15 or 30 years

function homeLoanPayment(amount, timeFrame, rate){
  monthlyInterest = (rate/12)/100
  month = timeFrame * 12
  dollar2 = ((1+monthlyInterest)**month -1)/(monthlyInterest*(1+monthlyInterest))
  payment2 = amount/dollar2
  return payment2
  }
  
//main program that asks the user which calculator they want to use, gets their data and calls the function

let monthlyPayment = 0
let loop = prompt("Would you like to use the calculator? (Yes or No)")
while (loop == 'Yes'){
let calculatorChoice = alert(prompt("Would you like to use the car or home calculator?"))
let dollarAmount = alert(Number(prompt("What is the dollar amount of the loan?")))
let timeFrame = alert(Number(prompt("If you chose car loan, what is the timeframe in months? If you chose a home loan, is your time frame 15 or 30 years?")))
let interest = alert(Number(prompt("Please input your interest rate.")))

//main program that gets the answer back from the function and outputs it to an alert

if (calculatorChoice = "car"){
  monthlyPayment = Number(carLoanPayment(dollarAmount, timeFrame,interest))
  alert(`A car loan for ${dollarAmount} over ${timeFrame} at ${interest} would have a monthly payment of ${monthlyPayment}`)
}else if (calculatorChoice = "home"){
  monthlyPayment = Number(homeLoanPayment(dollarAmount, timeFrame,interest))
  alert(`A home loan for ${dollarAmount} over ${timeFrame} at ${interest} would have a monthly payment of ${monthlyPayment}`)
} else {alert("Unable to calculate amount at this time.")}
  
}
//ends loop

//The program must keep running until the user says they want to stop running it at the loop variable




