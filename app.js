let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissor = document.getElementById("btn-scissor");
let choiceUser = document.getElementById("eleccion-usuario");
let choiceCpu = document.getElementById("eleccion-cpu");
let pointUser = document.getElementById("point-user");
let pointCpu = document.getElementById("point-cpu");
let contenedorGanador = document.getElementById("gana-punto");
let btnReset = document.getElementById("btn");
let imgUser = document.getElementById("ele-user");
let imgCpu = document.getElementById("ele-cpu");
let opciones = ['piedra', 'papel', 'tijeras']
let imagenes = {
    piedra: './img/piedra.png',
    papel: './img/papel.png',
    tijera: './img/Tijera.png'
};

let puntoUserGanado = 0;
let puntoCpuGanado = 0;
let juegoActivo = true;

btnRock.addEventListener("click", () => userPlay("piedra"));
btnPaper.addEventListener("click", () => userPlay("papel"));
btnScissor.addEventListener("click", () => userPlay("tijera"));
btnReset.addEventListener("click", resetPoints);

function userPlay(userChoice) {
    if (!juegoActivo) return;
    
    choiceUser.textContent = `Tu elección es ${userChoice}`;
    imgUser.src = imagenes[userChoice]; 
    let cpuChoice = getCpuChoice();
    choiceCpu.textContent = `La CPU eligió ${cpuChoice}`;
    imgCpu.src = imagenes[cpuChoice];
    winner(userChoice, cpuChoice);
}

function getCpuChoice() {
    const choices = ["piedra", "papel", "tijera"];
    return choices[Math.floor(Math.random() * 3)];
}

function winner(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        empate();
    } else if (
        (userChoice === "piedra" && cpuChoice === "tijera") ||
        (userChoice === "tijera" && cpuChoice === "papel") ||
        (userChoice === "papel" && cpuChoice === "piedra")
    ) {
        ganausuario();
    } else {
        ganacpu();
    }
    popup();
}

function ganausuario() {
    puntoUserGanado++;
    pointUser.textContent = puntoUserGanado;
    contenedorGanador.textContent = "Ganaste un punto😍";
    if (puntoUserGanado === 3) {
        juegoActivo = false;
    }
}

function ganacpu() {
    puntoCpuGanado++;
    pointCpu.textContent = puntoCpuGanado;
    contenedorGanador.textContent = "La CPU ganó un punto😭";
    if (puntoCpuGanado === 3) {
        juegoActivo = false;
    }
}

function empate() {
    contenedorGanador.textContent = "Empate🤝";
}

function resetPoints() {
    puntoUserGanado = 0;
    puntoCpuGanado = 0;
    pointUser.textContent = puntoUserGanado;
    pointCpu.textContent = puntoCpuGanado;
    choiceUser.textContent = "TU ELECCIÓN";
    choiceCpu.textContent = "ELECCIÓN DE LA CPU";
    contenedorGanador.textContent = "Ganador";
    imgCpu.src = './img/presenta_-_simon-removebg-preview.png';
    imgUser.src = './img/presenta_-_simon-removebg-preview.png';
    juegoActivo = true;
}

function popup() {
    if (puntoUserGanado === 3) {
        Swal.fire({
            title: "¡Buen trabajo!",
            text: "¡Ganaste el juego!",
            icon: "success"
        });
    } else if (puntoCpuGanado === 3) {
        Swal.fire({
            title: "¡Lo siento!",
            text: "La CPU ganó el juego.",
            icon: "error"
        });
    }
}
