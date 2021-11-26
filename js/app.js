const formulario = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#enviar');
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const error = document.querySelector('#error');
const validacionEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    inputEmail.addEventListener('blur', validarCampos);
    inputAsunto.addEventListener('blur', validarCampos);
    inputMensaje.addEventListener('blur', validarCampos);

    formulario.addEventListener('submit', enviarFormulario);

}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarCampos(e) {
    if(!e.target.value) {
        e.target.classList.remove('border-green-600');
        e.target.classList.add('border-red-600');
        mostrarError('Todos los campos son obligatorios');
    }else {
        e.target.classList.remove('border-red-600');
        e.target.classList.add('border-green-600');
        error.innerHTML = '';
    }

    if(e.target.type === 'email') {
        if(validacionEmail.test(e.target.value)) {
            error.innerHTML = '';
            
        } else {
            e.target.classList.remove('border-green-600');
            e.target.classList.add('border-red-600');
            mostrarError('E-mail no valido');
        }
    }

    if(validacionEmail.test(inputEmail.value) && inputAsunto.value !== '' && inputMensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(msj) {
    error.innerHTML = '';
    const mensajeError = document.createElement('p');
    mensajeError.textContent = msj;
    mensajeError.classList.add('border', 'border-red-500', 'bg-red-700', 'text-white', 'p-3', 'mt-5', 'text-center');
    error.appendChild(mensajeError);
}


function enviarFormulario(e) {
    e.preventDefault();
    const loader = document.querySelector('#spinner');
    loader.style.display = 'flex';

    const alerta = document.createElement('p');

    setTimeout(()=> {
        loader.style.display = 'none'
        alerta.textContent = 'Correo enviado correctamente';
        alerta.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white')
        error.appendChild(alerta);
        formulario.reset();
        inputEmail.style.border = 'black';
        inputAsunto.style.border = 'black';
        inputMensaje.style.border = 'black';
        iniciarApp();
    }, 2000) 

    setTimeout(()=> {
        alerta.remove();
    }, 4000) 
}