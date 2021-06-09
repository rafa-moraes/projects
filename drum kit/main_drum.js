
window.addEventListener('keydown',playSound)

function playSound (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audioKey = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audioKey){
        return
    }else {
        audioKey.currentTime = 0
        audioKey.play()
        key.classList.add('playing')
        key.addEventListener('transitionend',removeClass)
        function removeClass(e) {
        key.className = 'key'

        }

    }

}




































