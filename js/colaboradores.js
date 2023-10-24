function crearColaboradores({imagenUrl,titulo,descripcion}){
    return`
        <div class="colaborador">
            <img class="img-colaborador"src=${imagenUrl}>
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}

const cola =[
    {imagenUrl:"imagenes/señor.png", titulo:"Luis Pérez", descripcion: "Directoror"},
    {imagenUrl:"imagenes/señora.png",titulo:"María Rodríguez", descripcion: "Coordinadora Académica"},
    {imagenUrl:"imagenes/señorita.png",titulo:"Laura García", descripcion: "Coordinadora de Comunicaciones y Eventos"}
];

const contenedorColaboradores=document.querySelector('.contenedor-colaborador');

function mostrarColaboradores(){
    for(let colaborador of cola){
        const colaboradorHtml= crearColaboradores(colaborador);
        contenedorColaboradores.insertAdjacentHTML('beforeend',colaboradorHtml);
    };
};

export{mostrarColaboradores};
