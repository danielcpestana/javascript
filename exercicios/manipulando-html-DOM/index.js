function adicionarComentario() {
    let inputComentario = document.querySelector('[name="novo-comentario"]');
    let textoDigitado = inputComentario.value;
    let novosComentarios = document.getElementById('novos-comentarios');
    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado}</p>`;
}
