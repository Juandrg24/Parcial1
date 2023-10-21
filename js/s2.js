function crearServicio({titulo,descripcion}){
    return`
        <div class="servicio">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}

const data =[
    {titulo:"Asesoría Académica Personalizada", descripcion: "Orientación individualizada para establecer metas académicas y superar desafíos"},
    {titulo:"Seccion Dos", descripcion: "Descripcion de la Seccion Dos"},
    {titulo:"Seccion Tres", descripcion: "Descripcion de la Seccion Tres"},
    {titulo:"Seccion Cuatro", descripcion: "Descripcion de la Seccion Cuatro"},
    {titulo:"Seccion Cinco", descripcion: "Descripcion de la Seccion Cinco"},
    {titulo:"Seccion Seis", descripcion: "Descripcion de la Seccion Seis"},
];

const contenedor=document.querySelector('.contenedor-servicios');
/*const traerLaA=document.getElementById('s2a');
traerLaA.classList.remove("escondido");
console.log(traerLaA.classList);*/
/*traerLaA.classList;*/

function mostrarServicios(){
    for(let servicio of data){
        const servicioHtml= crearServicio(servicio);
        contenedor.insertAdjacentHTML('beforeend',servicioHtml);
    };
}

export{mostrarServicios};
