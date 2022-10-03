const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

const lampOn = () => { 
    lamp.src = 'img/ligada.jpg';
}

const lampOff = () => {
    lamp.src = 'img/apagadalamp.jpg';
}

const lampBroken = () => {
    lamp.src = 'img/lampadaquebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
