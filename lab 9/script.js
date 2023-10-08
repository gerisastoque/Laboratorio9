const commentBox= document.getElementById('commentBox');
commentBox.classList.add('commentBox');

// Crear un elemento de imagen
const imagenPerfil = document.createElement('img');

// Configurar el atributo 'src' para que muestre una imagen
imagenPerfil.src = './perfil.png'; 

// Agregar la imagen al DOM, por ejemplo, a un elemento con un ID específico
const imgPerfil = document.getElementById('commentBox');
imgPerfil.appendChild(imagenPerfil);
imagenPerfil.classList.add('imgPerfil')


// Crear un elemento de entrada de Inpunt-texto
const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.id = 'commentInput';
inputElement.name = 'CommentInput';
inputElement.placeholder = '¿Qué estás pensando, Geraldine?';

// Agregar el elemento al DOM (por ejemplo, a un div con ID "contenedor")
const contenedor = document.getElementById('commentBox');
contenedor.appendChild(inputElement);
inputElement.classList.add('commentBox__box')

const inputmodal = document.getElementById('commentInput');
const modal = document.getElementById('modal');
modal.classList.add('commentBox__box--modal');

// Agregar un evento al input para mostrar el modal al hacer clic en él
inputmodal.addEventListener('click', function() {
    modal.style.display = 'block';
});


// Crear un elemento de párrafo
const parrafo = document.createElement('p');
parrafo.textContent = 'Crear publicación';
parrafo.classList.add('modal__text')

// Agregar el párrafo al elemento modal
modal.appendChild(parrafo);

// Crear un elemento de imagen cerrar
const imagenCerrar = document.createElement('img');

// Configurar el atributo 'src' para que muestre una imagen
imagenCerrar.src = './eliminar.png'; 

// Agregar la imagen al DOM, por ejemplo, a un elemento con un ID específico
const imgCerrar = document.getElementById('modal');
imgCerrar.appendChild(imagenCerrar);
imagenCerrar.classList.add('modal__eliminarIcon');

// Agregar la imagen al modal
modal.appendChild(imagenCerrar);

// Agregar un evento al hacer clic en la imagen de cierre para ocultar el modal
imagenCerrar.addEventListener('click', function() {
    modal.style.display = 'none';
});

const imagenClonada = imagenPerfil.cloneNode(true); //clonar imagenes

// Agrega el clon en otro lugar del DOM
const perfil = document.getElementById('modal');
perfil.appendChild(imagenClonada);

const parrafoDos = document.createElement('p');
parrafoDos.textContent = 'Geraldine Sastoque';
parrafoDos.classList.add('modal__text--perfil')
modal.appendChild(parrafoDos);

// Crear un elemento de entrada de Inpunt-texto
const inputElementDos = document.createElement('input');
inputElementDos.type = 'text';
inputElementDos.id = 'commentInputDos';
inputElementDos.name = 'CommentInputDos';
inputElementDos.placeholder = '¿Qué estás pensando, Geraldine?';

// Agregar el elemento al DOM (por ejemplo, a un div con ID "contenedor")
const contenedorDos = document.getElementById('modal');
contenedorDos.appendChild(inputElementDos);
inputElementDos.classList.add('modal__text--input')

// Crear un elemento de botón
const botonPublicar = document.createElement('button');
// Configurar el texto o contenido del botón
botonPublicar.textContent = 'Publicar'; // Puedes usar innerHTML si deseas contenido HTML
botonPublicar.classList.add('modal__button')
// Agregar el botón al DOM (por ejemplo, a un formulario o div con un ID específico)
const contenedorTres = document.getElementById('modal'); // Reemplaza 'miContenedor' con el ID deseado
contenedorTres.appendChild(botonPublicar);

// Agregar un event listener al inputElementDos para cambiar el color del botón
const inputElementTres = document.getElementById('commentInputDos');
inputElementDos.addEventListener('input', function() {
    if (inputElementDos.value.trim() !== '') {
        botonPublicar.style.backgroundColor = 'blue'; 
    } else {
        botonPublicar.style.backgroundColor = ''; 
    }
});


// Obtener elementos del DOM
const commentInput = document.getElementById('commentInputDos');
const comentariosContainer = document.getElementById('comentarios');
comentariosContainer.classList.add('comentarios')


// Evento para agregar un comentario al hacer clic en el botón "Publicar"
botonPublicar.addEventListener('click', function() {
    const comentario = commentInput.value.trim();

    if (comentario !== '') {
        // Crear un elemento para el nuevo comentario
        const nuevoComentario = document.createElement('div');
        nuevoComentario.textContent = comentario;

        // Agregar el nuevo comentario al contenedor de comentarios
        comentariosContainer.appendChild(nuevoComentario);

        // Limpiar el cuadro de entrada de comentarios
        commentInput.value = '';
    }
});






