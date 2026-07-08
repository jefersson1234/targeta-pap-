const music = document.getElementById("bgMusic");
const btn = document.getElementById("playBtn");

btn.addEventListener("click", () => {
    music.play();
    btn.style.display = "none";
});

function crearCorazon(){

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random()*window.innerWidth+"px";

    heart.style.fontSize =
        (Math.random()*30+20)+"px";

    heart.style.animationDuration =
        (Math.random()*5+5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(crearCorazon,250);

//GLOBOS 
function crearGlobo(){

    const globo = document.createElement("div");

    globo.classList.add("balloon");

    globo.style.width = "60px";
    globo.style.height = "80px";

    /* Forma de globo */
    globo.style.borderRadius = "50% 50% 45% 45%";

    const leds = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
        "#ff8800",
        "#ffffff"
    ];

    const color =
        leds[Math.floor(Math.random()*leds.length)];

    globo.style.background = color;

    /* Efecto LED */
    globo.style.boxShadow = `
        0 0 10px ${color},
        0 0 20px ${color},
        0 0 40px ${color},
        0 0 80px ${color}
    `;

    globo.style.left =
        Math.random() * window.innerWidth + "px";

    /* Nudo del globo */
    const nudo = document.createElement("div");

    nudo.style.position = "absolute";
    nudo.style.bottom = "-8px";
    nudo.style.left = "50%";
    nudo.style.transform = "translateX(-50%)";

    nudo.style.width = "0";
    nudo.style.height = "0";

    nudo.style.borderLeft = "6px solid transparent";
    nudo.style.borderRight = "6px solid transparent";
    nudo.style.borderTop = `10px solid ${color}`;

    globo.appendChild(nudo);

    /* Hilo */
    const hilo = document.createElement("div");

    hilo.style.position = "absolute";
    hilo.style.left = "50%";
    hilo.style.top = "80px";

    hilo.style.width = "2px";
    hilo.style.height = "60px";
    hilo.style.background = "white";

    globo.appendChild(hilo);

    const duracion = Math.random() * 8 + 8;

    globo.style.animationDuration =
        `${duracion}s, 1s`;

    document.body.appendChild(globo);

    setTimeout(() => {
        globo.remove();
    }, duracion * 1000);
}

setInterval(crearGlobo, 500);

// MENSAJE LED
const loveText = document.createElement("div");

loveText.innerHTML =
"💙 Gracias por estar siempre a mi lado, por enseñarme a ser fuerte y nunca rendirme. Tu amor, tus consejos y tu ejemplo son el mejor regalo que la vida me ha dado. Te quiero mucho, Papá. 💙";

loveText.style.position = "fixed";
loveText.style.bottom = "20px";
loveText.style.left = "100%";

loveText.style.whiteSpace = "nowrap";
loveText.style.fontSize = "clamp(16px, 3vw, 35px)";
loveText.style.fontWeight = "bold";
loveText.style.color = "#00ffff";

loveText.style.textShadow = `
0 0 5px #00ffff,
0 0 10px #00ffff,
0 0 20px #00ffff,
0 0 40px #00ffff,
0 0 80px #00ffff`;

loveText.style.zIndex = "9999";

document.body.appendChild(loveText);

let posicion = window.innerWidth;

function moverMensaje(){

    posicion -= 2;

    if(posicion < -loveText.offsetWidth){
        posicion = window.innerWidth;
    }

    loveText.style.left = posicion + "px";

    requestAnimationFrame(moverMensaje);
}

moverMensaje();