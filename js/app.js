//Navegation Menu
let bar_icon = document.querySelector('.bar-icon');
let nav = document.querySelector('.nav');
let enlaces = document.querySelector('.container-list');
let inicio= document.querySelector('.inicio');
let nosotros= document.querySelector('.nosotros');
let servicios= document.querySelector('.servicios');
let contacto= document.querySelector('.contacto');
let contador = true;

bar_icon.addEventListener('click', function(){
   this.classList.toggle('active');
   
   if (contador == true) {
     enlaces.style.width = '100%';
     enlaces.style.overflow = 'hidden';
     enlaces.style.transition = '0.5s';

     nav.style.background = '#281769';
     nav.style.transition = '0.5s';

     contador = false;

   }else{
     
     enlaces.style.width = '0%';
     enlaces.style.overflow = 'hidden';
     enlaces.style.transition = '0.5s';
     nav.style.background = 'transparent';
     nav.style.transition = '0.5s';
     contador = true;
   }

});

inicio.addEventListener('click', function(){

  
   enlaces.style.width = '0%';
   enlaces.style.overflow = 'hidden';
   enlaces.style.transition = '0.5s';
   nav.style.background = 'transparent';
   nav.style.transition = '0.5s';
   contador = true;

});

nosotros.addEventListener('click', function(){

  contador = false;
  enlaces.style.width = '0%';
  enlaces.style.overflow = 'hidden';
  enlaces.style.transition = '0.5s';
  nav.style.background = 'transparent';
  nav.style.transition = '0.5s';
 

});


servicios.addEventListener('click', function(){

  contador = false;
  enlaces.style.width = '0%';
  enlaces.style.overflow = 'hidden';
  enlaces.style.transition = '0.5s';
  nav.style.background = 'transparent';
  nav.style.transition = '0.5s';


});

contacto.addEventListener('click', function(){

  contador = false;
  enlaces.style.width = '0%';
  enlaces.style.overflow = 'hidden';
  enlaces.style.transition = '0.5s';
  nav.style.background = 'transparent';
  nav.style.transition = '0.5s';


});
