const inputs = document.querySelectorAll('input')
inputs.forEach(input => input.addEventListener('change', changing))
inputs.forEach(input => input.addEventListener('mousemove', changing))
function changing (e) {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)



}












