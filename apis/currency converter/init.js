import currencies from './currencies.js'
import { handleInput} from './handlers.js'
import {convert} from './lib.js'

export const fromSelect = document.querySelector('[name="from_currency"]')
export const toSelect = document.querySelector('[name="to_currency"]')
export const valueToConvert = document.querySelector('[name="valueToConvert"]')
export const totalConverted = document.querySelector('.total')
const form = document.querySelector('form')


export function generateOptions (options){
    return Object.entries(options).map(([currencyCode, currencyName]) =>
        `<option value ="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    ).join("")
}
const optionsHTML = generateOptions(currencies)

fromSelect.innerHTML = optionsHTML
toSelect.innerHTML = optionsHTML
form.addEventListener('input', handleInput)