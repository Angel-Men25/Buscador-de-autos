// VARIABLES
const buscador = document.querySelector('#buscador');

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const numeroAutos = document.querySelector('#numerito');

const cardsContainer = document.querySelector('#cards__container');

const max = 2020;
const min = max - 10;

// OBJETO
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


// EVENT LISTENER
document.addEventListener('DOMContentLoaded', () => {
    buscador.reset();

    mostrarAutos(autos);

    llenarSelectYear();
})

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value;
    filtrarAutos();
})
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAutos();
})
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
    filtrarAutos();
})
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
})
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
})

// FUNCIONES
function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach( auto => {
        const { imagen, marca, modelo, year, puertas, color, transmision, precio } = auto;
        const article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
        <div class="card__picture">
            <img src="${imagen}" class="card__img" alt="${modelo}">
        </div>
        <div class="card__info">
            <p class="card__marca">${marca}</p>
            <h3 class="card__modelo">${modelo}</h3>
            <p class="card__year">${year}</p>
            <p class="card__puertas">${puertas} Puertas</p>
            <p class="card__transmision">${transmision}</p>
            <p class="card__color">${color}</p>
            <p class="card__precio">$${precio}</p>
        </div>
        `
        cardsContainer.appendChild(article)
    } )
    numeroAutos.textContent = `${autos.length}`;
}

function limpiarHTML() {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild)
    }
}

function llenarSelectYear() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.option = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}

function filtrarAutos() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );

    if (resultado.length === 0) {
        noResultado();
        numeroAutos.textContent = `0`;
    } else {
        mostrarAutos(resultado);
    }
}

function noResultado() {
    limpiarHTML();

    const mensajeError = document.createElement('p');
    mensajeError.classList.add('mensaje-error');
    mensajeError.textContent = 'No se encontraron unidades con esa especificación';
    cardsContainer.appendChild(mensajeError)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    } else {
        return auto
    }
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    } else {
        return auto
    }
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    } else {
        return auto
    }
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    } else {
        return auto
    }
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    } else {
        return auto
    }
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    } else {
        return auto
    }
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    } else {
        return auto
    }
}