import { fromSelect,toSelect,valueToConvert,totalConverted} from './init.js'
import {convert} from './lib.js'
import {formatCurrency} from './utils.js'

export async function handleInput (e) {
    const amountConverted = await convert(valueToConvert.value ,fromSelect.value,toSelect.value)
    totalConverted.textContent = formatCurrency(amountConverted,toSelect.value)
    }
    