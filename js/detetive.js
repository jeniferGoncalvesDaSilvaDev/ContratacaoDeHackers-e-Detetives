/*Classe para card de detetives*/
//L
class CardL extends HTMLElement{
    constructor() {
       //herda html element 
       super();
       // a variavel, cria uma sombra para ter dominio total do documento html
       //modo open, deixa outros js´s alterem o arquivo
       const shadow = this.attachShadow({mode:'open'})
       //cria um novo elemento dentro do arquivo html
       //shadow.innerHTML = "<h3>L Lawliet</h3>";
       shadow.appendChild(this.build());
       shadow.appendChild(this.styles());

    }

    build(){
        const detetive = document.createElement('div');
        detetive.setAttribute('class', "detetive");
        const h2 = document.createElement('h2');
        h2.textContent = 'Detetive';
        detetive.appendChild(h2);
        const divLeft = document.createElement('div');
        divLeft.setAttribute('class', "card-left");
        detetive.appendChild(divLeft);
        const divRight = document.createElement('div');
        divRight.setAttribute('class', "card-right");
        detetive.appendChild(divRight);
        //div left 
        const listDetetive = document.createElement('ol');
        listDetetive.setAttribute('class', "lista-detetive");
        divLeft.appendChild(listDetetive);
        const listD = document.createElement('li');
        listDetetive.appendChild(listD);
        const h3 = document.createElement('h3');
        listD.appendChild(h3);
        h3.textContent = 'L Lawliet';
        const p = document.createElement('p');
        listD.appendChild(p);
        p.textContent = 'L, seu nome, identidade, localização é descohecido. Sua reputação o precede como o melhor detetive do mundo, não deixando de resolver todos os casos.';
        const button = document.createElement('button');
        button.setAttribute('class', "button");
        button.setAttribute('id', 'button');
        button.textContent = 'Let s Talk';
        listD.appendChild(button);
        //div right
        const img = document.createElement('img');
        img.setAttribute('src', '/assets/L.png');
        img.setAttribute('alt','L Lawliet');
        divRight.appendChild(img);

        return detetive;

    }
  
    styles(){
        const style = document.createElement('style');
        style.textContent = `
        *{
            box-sizing:border-box;
            margin:0;
            padding:0;
            list-style:none;
            scroll-behavior:smooth
        }
        .detetive{
           border:1px solid purple;
           box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
          -webkit-box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
          -moz-box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
           z-index:2;
           width: 100%; 
        }
        .detetive h2{
            color:rgb(139, 22, 22);
        }
        .card-right img{
            height: 200px;
            width: 200px;
        }
        .lista-detetive h3{
            color:rgb(39, 77, 39);
            text-transform: uppercase;
            font-family:'Noto Sans JP', sans-serif; 
        }
        .lista-detetive p{
            color:purple;
            font-family:'Noto Sans JP', sans-serif;
            font-size:20px;
            letter-spacing: normal;
        } 
        .detetive{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top:200px;
        } 
        .button{
            background-color: black;
            color:rgb(39, 77, 39);
            width: 100px;
            height: 30px;
            margin-top:20px;
            text-transform: uppercase;
        }
        .button:hover{
            transition: background-color;
            background-color: rgb(19, 189, 19);
            transition: transform 1s;
            transform: rotateZ(360deg);
            
        } 
      }`
      return style;
    }
}
//naomi misora
class CardNaomi extends HTMLElement{
    constructor() {
       //herda html element 
       super();
       // a variavel, cria uma sombra para ter dominio total do documento html
       //modo open, deixa outros js´s alterem o arquivo
       const shadow = this.attachShadow({mode:'open'})
       //cria um novo elemento dentro do arquivo html
       //shadow.innerHTML = "<h3>L Lawliet</h3>";
       shadow.appendChild(this.build());
       shadow.appendChild(this.styles());

    }
    //L
    build(){
        const detetive = document.createElement('div');
        detetive.setAttribute('class', "detetive");
        const h2 = document.createElement('h2');
        h2.textContent = 'Detetive';
        detetive.appendChild(h2);
        const divLeft = document.createElement('div');
        divLeft.setAttribute('class', "card-left");
        detetive.appendChild(divLeft);
        const divRight = document.createElement('div');
        divRight.setAttribute('class', "card-right");
        detetive.appendChild(divRight);
        //div left 
        const listDetetive = document.createElement('ol');
        listDetetive.setAttribute('class', "lista-detetive");
        divLeft.appendChild(listDetetive);
        const listD = document.createElement('li');
        listDetetive.appendChild(listD);
        const h3 = document.createElement('h3');
        listD.appendChild(h3);
        h3.textContent = 'Naomi Misora';
        const p = document.createElement('p');
        listD.appendChild(p);
        p.textContent = 'Naomi Misora, uma das melhores detetives do FBI, seu mehor feito, foi resolver a série de assassinatos de BB em Los Angeles';
        const button = document.createElement('button');
        button.setAttribute('class', "button");
        button.setAttribute('id', 'button');
        button.textContent = 'Let s Talk';
        listD.appendChild(button);
        //div right
        const img = document.createElement('img');
        img.setAttribute('src', '/assets/naomi.jpg');
        img.setAttribute('alt','Naomi');
        divRight.appendChild(img);

        return detetive;

    }
  
    styles(){
        const style = document.createElement('style');
        style.textContent = `
        *{
            box-sizing:border-box;
            margin:0;
            padding:0;
            list-style:none;
            scroll-behavior:smooth
        }
        .detetive{
           border:1px solid purple;
           box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
          -webkit-box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
          -moz-box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
           z-index:2;
           width: 100%; 
        }
        .detetive h2{
            color:rgb(139, 22, 22);
        }
        .card-right img{
            height: 200px;
            width: 200px;
        }
        .lista-detetive h3{
            color:rgb(39, 77, 39);
            text-transform: uppercase;
            font-family:'Noto Sans JP', sans-serif; 
        }
        .lista-detetive p{
            color:purple;
            font-family:'Noto Sans JP', sans-serif;
            font-size:20px;
            letter-spacing: normal;
        } 
        .detetive{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top:200px;
        } 
        .button{
            background-color: black;
            color:rgb(39, 77, 39);
            width: 100px;
            height: 30px;
            margin-top:20px;
            text-transform: uppercase;
        }
        .button:hover{
            transition: background-color;
            background-color: rgb(19, 189, 19);
            transition: transform 1s;
            transform: rotateZ(360deg);
            
        } 
      }`
      return style;
    }
}







//define um novo card e herda as prpriedades da classe CardNews-cria uma tag html!
customElements.define('card-l',CardL);
customElements.define('card-naomi',CardNaomi);