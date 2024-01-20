//DOM
const container = document.querySelector('.container')
var link = window.location.href.toString();
const host = window.location.host
// const imgid = link.replace('index.html', `${pic_name}`)
const imgid1 = link.replace('fastweb.html', 'sibajit_slider/slider_img/') + 'Zayka.jpeg';
const imgid2 = link.replace('fastweb.html', 'sibajit_slider/slider_img/') + 'thundermarch.jpg';
const imgid3 = link.replace('fastweb.html', 'sibajit_slider/slider_img/') + 'Flashmob.jpeg';
const imgid4 = link.replace('fastweb.html', 'sibajit_slider/slider_img/') + 'Rubelelo.jpeg';

//constants
const imgpath = [
    `${imgid1}`,
    `${imgid2}`,
    `${imgid3}`,
    `${imgid4}`,

]

const cardtxt = [
    'Food is the way of life...',
    'Let the music speak for itself...',
    'Dance Makes You alive...',
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
for (let i = 0; i < imgpath.length; i++) {
    appenNewCard();
}
let merch = document.querySelectorAll('.merch')
for (let i = 0; i < merch.length; i++) {
    let c=10;
    if(i%2==0)
    {

    setInterval(()=>{
        merch[i].style.transition= "4s";
        if(c==10){
            merch[i].style.rotate="-10deg";
            c=0;
        }
        else if(c==0){
            merch[i].style.rotate="10deg";
            c=10;
        }
    },4000)
}
else if(i%2!=0){
    setInterval(()=>{
        merch[i].style.transition= "4s";
        if(c==10){
            merch[i].style.rotate="10deg";
            c=0;
        }
        else if(c==0){
            merch[i].style.rotate="-10deg";
            c=10
        }
    },4000)
}
  }
