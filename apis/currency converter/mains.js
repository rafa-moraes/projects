import {currencies} from './currencies.js'

const fromSelect = document.querySelector('[name="from_currency"]')
const toSelect = document.querySelector('[name="to_currency"]')
const endPoint = 'https://api.exchangeratesapi.io/latest'
const ratesByBase ={}
const form = document.querySelector('form')
const valueToConvert = document.querySelector('[name="valueToConvert"]')
const totalConverted = document.querySelector('.total')


function generateOptions (options){
    return Object.entries(options).map(([currencyCode, currencyName]) =>
        `<option value ="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    ).join("")
    

}
const optionsHTML = generateOptions(currencies)

fromSelect.innerHTML = optionsHTML
toSelect.innerHTML = optionsHTML

async function fetchRates (base ='USD') {
 const res = await fetch(`${endPoint}?base=${base}`)
 const rates = await res.json()
 return rates
}

async function convert (amount, from, to){
// check if we even have the rates to convert from that currency
if(!ratesByBase[from]){
    const rates = await fetchRates(from)
    ratesByBase[from] = rates
}
//  convert the amount they passed in
const rate = ratesByBase[from].rates[to]
const convertedAmount = rate * amount
console.log(convertedAmount)
return convertedAmount
}

function formatCurrency(amount, currency){
    return Intl.NumberFormat('en-US',{
        style: 'currency',
        currency,
    }).format(amount)
}

async function handleInput (e) {
const amountConverted = await convert(valueToConvert.value ,fromSelect.value,toSelect.value)
totalConverted.textContent = formatCurrency(amountConverted,toSelect.value)
}

// This way of event works because they bubble up and pass the form
form.addEventListener('input', handleInput)



