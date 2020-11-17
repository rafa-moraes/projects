const button = document.querySelector('.button')
button.addEventListener('click', counter)
// Access the input element text


// function to count the vowel

function counter () {
    const text = document.querySelector('input').value
    
    const vowels = [
        text.match(/a/g),
        text.match(/e/g),
        text.match(/i/g),
        text.match(/o/g),
        text.match(/u/g)
    ]
    // console.log(vowels[0].length)
    // console.log(vowels[1].length)
    

    function nonNull(array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
          var value = array[i];
          if (value !== null) result.push(value);
        }
        return result;
      }

      console.log(nonNull(vowels))

    

    }
























