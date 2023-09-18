//Juego ahorado

alert("Bienvenido al ahoracado para novatos en Java")
let palabras = ["elefante", "escribano", "camello", "tecnologia", "esdrujula"]; //Palabras que va a tomar el juego
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let intentosMaximos = 6;
let intentos = 0;
//pistas
let primeraInicial = palabraSecreta.charAt(0);
let ultimaInicial = palabraSecreta.charAt(palabraSecreta.length - 1);

var palabraAdivinada = "_".repeat(palabraSecreta.length);

// Inicio del juego
function mostrarPalabraAdivinada() {
    alert("La palabra es: " + palabraAdivinada + " Pista: La palabra inicia por: "+primeraInicial+" y termina con: " + ultimaInicial );
}

function adivinarLetra() {
    let letra = prompt("Ingrese una letra que crea que contenga la palabra:");

    if (letra === null) {
        return;
    }
    letra = letra.toLowerCase();
// el substring devuelve el subconjunto de una cadena basado en la posición inicial especificada exelente para lo que queremos hacer jaja 
    if (palabraSecreta.indexOf(letra) !== -1) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta.charAt(i) === letra) {
                palabraAdivinada = palabraAdivinada.substring(0, i) + letra + palabraAdivinada.substring(i + 1);
            }
        }

        if (palabraAdivinada === palabraSecreta) {
            alert("¡Ganaste! La palabra efectivamente era: " + palabraSecreta);
        } else {
            mostrarPalabraAdivinada();
            adivinarLetra(); // Sigue adivinando letras
        }
    } else {
        intentos++;
        if (intentos >= intentosMaximos) {
            alert("¡Perdiste! La palabra era: " + palabraSecreta);
        } else {
            mostrarPalabraAdivinada();
            alert("Uhh esa letra no esta en la palabra te quedan otros " + (intentosMaximos - intentos));
            adivinarLetra();
        }
    }
}


mostrarPalabraAdivinada();
adivinarLetra();