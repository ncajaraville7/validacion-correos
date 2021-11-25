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
        error.remove();
    }

    if(e.target.type === 'email') {
        if(validacionEmail.test(e.target.value)) {
            console.log('ok')
            error.remove();
            
        } else {
            e.target.classList.remove('border-green-600');
            e.target.classList.add('border-red-600');
            mostrarError('E-mail no valido');
        }
    }
}

function mostrarError(msj) {
    error.innerHTML = '';
    const mensajeError = document.createElement('p');
    mensajeError.textContent = msj;
    mensajeError.classList.add('border', 'border-red-500', 'bg-red-700', 'text-white', 'p-3', 'mt-5', 'text-center');
    error.appendChild(mensajeError);
}

