// JavaScript code
function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('animals');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

export function ProteinaDesgloce(){
    let Despliegue = [
        {
          
            Piramide:
            '<header>' +
            '<img class="banner" src="./img/nutria.2 1.png" alt="">'+
            '<a class="primer" href="">Inicio</a>' +
            '<a class="segundo" href="">Calcular</a>' +
            '</header>'+

            '<img class="menu" src="https://github.com/Gerardo072/Img-Aps-/blob/main/Frutas.png?raw=true" alt="">'+
            '<h1 class="tittle2">¿Qué son las proteínas?</h1>'+

            '<div class="video1">'+
            '<iframe class="Descripcion" width="560" height="315" src="https://www.youtube.com/embed/tbAclXPq6TE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
            '</div>'+
    



            '<div class="Sector">'+
            '<p>'+
            'Las proteínas están formadas por muchos bloques de construcción, '+
            'conocidos como <br> aminoácidos para suministrar aminoácidos que el crecimiento '+
            'y mantenimiento de <br> nuestras células y tejidos.  Las proteínas de origen vegetal '+
            'y animal varían en su calidad <br> y digestibilidad, están formadas por muchos '+
            'aminoácidos diferentes unidos entre sí. Hay <br> veinte bloques de construcción de '+
            'aminoácidos diferentes que se encuentran <br> comúnmente en plantas y animales. '+
            'Una proteína típica está compuesta de 300 o más <br> aminoácidos y la secuencia '+
            'y el número específicos de aminoácidos son únicos para cada <br> proteína.'+
            '</p>'+
            '</div>'+




            '<img class="fon-inferior" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2020.png?raw=true" alt="">'+
    
            '<section class="background"></section>'+
    
            '<div class="Tabla-2">'+
            '<div class="table">'+
                '<div class="Sección1">'+
                   '<div>Alimentos</div>'+
                   '<div>Aceitunas</div>'+
                   '<div>Aguacate</div>'+
                   '<div>Banana</div>'+
                   '<div>Blueberry</div>'+
                   '<div>Cerezas</div>'+
                    '<div>Ciruelas</div>'+
                    '<div>Coco</div>'+
                    '<div>Cranberry</div>'+
                    '<div>Durazno</div>'+
                   '<div>frambuesas</div>'+
                   '<div>fresas</div>'+
                   '<div>granada</div>'+
                   '<div>guayaba</div>'+
                    '<div>higos</div>'+
                    '<div>kiwi</div>'+
                    '<div>lima</div>'+
                    '<div>limón</div>'+
                   '<div>mandarina</div>'+
                   '<div>mango</div>'+
                   '<div>manzana</div>'+
                    '<div>melocotón</div>'+
                    '<div>melón</div>'+
                    '<div>membrillo</div>'+
                    '<div>mora</div>'+
                   '<div>naranjas</div>'+
                   '<div>nectarina</div>'+
                    '<div>níspero</div>'+
                    '<div>papaya</div>'+
                    '<div>pera</div>'+
                    '<div>Piña</div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Proteínas</div>'+
                    '<div>1.4</div>'+
                    '<div>1.9</div>'+
                    '<div>1</div>'+
                    '<div>0.8</div>'+
                    '<div>0.9</div>'+
                    '<div>0.6</div>'+
                    '<div>1.9</div>'+
                    '<div>0.4</div>'+
                    '<div>0.8</div>'+
                    '<div>1.3</div>'+
                    '<div>0.7</div>'+
                    '<div>1</div>'+
                    '<div>0.8</div>'+
                    '<div>0.8</div>'+
                    '<div>0.9</div>'+
                    '<div>0.7</div>'+
                    '<div>0.8</div>'+
                    '<div>0.6</div>'+
                    '<div>0.5</div>'+
                    '<div>0.4</div>'+
                    '<div>1</div>'+
                    '<div>0.9</div>'+
                    '<div>0.4</div>'+
                    '<div>1</div>'+
                    '<div>0.9</div>'+
                    '<div>0.9</div>'+
                    '<div>0.4</div>'+
                    '<div>0.6</div>'+
                    '<div>0.6</div>'+
                    '<div>0.4</div>'+
                    
                    
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Lipidos</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Carbohidratos</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                   '<div>Lípidos</div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Carbohidratos</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                '</div>'+
            '</div>'+
        '</div>'+

            '<h1 class="tittle">Frutas</h1>'+



            '<main>'+

            '<div class="slider">'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton1" checked>'+
                '<label for="boton1"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(2).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton2">'+
                '<label for="boton2"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(1).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton3">'+
                '<label for="boton3"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(10).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton4">'+
                '<label for="boton4"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(12).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton5">'+
                '<label for="boton5"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias.png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton6">'+
                '<label for="boton6"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(11).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(13).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(14).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton8">'+
                '<label for="boton8"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(3).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton9">'+
                '<label for="boton9"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(4).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton10">'+
                '<label for="boton10"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(5).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton11">'+
                '<label for="boton11"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(6).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton12">'+
                '<label for="boton12"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(7).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton13">'+
                '<label for="boton13"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(8).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton14">'+
                '<label for="boton14"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(9).png?raw=true">'+
              '</div>'+
          
            '</div>'+
          
            '</main>' +


            '<img class="Search-lp" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2022.png?raw=true" alt="">'+
            
            '<div id="header-buscador">'+
     
            '<ul class="nav">'+
              '<li><input id="searchbar" onkeyup="search_animal()" type="text"'+
              'name="search" placeholder="Search for food..">'+
              '<ul id="list">'+
                '<li type="radio" name="boton" id="boton11" class="animals"><label for="boton11">Manzana</li>'+
                '<li type="radio" name="boton" id="boton14" class="animals"><label for="boton12">Calabaza</label></li>'+
                '<li type="radio" name="boton" id="boton12" class="animals"><label for="boton14">Cebolla</li>'+
                '<li type="radio" name="boton" id="boton13" class="animals"><label for="boton13">Marañon</li>'+
                '<li type="radio" name="boton" id="boton10" class="animals"><label for="boton1">Aguacate</li>'+
                '<li type="radio" name="boton" id="boton9" class="animals"><label for="boton9">Limon</li>'+
                '<li type="radio" name="boton" id="boton8" class="animals"><label for="boton8">Brócoli</li>'+
                '<li type="radio" name="boton" id="boton7" class="animals"><label for="boton7">Zanahoria</li>'+
                '<li type="radio" name="boton" id="boton6" class="animals"><label for="boton6">Pepino</li>'+
                '<li type="radio" name="boton" id="boton5" class="animals"><label for="boton5">Banano</li>'+
                '<li type="radio" name="boton" id="boton4" class="animals"><label for="boton4">Melocotón</li>'+
                '<li type="radio" name="boton" id="boton3" class="animals"><label for="boton3">Coco</li>'+
                '<li type="radio" name="boton" id="boton2" class="animals"><label for="boton2">Fresa</li>'+
                '<li type="radio" name="boton" id="boton1" class="animals"><label for="boton1">Aguacate</li>'+
                '</ul>'+
                '</li>'+
            
            '</ul>'+
          '</div>'+

          


            '<div class="Integrantes">'+
            '<div>Integrantes <br> Biologia: <br> Karen Amanda Calderas de León <br> Jaydi Dayana Orrego Perez <br> Angel Gabriel Castro</div>'+
            '<div>Integrantes <br> Diseño Gráfico: <br> Detlef Ivan Iquique Galvez <br> Hannah Maribel Mijangos</div>'+
            '<div>Integrantes <br> Computación: <br> Oscar Gerardo de Jesus Ordoñez Alvarez <br> Alexis Fabian Pirir Montanico</div>'+
    
            '<div>Empresa: <br> Healthy Point</div>'+
            '<div>Paginas de referencia: <br> Nutrium <br> Pagina de inicio con Genshin Impact</div>'+
            '</div>',

            
        
    }
    ]
    // JavaScript code

    let Proteina = document.querySelector("#Proteina")
     
     function Desglosar(){
        root.innerHTML = Despliegue[0].Piramide;
        
     }

     Proteina.addEventListener("click", Desglosar)
 }

        /********PARTE DE CARBOHIDRATOS************/

 export function CarbohidratosDesgloce(){
    let Desplegar = [
        {
            Columna:
            '<header>' +
            '<img class="banner" src="./img/nutria.2 1.png" alt="">'+
            '<a class="primer" href="">Inicio</a>' +
            '<a class="segundo" href="">Calcular</a>' +
            '</header>'+

            '<img class="menu" src="https://github.com/Gerardo072/Img-Aps-/blob/main/Frutas.png?raw=true" alt="">'+
            '<h1 class="tittle2">¿Qué son las Carbohidratos?</h1>'+

            '<div class="video1">'+
            '<iframe class="Descripcion" width="560" height="315" src="https://www.youtube.com/embed/l8pDKAcaPHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
            '</div>'+
    


            '<div class="Sector">'+
            '<p>'+
            'Los carbohidratos son las moléculas que cumplen la función primordial de'+ 
            'brindar <br> la energía que el cuerpo humano necesita, este proceso se lleva'+
            'a cabo a través <br> de la formación de glucosa. Los azúcares más simples de'+
            'carbohidratos se denominan monosacáridos y poseen una sola molécula, los'+ 
            'azúcares que tienen más <br> moléculas  se llaman oligosacáridos y los que contienen'+
            'más de diez moléculas de <br> monosacáridos son los polisacáridos.'+
            '</p>'+
            '</div>'+




            '<img class="fon-inferior" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2020.png?raw=true" alt="">'+
    
            '<section class="background"></section>'+
    
            '<div class="Tabla-2">'+
            '<div class="table">'+
                '<div class="Sección1">'+
                   '<div>Alimentos</div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Proteínas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                   '<div>Lípidos</div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Carbohidratos</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
            '<h1 class="tittle">Frutas</h1>'+


      '<div id="header-buscador">'+
     
      '<ul class="nav">'+
        '<li><input id="searchbar" onkeyup="search_animal()" type="text"'+
        'name="search" placeholder="Search for food..">'+
        '<ul id="list">'+
          '<li type="radio" name="boton" id="boton11" class="animals"><label for="boton11">Manzana</li>'+
          '<li type="radio" name="boton" id="boton14" class="animals"><label for="boton12">Calabaza</label></li>'+
          '<li type="radio" name="boton" id="boton12" class="animals"><label for="boton14">Cebolla</li>'+
          '<li type="radio" name="boton" id="boton13" class="animals"><label for="boton13">Marañon</li>'+
          '<li type="radio" name="boton" id="boton10" class="animals"><label for="boton1">Aguacate</li>'+
          '<li type="radio" name="boton" id="boton9" class="animals"><label for="boton9">Limon</li>'+
          '<li type="radio" name="boton" id="boton8" class="animals"><label for="boton8">Brócoli</li>'+
          '<li type="radio" name="boton" id="boton7" class="animals"><label for="boton7">Zanahoria</li>'+
          '<li type="radio" name="boton" id="boton6" class="animals"><label for="boton6">Pepino</li>'+
          '<li type="radio" name="boton" id="boton5" class="animals"><label for="boton5">Banano</li>'+
          '<li type="radio" name="boton" id="boton4" class="animals"><label for="boton4">Melocotón</li>'+
          '<li type="radio" name="boton" id="boton3" class="animals"><label for="boton3">Coco</li>'+
          '<li type="radio" name="boton" id="boton2" class="animals"><label for="boton2">Fresa</li>'+
          '<li type="radio" name="boton" id="boton1" class="animals"><label for="boton1">Aguacate</li>'+
          '</ul>'+
          '</li>'+
      
      '</ul>'+
    '</div>'+

            '<main>'+

            '<div class="slider">'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton1" checked>'+
                '<label for="boton1"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(2).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton2">'+
                '<label for="boton2"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(1).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton3">'+
                '<label for="boton3"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(10).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton4">'+
                '<label for="boton4"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(12).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton5">'+
                '<label for="boton5"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias.png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton6">'+
                '<label for="boton6"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(11).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(13).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(14).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton8">'+
                '<label for="boton8"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(3).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton9">'+
                '<label for="boton9"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(4).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton10">'+
                '<label for="boton10"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(5).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton11">'+
                '<label for="boton11"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(6).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton12">'+
                '<label for="boton12"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(7).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton13">'+
                '<label for="boton13"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(8).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton14">'+
                '<label for="boton14"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(9).png?raw=true">'+
              '</div>'+
          
            '</div>'+
          
            '</main>' +

            '<img class="Search-lp" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2022.png?raw=true" alt="">'+
            
            '<div id="header-buscador">'+
     
            '<ul class="nav">'+
              '<li><input id="searchbar" onkeyup="search_animal()" type="text"'+
              'name="search" placeholder="Search for food..">'+
              '<ul id="list">'+
                '<li type="radio" name="boton" id="boton11" class="animals"><label for="boton11">Manzana</li>'+
                '<li type="radio" name="boton" id="boton14" class="animals"><label for="boton12">Calabaza</label></li>'+
                '<li type="radio" name="boton" id="boton12" class="animals"><label for="boton14">Cebolla</li>'+
                '<li type="radio" name="boton" id="boton13" class="animals"><label for="boton13">Marañon</li>'+
                '<li type="radio" name="boton" id="boton10" class="animals"><label for="boton1">Aguacate</li>'+
                '<li type="radio" name="boton" id="boton9" class="animals"><label for="boton9">Limon</li>'+
                '<li type="radio" name="boton" id="boton8" class="animals"><label for="boton8">Brócoli</li>'+
                '<li type="radio" name="boton" id="boton7" class="animals"><label for="boton7">Zanahoria</li>'+
                '<li type="radio" name="boton" id="boton6" class="animals"><label for="boton6">Pepino</li>'+
                '<li type="radio" name="boton" id="boton5" class="animals"><label for="boton5">Banano</li>'+
                '<li type="radio" name="boton" id="boton4" class="animals"><label for="boton4">Melocotón</li>'+
                '<li type="radio" name="boton" id="boton3" class="animals"><label for="boton3">Coco</li>'+
                '<li type="radio" name="boton" id="boton2" class="animals"><label for="boton2">Fresa</li>'+
                '<li type="radio" name="boton" id="boton1" class="animals"><label for="boton1">Aguacate</li>'+
                '</ul>'+
                '</li>'+
            
            '</ul>'+
          '</div>'+


            '<div class="Integrantes">'+
            '<div>Integrantes <br> Biologia: <br> Karen Amanda Calderas de León <br> Jaydi Dayana Orrego Perez <br> Angel Gabriel Castro</div>'+
            '<div>Integrantes <br> Diseño Gráfico: <br> Detlef Ivan Iquique Galvez <br> Hannah Maribel Mijangos</div>'+
            '<div>Integrantes <br> Computación: <br> Oscar Gerardo de Jesus Ordoñez Alvarez <br> Alexis Fabian Pirir Montanico</div>'+
    
            '<div>Empresa: <br> Healthy Point</div>'+
            '<div>Paginas de referencia: <br> Nutrium <br> Pagina de inicio con Genshin Impact</div>'+
            '</div>',            
    }
    ]
    
    let Carbohidratos = document.querySelector("#Carbohidratos")
     
     function Desglosar(){
        root.innerHTML = Desplegar[0].Columna;   
     }
     Carbohidratos.addEventListener("click", Desglosar)
 }

     /********PARTE DE LIPIDOS************/

     export function LípidosDesgloce(){
        let Desplegar = [
            {
                Columna:
                '<header>' +
                '<img class="banner" src="./img/nutria.2 1.png" alt="">'+
                '<a class="primer" href="">Inicio</a>' +
                '<a class="segundo" href="">Calcular</a>' +
                '</header>'+
    
                '<img class="menu" src="https://github.com/Gerardo072/Img-Aps-/blob/main/Frutas.png?raw=true" alt="">'+
                '<h1 class="tittle2">¿Qué son las Lípidos?</h1>'+
        
    
    
    
                '<div class="Sector">'+
                '<p>'+
                'Los lípidos son las moléculas que se originan por completo <br> de '+
                'la condensación de tioésteres o unidades de isopreno. La <br> función que '+
                'tienen en el cuerpo humano es aportar energía, proteger los <br> organos, '+
                'ser estructuradores de la membrana celular y mediar las hormonas, <br> '+
                'por ello son sustancias indispensables, como un conjunto bastante <br> amplio '+
                'y variado de compuestos orgánicos de origen biológico. Los <br> lípidos más '+
                'importantes que intervienen en la absorción y metabolismo humano <br> son los '+
                'ácidos grasos, triacilgliceroles,  lípidos de membrana o <br> lípidos complejos  '+
                'las vitaminas liposolubles A, D, E y K y los esteroles.'+
                '</p>'+
                '</div>'+
    
    
    
    
                '<img class="fon-inferior" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2020.png?raw=true" alt="">'+
        
                '<section class="background"></section>'+
        
                '<div class="Tabla-1">'+
            
                '<div class="Tabla-2">'+
            '<div class="table">'+
                '<div class="Sección1">'+
                   '<div>Alimentos</div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Proteínas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                   '<div>Lípidos</div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Carbohidratos</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
                '<h1 class="tittle">Frutas</h1>'+
    
    
                '<main>'+

            '<div class="slider">'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton1" checked>'+
                '<label for="boton1"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(2).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton2">'+
                '<label for="boton2"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(1).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton3">'+
                '<label for="boton3"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(10).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton4">'+
                '<label for="boton4"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(12).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton5">'+
                '<label for="boton5"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias.png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton6">'+
                '<label for="boton6"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(11).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(13).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(14).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton8">'+
                '<label for="boton8"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(3).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton9">'+
                '<label for="boton9"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(4).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton10">'+
                '<label for="boton10"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(5).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton11">'+
                '<label for="boton11"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(6).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton12">'+
                '<label for="boton12"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(7).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton13">'+
                '<label for="boton13"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(8).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton14">'+
                '<label for="boton14"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(9).png?raw=true">'+
              '</div>'+
          
            '</div>'+
          
            '</main>' +
    
            '<img class="Search-lp" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2022.png?raw=true" alt="">'+
            
            '<div id="header-buscador">'+
     
            '<ul class="nav">'+
              '<li><input id="searchbar" onkeyup="search_animal()" type="text"'+
              'name="search" placeholder="Search for food..">'+
              '<ul id="list">'+
                '<li type="radio" name="boton" id="boton11" class="animals"><label for="boton11">Manzana</li>'+
                '<li type="radio" name="boton" id="boton14" class="animals"><label for="boton12">Calabaza</label></li>'+
                '<li type="radio" name="boton" id="boton12" class="animals"><label for="boton14">Cebolla</li>'+
                '<li type="radio" name="boton" id="boton13" class="animals"><label for="boton13">Marañon</li>'+
                '<li type="radio" name="boton" id="boton10" class="animals"><label for="boton1">Aguacate</li>'+
                '<li type="radio" name="boton" id="boton9" class="animals"><label for="boton9">Limon</li>'+
                '<li type="radio" name="boton" id="boton8" class="animals"><label for="boton8">Brócoli</li>'+
                '<li type="radio" name="boton" id="boton7" class="animals"><label for="boton7">Zanahoria</li>'+
                '<li type="radio" name="boton" id="boton6" class="animals"><label for="boton6">Pepino</li>'+
                '<li type="radio" name="boton" id="boton5" class="animals"><label for="boton5">Banano</li>'+
                '<li type="radio" name="boton" id="boton4" class="animals"><label for="boton4">Melocotón</li>'+
                '<li type="radio" name="boton" id="boton3" class="animals"><label for="boton3">Coco</li>'+
                '<li type="radio" name="boton" id="boton2" class="animals"><label for="boton2">Fresa</li>'+
                '<li type="radio" name="boton" id="boton1" class="animals"><label for="boton1">Aguacate</li>'+
                '</ul>'+
                '</li>'+
            
            '</ul>'+
          '</div>'+
    
                '<div class="Integrantes">'+
                '<div>Integrantes <br> Biologia: <br> Karen Amanda Calderas de León <br> Jaydi Dayana Orrego Perez <br> Angel Gabriel Castro</div>'+
                '<div>Integrantes <br> Diseño Gráfico: <br> Detlef Ivan Iquique Galvez <br> Hannah Maribel Mijangos</div>'+
                '<div>Integrantes <br> Computación: <br> Oscar Gerardo de Jesus Ordoñez Alvarez <br> Alexis Fabian Pirir Montanico</div>'+
        
                '<div>Empresa: <br> Healthy Point</div>'+
                '<div>Paginas de referencia: <br> Nutrium <br> Pagina de inicio con Genshin Impact</div>'+
                '</div>',            
        }
        ]
        
        let Lípidos = document.querySelector("#Lípidos")
         
         function Desglosar(){
            root.innerHTML = Desplegar[0].Columna;   
         }
         Lípidos.addEventListener("click", Desglosar)
     }

  /********PARTE DE VITAMINAS************/

  export function VitaminasDesgloce(){
    let Desplegar = [
        {
            Columna:
            '<header>' +
            '<img class="banner" src="./img/nutria.2 1.png" alt="">'+
            '<a class="primer" href="">Inicio</a>' +
            '<a class="segundo" href="">Calcular</a>' +
            '</header>'+

            '<img class="menu" src="https://github.com/Gerardo072/Img-Aps-/blob/main/Frutas.png?raw=true" alt="">'+
            '<h1 class="tittle2">¿Qué son las Vitaminas?</h1>'+
    



            '<div class="Sector">'+
            '<p>'+
            'Las vitaminas son compuestos orgánicos con gran relevancia <br> para el'+ 
            'metabolismo humano. estas sustancias inciden en la salud <br> beneficiando al '+
            'bienestar, crecimiento adecuado, son participe en la formación de <br> hormonas, '+
            'células sanguíneas, sustancias químicas del sistema nervioso y <br> material genético. '+
            
            'Las vitaminas liposolubles (A, D, E y K) suelen consumirse <br> con alimentos que '+
            'contienen grasa y, debido a que se pueden almacenar en <br> la grasa del cuerpo, '+
            'no es necesario tomarlas todos los días. Las vitaminas <br> hidrosolubles, las del '+
            'grupo B y la vitamina C, no se pueden almacenar y por <br> tanto se deben consumir '+
            'con frecuencia, preferiblemente a diario a excepción <br> de algunas vitaminas B.'+
            '</p>'+
            '</div>'+




            '<img class="fon-inferior" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2020.png?raw=true" alt="">'+
    
            '<section class="background"></section>'+
    
            '<div class="Tabla-2">'+
            '<div class="table">'+
                '<div class="Sección1">'+
                   '<div>Alimentos</div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Proteínas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Vitaminas</div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                   '<div>Lípidos</div>'+
                   '<div></div>'+
                   '<div></div>'+
                   '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                    '<div></div>'+
                '</div>'+
                '<div class="Sección1">'+
                    '<div>Carbohidratos</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                    '<div>1</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
            '<h1 class="tittle">Frutas</h1>'+


            '<main>'+

            '<div class="slider">'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton1" checked>'+
                '<label for="boton1"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(2).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton2">'+
                '<label for="boton2"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(1).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton3">'+
                '<label for="boton3"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(10).png?raw=true">'+
              '</div>'+
          
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton4">'+
                '<label for="boton4"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(12).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton5">'+
                '<label for="boton5"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias.png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton6">'+
                '<label for="boton6"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(11).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(13).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton7">'+
                '<label for="boton7"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(14).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton8">'+
                '<label for="boton8"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(3).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton9">'+
                '<label for="boton9"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(4).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton10">'+
                '<label for="boton10"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(5).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton11">'+
                '<label for="boton11"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(6).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton12">'+
                '<label for="boton12"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(7).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton13">'+
                '<label for="boton13"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(8).png?raw=true">'+
              '</div>'+
              '<div class="diapositiva">'+
                '<input type="radio" name="boton" id="boton14">'+
                '<label for="boton14"></label>'+
                '<img src="https://github.com/Gerardo072/ApS-frutas/blob/main/Calorias%20(9).png?raw=true">'+
              '</div>'+
          
            '</div>'+
          
            '</main>' +

            '<img class="Search-lp" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/image%2022.png?raw=true" alt="">'+
            
            '<div id="header-buscador">'+
     
            '<ul class="nav">'+
              '<li><input id="searchbar" onkeyup="search_animal()" type="text"'+
              'name="search" placeholder="Search for food..">'+
              '<ul id="list">'+
                '<li type="radio" name="boton" id="boton11" class="animals"><label for="boton11">Manzana</li>'+
                '<li type="radio" name="boton" id="boton14" class="animals"><label for="boton12">Calabaza</label></li>'+
                '<li type="radio" name="boton" id="boton12" class="animals"><label for="boton14">Cebolla</li>'+
                '<li type="radio" name="boton" id="boton13" class="animals"><label for="boton13">Marañon</li>'+
                '<li type="radio" name="boton" id="boton10" class="animals"><label for="boton1">Aguacate</li>'+
                '<li type="radio" name="boton" id="boton9" class="animals"><label for="boton9">Limon</li>'+
                '<li type="radio" name="boton" id="boton8" class="animals"><label for="boton8">Brócoli</li>'+
                '<li type="radio" name="boton" id="boton7" class="animals"><label for="boton7">Zanahoria</li>'+
                '<li type="radio" name="boton" id="boton6" class="animals"><label for="boton6">Pepino</li>'+
                '<li type="radio" name="boton" id="boton5" class="animals"><label for="boton5">Banano</li>'+
                '<li type="radio" name="boton" id="boton4" class="animals"><label for="boton4">Melocotón</li>'+
                '<li type="radio" name="boton" id="boton3" class="animals"><label for="boton3">Coco</li>'+
                '<li type="radio" name="boton" id="boton2" class="animals"><label for="boton2">Fresa</li>'+
                '<li type="radio" name="boton" id="boton1" class="animals"><label for="boton1">Aguacate</li>'+
                '</ul>'+
                '</li>'+
            
            '</ul>'+
          '</div>'+

            '<div class="Integrantes">'+
            '<div>Integrantes <br> Biologia: <br> Karen Amanda Calderas de León <br> Jaydi Dayana Orrego Perez <br> Angel Gabriel Castro</div>'+
            '<div>Integrantes <br> Diseño Gráfico: <br> Detlef Ivan Iquique Galvez <br> Hannah Maribel Mijangos</div>'+
            '<div>Integrantes <br> Computación: <br> Oscar Gerardo de Jesus Ordoñez Alvarez <br> Alexis Fabian Pirir Montanico</div>'+
    
            '<div>Empresa: <br> Healthy Point</div>'+
            '<div>Paginas de referencia: <br> Nutrium <br> Pagina de inicio con Genshin Impact</div>'+
            '</div>',            
    }
    ]
    
    let Vitaminas = document.querySelector("#Vitaminas")
     
     function Desglosar(){
        root.innerHTML = Desplegar[0].Columna;   
     }
     Vitaminas.addEventListener("click", Desglosar)
 }
