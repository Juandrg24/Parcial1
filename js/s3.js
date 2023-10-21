function crearColaboradores({imagenUrl,titulo,descripcion}){
    return`
        <div class="colaborador">
            <img src=${imagenUrl}>
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}

const cola =[
    {imagenUrl:"imagenes/avatar_126486.png", titulo:"Asesoría Académica Personalizada", descripcion: "Orientación individualizada para establecer metas académicas y superar desafíos"},
    {imagenUrl:"imagenes/avatar_126486.png",titulo:"Seccion Dos", descripcion: "Descripcion de la Seccion Dos"},
    {imagenUrl:"imagenes/avatar_126486.png",titulo:"Seccion Tres", descripcion: "Descripcion de la Seccion Tres"},
];

const contenedorColaboradores=document.querySelector('.contenedor-colaborador');

function mostrarColaboradores(){
    for(let colaborador of cola){
        const colaboradorHtml= crearColaboradores(colaborador);
        contenedorColaboradores.insertAdjacentHTML('beforeend',colaboradorHtml);
    };
}
export{mostrarColaboradores};