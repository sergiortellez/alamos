/*<--	*** on window load ***	-->*/
window.onload = function() {
    navAnimations();
    asideAnimations();
    footerAnimations();
    mainAnimations();
  }
/*<--	*** end on window load ***	-->*/


/*<------------------------------------------------->
<!--	navAnimations	-->
<!-------------------------------------------------->
* Descripción:
    Añade todas las clases necesarias para animar la barra de navegación al cargar la página.
* Parámetros:
    -ninguno
* Dependencias: animate.css
* Devuelve/resultado: Anima la barra de navegación a la carga del documento
<!------------------------------------------------->*/
function navAnimations(){ 
     /*<--	*** navbar ***	-->*/
        const nav = document.querySelector('nav');

        //la nav está oculta desde el CSS, muéstrala.
        nav.style.opacity = 1;
        nav.classList.add('animate__animated','animate__bounceInDown');

    // /*<--	*** end navbar  ***	-->*/
}
/*<!------------------------------------------------->
<!--	end navAnimations	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	asideAnimations	-->
<!-------------------------------------------------->
* Descripción:
    Añade todas las clases necesarias para animar la barra lateral al cargar la página.
* Parámetros:
    -ninguno
* Dependencias: animate.css
* Devuelve/resultado: Anima la barra lateral a la carga del documento
<!------------------------------------------------->*/
function asideAnimations(){ 
    /*<--	*** navbar ***	-->*/
       const asideElemens = document.querySelectorAll('.card-nav');
       
       asideElemens.forEach(function(element){
        element.style.opacity =1;
        element.classList.add('animate__animated','animate__bounceInRight');
       });
       

   // /*<--	*** end navbar  ***	-->*/
}
/*<!------------------------------------------------->
<!--	end asideAnimations	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	footerAnimations	-->
<!-------------------------------------------------->
* Descripción:
    Añade todas las clases necesarias para animar el footer al cargar la página.
* Parámetros:
    -ninguno
* Dependencias: animate.css
* Devuelve/resultado: Anima el footer a la carga del documento
<!------------------------------------------------->*/
function footerAnimations(){ 
    /*<--	*** navbar ***	-->*/
       const footer = document.querySelector('footer');
       //footer está oculta desde el CSS, muéstrala.
       footer.style.opacity = 1;
       footer.classList.add('animate__animated','animate__bounceInUp');

   // /*<--	*** end navbar  ***	-->*/
}
/*<!------------------------------------------------->
<!--	end footerAnimations	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	mainAnimations	-->
<!-------------------------------------------------->
* Descripción:
    Añade todas las clases necesarias para animar el footer al cargar la página.
* Parámetros:
    -ninguno
* Dependencias: animate.css
* Devuelve/resultado: Anima el footer a la carga del documento
<!------------------------------------------------->*/
function mainAnimations(){ 
  
       const main = document.querySelector('main');
       //footer está oculta desde el CSS, muéstrala.
       main.style.opacity = 1;
       main.classList.add('animate__animated','animate__bounceInUp', 'animate__delay-1s');

  
}
/*<!------------------------------------------------->
<!--	end mainAnimations	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	verbAnimation	-->
<!-------------------------------------------------->
* Descripción:
    Anima los verbos en función a si están o no en el viewport
* Parámetros:
    -ninguno
* Dependencias: animate.css, gasp3
* Devuelve/resultado:
Los verbos se anima al entrar al viewport
<!------------------------------------------------->*/
function videoSectionAnimation(){

     gsap.registerPlugin(ScrollTrigger);
 
     const sections = gsap.utils.toArray("section");
     
     sections.forEach((section) => {
         gsap.to(section, {
           scrollTrigger: {
             trigger: section,
             start: "top 90%",
             end: "90% 25%",
             //once: true, //sólo a la carga, la primera vez
            // markers: true,
             onEnter: function(self){
                self.trigger.style.opacity = 1;
                 self.trigger.classList.add('animate__animated','animate__bounceInUp', 'animate__delay-1s');  
                 console.log('me ejecute') 
             },
            
           }
         })
     }); 
     
}
/*<!------------------------------------------------->
<!--	end verbAnimation	-->
<!------------------------------------------------->*/

