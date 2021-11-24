const btnEnviar = document.querySelector('#enviar');
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#error');

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    inputEmail.addEventListener('blur', validarCampos);
    inputAsunto.addEventListener('blur', validarCampos);
    inputMensaje.addEventListener('blur', validarCampos);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarCampos(e) {
    if(!e.target.value) {
        e.target.classList.remove('border-green-600')
        e.target.classList.add('border-red-600')

        mostrarError();

    }else {
        e.target.classList.remove('border-red-600')
        e.target.classList.add('border-green-600')
    }
}

function mostrarError() {
    formulario.innerHTML = '';
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'bg-red-700', 'text-white', 'p-3', 'mt-5', 'text-center');
    formulario.appendChild(mensajeError);
}

