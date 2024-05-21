'use strict';
console.log('ok');

const { createApp } = Vue;
console.log(Vue); //proprietà
console.log(createApp); //arrow function


// creare applicazione 
createApp({
    data(){
        return {
            title:'Futuristic New York',
            image:'https://media-assets.wired.it/photos/65250e824bcd5558b1bf6903/master/pass/nascondere%20immagini%20testo%20foto%20ai.png',
        };
        
    }
    
}).mount('#app');

// NON INSERIRE METODI ALL'INTERNO DI APPLICATIVO DATA