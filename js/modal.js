function crearModal(){
    return`
        <div class="contenedor-modal">
            <div class="modal">
                <h2>Bienvenido</h2>
                <button id="btnaceptar">Aceptar</button>
                <button id="btncancelar">Cerrar</button>
                
            </div>
            
        </div>

    `;
}




function abrirModal(){
    const btnVerMas=document.getElementById('vermas'); 
    btnVerMas.addEventListener('click',()=>ejecutarModal());
    console.log(btnVerMas.classList);
}


function ejecutarModal(){
  
    document.body.insertAdjacentHTML('beforeend',crearModal());
   
    const botonAceptar=document.getElementById("btnaceptar");
    const botonCancelar=document.getElementById("btncancelar");
    const modal = document.querySelector(".contenedor-modal");

    botonAceptar.addEventListener('click',() =>btnaceptar(modal));
    botonCancelar.addEventListener('click',() => modal.remove()); 
    
};

function btnaceptar(modal){
    const traerLaAs2=document.getElementById('s2a');
    const traerLaAs3=document.getElementById('s3a');
    const seccionServicios=document.getElementById("seccion2");
    const seccionColaboradores=document.getElementById("seccion3");
    const btnVerMas=document.getElementById('vermas'); 
    
    
    modal.remove();
    seccionColaboradores.classList.remove("escondido");
    seccionServicios.classList.remove("escondido");
    traerLaAs2.classList.remove("escondido");
    traerLaAs3.classList.remove("escondido");
    btnVerMas.remove();
};

export{abrirModal};