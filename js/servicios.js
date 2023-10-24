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
    {titulo:"Tutorías", descripcion: "Apoyo adicional en áreas específicas y refuerzo académico"},
    {titulo:"Actividades Extracurriculares", descripcion: "Oportunidades para explorar intereses y desarrollar habilidades fuera del aula"},
    {titulo:"Consejería y Apoyo Psicológico", descripcion: "Ayuda emocional y social para los estudiantes"},
    {titulo:"Educación para la Salud", descripcion: "Programas para promover el bienestar físico y mental"},
    {titulo:"Eventos Educativos", descripcion: "Conferencias y actividades que fomentan el aprendizaje y la interacción comunitaria"}
];

const contenedor=document.querySelector('.contenedor-servicios');


function mostrarServicios(){
    for(let servicio of data){
        const servicioHtml= crearServicio(servicio);
        contenedor.insertAdjacentHTML('beforeend',servicioHtml);
    };
}

export{mostrarServicios};
