class Card{
    constructor({imgLocation,onDismiss}){
        this.imgLocation= imgLocation;
        this.#init();
        this.onDismiss=onDismiss;
    }

//private properties
#startingPoint;
#offsetX;
#offsetY;
//private methods
#init = () =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src=this.imgLocation;
    card.append(img);

    const txt =document.createElement('div');
    txt.classList.add('text');
    card.append(txt);

    this.element = card;
    console.log(this);
    
    this.#listenTOMousevents();
}

#listenTOMousevents = ()=>{
    // mousedown
    this.element.addEventListener('mousedown',(e)=>{
        const{clientX, clientY} = e ;        
        this.#startingPoint={ x:clientX , y: clientY};
        document.addEventListener('mousemove', this.#handleMouseMove)
    })

    // prevent drag
    this.element.addEventListener('dragstart',(e)=>{
        e.preventDefault();
    });

    //mouseup
    this.element.addEventListener('mouseup',this.#handleMouseUp)

        // this.element.style.transition="0.6s";
    }
#handleMouseUp =  (e)=>{
        this.#startingPoint= null;
        document.removeEventListener('mousemove', this.#handleMouseMove);
}
#handleMouseMove =(e) =>{
        if (!this.#startingPoint) return;
        const { clientX, clientY} = e;
        this.#offsetX =clientX - this.#startingPoint.x;
        this.#offsetY= clientY - this.#startingPoint.y;
        this.element.style.transform =`translate( ${this.#offsetX}px, 0px )`;
        //dismiss card when moving too far away
        // console.log(this.#offsetX);
        
        if((Math.abs(this.#offsetX) > 230)){
            // this.element.style.left='100px'
            // 
            // this.element.style.opacity='0'
            const direction = this.#offsetX > 0 ? 1:-1;
            this.#dismiss();
        }
        
    }
#dismiss=(direction)=>{
        this.#startingPoint=null;
        document.removeEventListener('mouseup',this.#handleMouseUp)
        document.removeEventListener("mousemove",this.#handleMouseMove)
        this.element.style.transition='1.5s'
        this.element.style.transform= `translate(1000px,0px)`
        this.element.style.opacity= `0`;
        setTimeout(()=>{
            this.element.remove();
            this.element.style.transform= `translate(calc(-15% * var(--y)),0px)`;
            this.element.style.transition='0.6s';
            this.element.style.opacity= `1`;
            //updates --y value
            container.append(this.element);
            this.element.style.setProperty('--y', this.#sety());
            // console.log(this.#sety());
            
        },2000)
        if (typeof this.onDismiss ==='function') {
            this.onDismiss();
        }
    }
#sety = () =>{
        for (const item of (document.getElementsByClassName('card'))) {
            console.log(item, 'item');
            if (item.style.getPropertyValue('--y') > 0) {
                console.log(item.style.getPropertyValue('--y') );
                item.style.setProperty('--y', (item.style.getPropertyValue('--y') - 1))                
                console.log(item.style.getPropertyValue('--y'), 'heyy' );
            }
            else {
                item.style.setProperty('--y', y_arr.length - 1) ;
                console.log(item.style.getPropertyValue('--y'), 'heyyyy' );
                console.log('else');
                
            }
        }
        console.log(y_arr[y_arr.length-1]);
        return y_arr[y_arr.length-1];
    }

}

