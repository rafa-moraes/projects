const fromSelect = document.querySelector('[name="from_currency"]')
const toSelect = document.querySelector('[name="to_currency"]')
const endPoint = 'https://api.exchangeratesapi.io/latest'
const ratesByBase ={}
const form = document.querySelector('form')
const valueToConvert = document.querySelector('[name="valueToConvert"]')
const totalConverted = document.querySelector('.total')
const currencies = {
    AUD:'Australian Dollar',
    BGN:'Bulgarian Lev',
    BRL:'Brazilian Real',
    CAD:'Canadian Dollar',
    CHF:'Swiss Franc',
    CNY:'Chinese Yuan',
    CZK:'Czech Republic Koruna',
    DKK:'Danish Krone',
    EUR: 'Euro',
    GBP:'British Pound Sterling',
    HKD:'Hong Kong Dollar',
    HRK:'Croatian Kuna',
    HUF:'Hungarian Forint',
    IDR:'Indonesian Rupiah',
    ILS:'Israeli New Sheqel',
    INR:'Indian Rupee',
    JPY:'Japanese Yen',
    KRW:'South Korean Won',
    MXN:'Mexican Peso',
    MYR:'Malaysian Ringgit',
    NOK:'Norwegian Krone',
    NZD:'New Zeland Dolar',
    PHP:'Philippine Peso',
    PLN:'Polish Zloty',
    RON:'Romanian Leu',
    RUB:'Russian Ruble',
    SEK:'Swedish Krona',
    SGD:'Singapore Dolar',
    THB:'Thai Baht',
    TRY:'Turkish Libra',
    USD:'United States Dollar',
    ZAR:'South African Rand',

}

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



