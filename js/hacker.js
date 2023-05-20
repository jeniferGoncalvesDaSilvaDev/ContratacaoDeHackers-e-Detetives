class SatoshiCard extends HTMLElement{
    constructor(){
        super();
        const sombra= this.attachShadow({mode: "open"});
        sombra.appendChild(this.build());
        sombra.appendChild(this.styles());
        
    }
    build(){
        const hacker = document.createElement('div');
        detetive.setAttribute('class', "hacker");
        const h2 = document.createElement('h2');
        h2.textContent = 'Hacker';
        hacker.appendChild(h2);
        const divLeft = document.createElement('div');
        divLeft.setAttribute('class', "card-left");
        hacker.appendChild(divLeft);
        const divRight = document.createElement('div');
        divRight.setAttribute('class', "card-right");
        hacker.appendChild(divRight);
        //div left 
        const listHacker = document.createElement('ol');
        listHacker.setAttribute('class', "lista-hacker");
        divLeft.appendChild(listHacker);
        const listH = document.createElement('li');
        listHacker.appendChild(listH);
        const h3 = document.createElement('h3');
        listH.appendChild(h3);
        h3.textContent = 'Satoshi Nakamura';
        const p = document.createElement('p');
        listH.appendChild(p);
        p.textContent = 'L, seu nome, identidade, localização é descohecido. Sua reputação o precede como o melhor detetive do mundo, não deixando de resolver todos os casos.';
        const button = document.createElement('button');
        button.setAttribute('class', "button");
        button.setAttribute('id', 'button');
        button.textContent = 'Let s Talk';
        listH.appendChild(button);
        //div right
        const img = document.createElement('img');
        img.setAttribute('src', '/assets/satoshi-anonimous.jpg');
        img.setAttribute('alt','satoshi');
        divRight.appendChild(img);

        return hacker;

    }
    styles(){
          const style = document.createElement('style');
          style.textContent = `
          .hacker{
            border:1px solid purple;
            box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
           -webkit-box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
           -moz-box-shadow: 25px 2px 11px 11px rgba(0,0,0,0.82);
           z-index:2;
           width: 100%;
           
        }
        .lista-hacker h3{
            color:rgb(39, 77, 39);
            text-transform: uppercase;
            font-family:'Noto Sans JP', sans-serif; 
        }
            
        .lista-hacker p{
            color:purple;
            font-family:'Noto Sans JP', sans-serif;
            font-size:20px;
            letter-spacing: normal;
        }
        .hacker{
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
          `
    }
       
 
}

customElements.define("satoshi-card", SatoshiCard);