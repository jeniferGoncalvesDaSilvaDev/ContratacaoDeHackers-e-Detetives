class CardDetetive extends HTMLElement{
    constructor() {
       //herda html element 
       super();
       // a variavel, cria uma sombra para ter dominio total do documento html
       //modo open, deixa outros js´s alterem o arquivo
       const shadow = this.attachShadow({mode:'open'})
       //cria um novo elemento dentro do arquivo html
       shadow.innerHTML = "<h3>L Lawliet</h3>";

    }
}
//define um novo card e herda as prpriedades da classe CardNews-cria uma tag html!
customElements.define('card-detetive',CardDetetive);