let i = 0;
let images = []; // array com imagens
let timer = 2000; // tempo em milesegundos

//nome das imagens
images[0] = 'img1.jpg'; 
images[1] = 'img2.jpg';
images[2] = 'img3.jpg';
images[3] = 'img4.jpg';


function slide() {

    document.getElementById('imgblock').src = `images/${images[i]}`; // acessando o atributo imagens source e colocando o caminho + o array
    if (i < images.length -1) { // Se o i for menor que o total de imagens acrescenta 1 no i, assim ele vai para a proxima imagem ate quando ficar maior que o total de imagens, ai zeramos no else
        i++;
        
    } else {
        i = 0;
        
    }

    setTimeout("slide()", timer) // timer para fazer as imagens ficarem mudando altomaticamente

}

window.onload = slide;

