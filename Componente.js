class Componente extends HTMLElement {
    constructor() {
        super();
        console.log("Elemento creado");
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style> p{
                color: red;}
           
            </style>
            <p>hola mundo</p>

        `;
}}