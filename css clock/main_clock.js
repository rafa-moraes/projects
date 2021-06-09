
setInterval(
    function newDate () {
    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()
    let seconds = date.getSeconds()
    

    const handHour = document.querySelector('.hour')
    const handMin = document.querySelector('.min')
    const handSecond = document.querySelector('.second')
    
    
    hour === 0 ? handHour.style.transform = `rotate(90deg)` : handHour.style.transform = `rotate(${(((hour)*360)/12)+90}deg)`
    
    min === 0 ? handMin.style.transform = `rotate(90deg)` : handMin.style.transform = `rotate(${(((min)*360)/60)+90}deg)`

    
    handSecond.style.transform = `rotate(${(((seconds)*360)/60)+90}deg)`
    
    console.log(hour)
    console.log(min)
    
    
    
}
, 1000); 












