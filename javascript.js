//DOM
const container = document.querySelector('.container')

//constants
const imgpath = [
    'http://127.0.0.1:3000/tried/obviettivo.jpg',
    'http://127.0.0.1:3000/tried/aaveg.jpg',
    'http://127.0.0.1:3000/tried/symphonits.jpg',
    'http://127.0.0.1:3000/tried/advay.png'
]

const cardtxt = [
    'Share your view of the world with us ...',
    'Where dreams come alive ; Dreams take flight...',
    'Let the music speak for itself...',
    'Unleash the Drama within...'
]

//variable
let cardCount= 0;
const y_arr =[];

// functions
function appenNewCard(){
    const card = new Card({
         imgLocation:imgpath[cardCount%4]
    });
    card.element.querySelector('.text').innerHTML=`<p>${cardtxt[cardCount%4]}</p>`;
    
    container.append(card.element);
    card.element.style.setProperty('--y', cardCount)
    y_arr.push(cardCount);
    cardCount++;

    const cards= document.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
    card.style.setProperty('--y',index);        
    });
    
};
//first 5 cards
for (let i = 0; i < 4; i++) {
    appenNewCard();
}

