//DOM
const container = document.querySelector('.container')
var link = window.location.href.toString();
const host = window.location.host
// const imgid = link.replace('index.html', `${pic_name}`)
const imgid1 = link.replace('index.html', '') + 'obviettivo.jpg';
const imgid2 = link.replace('index.html', '') + 'aaveg.jpg';
const imgid3 = link.replace('index.html', '') + 'symphonits.jpg';
const imgid4 = link.replace('index.html', '') + 'advay.png';

//constants
const imgpath = [
    `${imgid1}`,
    `${imgid2}`,
    `${imgid3}`,
    `${imgid4}`,

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

