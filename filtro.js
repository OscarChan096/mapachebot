document.addEventListener("DOMContentLoaded", function() {
    let inputFiltro = document.querySelector('.search input[type="text"]');
    inputFiltro.addEventListener('keyup', function() {
        let valorFiltro = inputFiltro.value.toLowerCase();
        let categorias = document.querySelectorAll('.titulo-categoria span');
        
        categorias.forEach(function(categoria) {
            let textoCategoria = categoria.textContent.toLowerCase();
            if (textoCategoria.includes(valorFiltro)) {
                categoria.parentElement.parentElement.style.display = 'block';
            } else {
                categoria.parentElement.parentElement.style.display = 'none';
            }
        });
    });
});


