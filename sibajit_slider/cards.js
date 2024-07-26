class Card {
    constructor({ imgLocation, onDismiss }) {
        this.imgLocation = imgLocation;
        this.#init();
        // this.onDismiss = onDismiss;
        this.element.style.transition = '0.6s';

    }

    //private properties
    #startingPoint;
    #offsetX;
    #offsetY;
    //private methods
    #init = () => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = this.imgLocation;
        card.append(img);

        const txt = document.createElement('div');
        txt.classList.add('text');
        card.append(txt);

        this.element = card;
        this.#listenTOMousevents()
    }

    #listenTOMousevents = () => {
        // mousedown
        this.element.addEventListener('mousedown', (e) => {
            const { clientX, clientY } = e;
            this.#startingPoint = { x: clientX, y: clientY };
            document.addEventListener('mousemove', this.#handleMouseMove)
        })

        // move to another webpage
        this.element.addEventListener('dblclick', (e)=>{
            window.location.href= 'https://www.youtube.com/';
            console.log(window.location.href);

            
            // window.location.href= 'www.youtube.com';

        })
        // prevent drag
        this.element.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        //mouseup
        this.element.addEventListener('mouseup', this.#handleMouseUp)

        // this.element.style.transition="0.6s";
    }
    #handleMouseUp = (e) => {
        this.#startingPoint = null;
        document.removeEventListener('mousemove', this.#handleMouseMove);
    }
    #handleMouseMove = (e) => {
        if (!this.#startingPoint) return;
        const { clientX, clientY } = e;
        this.#offsetX = clientX - this.#startingPoint.x;
        this.#offsetY = clientY - this.#startingPoint.y;
        this.element.style.transform = `translate( ${this.#offsetX}px, 0px )`;
        
        //dismiss card when moving too far away

        if ((Math.abs(this.#offsetX) > 230)) {
            const direction = this.#offsetX > 0 ? 1 : -1;
            this.#dismiss();
        }

    }
    #dismiss = (direction) => {
        this.#startingPoint = null;
        document.removeEventListener('mouseup', this.#handleMouseUp)
        document.removeEventListener("mousemove", this.#handleMouseMove)
        this.element.style.transition = '1.5s'
        this.element.style.transform = `translate(1000px,0px)`
        this.element.style.opacity = `0`;
        setTimeout(() => {
            this.element.remove();
            this.element.style.transform = `translate(calc(-5% * var(--y)),0px)`;
            this.element.style.transition = '0.6s';
            this.element.style.opacity = `1`;
            //updates --y value
            console.log(this.#sety());
            this.element.style.setProperty('--y', y_arr[y_arr.length - 1]);
            
            setTimeout(()=>{
                container.append(this.element);
            },200)
            // console.log(this.#sety());

        }, 800)
        if (typeof this.onDismiss === 'function') {
            this.onDismiss();
        }
    }
    #sety = () => {
        for (const item of (document.getElementsByClassName('card'))) {
            if (item.style.getPropertyValue('--y') > 0) {
                item.style.setProperty('--y', (item.style.getPropertyValue('--y') - 1))
            }
        }
        
    }

    
}
