$( document ).ready(function(){
  var hamburgerIconOpen = $('.header-right > a'); //referenzio il favicon dell'hamburger per aprirlo
  var hamburgerIconClose = $(".hamburger-menu .close");//referenzio il favicon dell'hamburger per chiuderlo
  var hamburger = $('.hamburger-menu');//referenzio l'hamburger menù di default display none 
 
  hamburgerIconOpen.click(apri); //richiamo la funzione apri quando avviene il click sull'hamburgerIconOpen referenziato con il favicon dell'hamburger per aprirlo
  hamburgerIconClose.click(chiudi);//richiamo la funzione chiudi quando avviene il click sull'hamburgerIconClose referenziato con il favicon dell'hamburger per chiuderlo

  function apri(){ //funzione che apre l'hamburger di default display none con un fadeIn di 1 secondo
    hamburger.fadeIn(1000);
  }
  function chiudi(){//funzione che chiude l'hamburger di default display none con un fadeOut di 1 secondo
    hamburger.fadeOut(1000);
  }

});



/* risoluzione vista a lezione. aggiungere la classe active quando si clicca l'icona dell'haburger menu e poi togliere la classe active quando clicco l'icona x */