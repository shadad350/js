export const PI = Math.PI;

export let usuario = "Jon";
const password = "qwerty";

//export default password;

const hello = () => console.log("hola");

export default function saludar() {
    console.log('Hola Módulos +ES6');
}

export  class Saludar{
    constructor(){
        console.log('Hola Clases +ES6');
    }
}
