
var formacao = document.getElementById("formacao")
var iron = document.getElementById("iron")
var panteranegra = document.getElementById("panteranegra")

document.addEventListener('scroll', () => {   
        iron.classList.add('homemdeferro')  
        setInterval(()=>{
            panteranegra.classList.add('panteranegra')  
        }, 2000)
        
})


var audio = new Audio('musica/avengers');
audio.play();