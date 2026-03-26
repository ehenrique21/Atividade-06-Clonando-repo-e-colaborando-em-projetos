document.addEventListener('DOMContentLoaded', () => {
    
    let indiceAtual = 0;

    const slides = document.querySelectorAll('.slide');

    const btnAnterior = document.querySelector('.anterior');

    const  btnProximo = document.querySelector('.proximo');

    let intervaloAutoPlay;

    function atualizarSlide() {

        slides.forEach((slide, index) => {

            slide.classList.remove('active', 'prev', 'next');

            if (index === indiceAtual) {
            
                slide.classList.add('active');
            
            } else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual - 1)){
            
                slide.classList.add('prev');
            
            } else if (index === (indiceAtual === slide.length - 1 ? 0 : indiceAtual + 1)) {
            
                slide.classList.add('next');
            
            }
        })

    }



    
    function iniciarAutoPlay() {
    
        intervaloAutoPlay = setInterval(() =>{
    
            indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
    
            atualizarSlide();
    
        }, 5000)
    
    }


    
    btnAnterior.addEventListener('click', () => {
    
        clearInterval(intervaloAutoPlay);
    
        indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : slides.length - 1;
    
        atualizarSlide();
    
        iniciarAutoPlay();
    
    });


    
    btnProximo.addEventListener('click', () => {
    
        clearInterval(intervaloAutoPlay);
    
        indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
    
        atualizarSlide();
    
        iniciarAutoPlay();
    
    });
    
    atualizarSlide();
    
    iniciarAutoPlay();

});
