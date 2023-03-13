var audio = new Audio('musica/siuu.mp3');
var formacao = document.getElementById("formacao")
var iron = document.getElementById("iron")
var panteranegra = document.getElementById("panteranegra")
var pimg = document.getElementById("pedro-audio")
var clicked = true;

document.addEventListener('scroll', () => {   
        iron.classList.add('homemdeferro')  
        setInterval(()=>{
            panteranegra.classList.add('panteranegra')  
        }, 2000)
        
})

pimg.addEventListener("click", ()=> {
    if (clicked == true) {
        audio.play()
        clicked = false;
    } else {
        audio.pause()
        clicked = true;
    }
})


