const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('data-proximo');
        const proximopasso = 'passo-' + this.getattribute('data-proxima');
     
        atual.classList.remover("ativo");
        document.getElementById(proximopasso).classList.add("ativo");
    })
})