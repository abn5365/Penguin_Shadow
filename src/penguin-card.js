import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PenguinCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .card {
    background-color: red;
    width: 400px;
  }
  button {
  text-transform: uppercase;
    color: white;
    paddling: 16px 16px;
    background-color: blue;
  }
  img{
    width: 250px;
  }
  .ptag{
    font-size: 20 px;
  }
  .btn{
    visibility: hidden;
    border: 8px dashed black;
    margin: 12px 12px;
  }
  
  button:focus{
    text-transform: lowercase;
    color: white;
    padding: 16px 16px;
    background-color: white;
  }
  .button-details {
    display: none; 
  }
  @media screen and (min-width: 501px) and (max-width: 799px) {
    .button-details {
      display: block;
      
      .card{
  }
  @media screen and (max-width: 500px) {
    .card {
      transform: scale(0.7); 
      
      wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  
    
  } 
  img{  
    width: 250px; 
    height: 250px: 
  } 
  .content{  
    text-align: center; 
    color: white; 
    display: flex; 
    flex-direction: column; 
    align-content: center; 
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated(){
    document.querySelector('#bg').addEventListener('click', () => {
      const card = this.shadowRoot.getElementById('card');
      card.style.backgroundColor = 'orange';
    });

    document.querySelector('#title').addEventListener('click', () => {
      const heading = this.shadowRoot.getElementById('heading');
      heading.textContent = '*penguin noises*';
    });

    document.querySelector('#duplicate').addEventListener('click', () => {
      const card = this.shadowRoot.getElementById('card');
      const clonedCard = card.cloneNode(true);
      document.body.appendChild(clonedCard);
    });

    document.querySelector('#delete').addEventListener('click', () => {
      const cards = this.shadowRoot.querySelectorAll('.card');
      if (cards.length > 1) {
        cards[cards.length - 1].remove();
      }
    });
    customElements.define('penguin-card', PenguinCard);

document.querySelector('#bg').addEventListener('click',function(e) { const card = document.getElementById('card'); card.style.backgroundColor = "orange";});//changes the background color

document.querySelector('#title').addEventListener('click',function(e) {const card = document.getElementById('heading'); card.textContent = "*penguin noises*";});//changing the header 

document.querySelector('#duplicate').addEventListener('click', function(e) {const itemToClone= document.querySelector(".card").cloneNode(true); document.body.appendChild(itemToClone);});//duplicate card

document.querySelector('#delete').addEventListener('click', function (e) {
 const lastCard = document.querySelector('.card:last-child');
 if (lastCard) {
  lastCard.remove();
  }
});
//delete last

document.querySelector('#details').addEventListener('click', function (e) {const card = document.getElementById('heading');
  card.style.display='none'});
  //hides heading description
  }
cloneCard(e) {
  const card = this.shadowRoot.querySelector('.cardContainer');
  const clone = card.cloneNode(true);
  this.shadowRoot.querySelector('.cards').appendChild(clone);
}
render() {
  return html`
    <button id="duplicate" class="button">Duplicate</button>
    <button id="delete" class="button">Delete</button>
    <button id="bg" class="button">Change Color</button>
    <button id="title" class="button">Change Title</button>
    <div class="blocks">
      <button id="details" class="button">Toggle Details</button>
    </div>
    <div id="card" class="card">
      <h3 id="heading">Club Penguin. Join Today!</h3>
      <img src="https://toppng.com/uploads/preview/club-penguin-old-penguin-11550188540ypyeuqw1as.png">
      <p>This is a penguin. You too could become a penguin!</p>
      <p style="display: none;">This is a hidden paragraph.</p>
    </div>
  `;
}
}


