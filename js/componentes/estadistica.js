export function CalculoIMC(){
    let comenzar = [
        {
            Prueba:
            '<header>'+
            '<img class="banner" src="https://github.com/Gerardo072/Img-Aps-/blob/main/nutria.2%201.png?raw=true" alt="">'+
            '<a class="primer" href="">Inicio</a>'+
            '<a class="segundo" href="">Calcular</a>'+
        '</header>'+
    
        
    
        '<h1 class="tittle3">Agrega tus datos</h1>'+
            '<section class="IMG-IMC">'+
    
            '<div class="IMC"></div>'+
    
            '<div class="Cuadrante">'+
            
            '</div>'+
            '<img class="nutria" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/nutriachico%202.png?raw=true" alt="">'+
        
            
            '</section>'+
    
    
      '<section class="Body">'+
        '<form id="formulario" >'+
        '<label >'+
          '<input id ="inputNombre">'+
        
        '</label>'+
        '<label >'+
          '<input id ="inputAltura">'+
        
        '</label>'+
        '<label >'+
          '<input id ="inputPeso">'+
        
        '</label>'+      
          
        
        '<div id="Bton">adasfasf</div>'+
        '</form>'+
        
    
    '</section>'+
    

    


    '<div class="Integrantes">'+
    '<div>Integrantes <br> Biologia: <br> Karen Amanda Calderas de León <br> Jaydi Dayana Orrego Perez <br> Angel Gabriel Castro</div>'+
    '<div>Integrantes <br> Diseño Gráfico: <br> Detlef Ivan Iquique Galvez <br> Hannah Maribel Mijangos</div>'+
    '<div>Integrantes <br> Computación: <br> Oscar Gerardo de Jesus Ordoñez Alvarez <br> Alexis Fabian Pirir Montanico</div>'+
        
    '<div>Empresa: <br> Healthy Point</div>'+
    '<div>Paginas de referencia: <br> Nutrium <br> Pagina de inicio con Genshin Impact</div>'+
    '</div>',
        
    }
    ]
        
    let Calculo = document.querySelector("#Calculo")
     
     function InicioPagina(){
        root.innerHTML = comenzar[0].Prueba;
        
     }

     Calculo.addEventListener("click", InicioPagina)


    
    
  }

  
  