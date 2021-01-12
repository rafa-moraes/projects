const endPoint = 'https://api.exchangeratesapi.io/latest'
const ratesByBase ={}
export async function fetchRates (base ='USD') {
    const res = await fetch(`${endPoint}?base=${base}`)
    const rates = await res.json()
    return rates
   }
   
export async function convert (amount, from, to){
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