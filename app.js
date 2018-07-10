Calculadora = function () {

//Se definen las variables que son accesadas por las diferentes funciones
var num1 = "";
var num2 = "";
var acumulado = 0;
var operacionActual = "";
var displayMax = "";
var onC = document.getElementById("on");
var signo = document.getElementById("sign");
var dividir = document.getElementById("dividido");
var multiplicar = document.getElementById("por");
var resta = document.getElementById("menos");
var suma = document.getElementById("mas");
var pantalla = document.getElementById("display");

var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");

//Se define dos funciones para validar el máximo de 8 dígitos

//La primera función valida que no se muestren más de 8 dígitos cuando el usuario digita números en la calculadora
function limiteDigitos() {
  if (pantalla.innerText.length >= 8) {
    displayMax = pantalla.innerText;
    pantalla.innerText = displayMax.slice(1, 8);
  }
};

//La segunda función utiliza el método toPrecision para limitar la cantidad de dígitos cuando la calculadora realiza operaciones
function resultadoMax() {
  if (pantalla.innerText.length >= 8) {
    displayMax = parseFloat(pantalla.innerText);
    pantalla.innerText = displayMax.toPrecision(5);
  }
};

function borrarPantalla() {
  pantalla.innerText = "";
};

//Se definen 3 funciones básicas para cada tecla:
//1- La función que permite accionar la tecla (sumar, restar, igual, digitar número, etc.)
//2- La función que al presionar la tecla reduce su imagen
//3- La función que devuelve la imagen a su tamaño original

onC.onclick = function () {
  pantalla.innerText = "0";
  num1 = "";
  acumulado = 0;
  operacionActual = "";
};

onC.onmousedown = function () {
  onC.style.transform = "scale(0.9, 0.9)";
}

onC.onmouseup = function () {
  onC.style.transform = "scale(1, 1)";
};

uno.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "1";
};

uno.onmousedown = function () {
  uno.style.transform = "scale(0.9, 0.9)";
};

uno.onmouseup = function () {
  uno.style.transform = "scale(1, 1)";
};

dos.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "2";
};

dos.onmousedown = function () {
  dos.style.transform = "scale(0.9, 0.9)";
};

dos.onmouseup = function () {
  dos.style.transform = "scale(1, 1)";
};

tres.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "3";
};

tres.onmousedown = function () {
  tres.style.transform = "scale(0.9, 0.9)";
};

tres.onmouseup = function () {
  tres.style.transform = "scale(1, 1)";
};

cuatro.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "4";
};

cuatro.onmousedown = function () {
  cuatro.style.transform = "scale(0.9, 0.9)";
};

cuatro.onmouseup = function () {
  cuatro.style.transform = "scale(1, 1)";
}

cinco.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "5";
};

cinco.onmousedown = function () {
  cinco.style.transform = "scale(0.9, 0.9)";
};

cinco.onmouseup = function () {
  cinco.style.transform = "scale(1, 1)";
};

seis.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "6";
};

seis.onmousedown = function () {
  seis.style.transform = "scale(0.9, 0.9)";
};

seis.onmouseup = function () {
  seis.style.transform = "scale(1, 1)";
};

siete.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "7";
};

siete.onmousedown = function () {
  siete.style.transform = "scale(0.9, 0.9)";
};

siete.onmouseup = function () {
  siete.style.transform = "scale(1, 1)";
};

ocho.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "8";
};

ocho.onmousedown = function () {
  ocho.style.transform = "scale(0.9, 0.9)";
};

ocho.onmouseup = function () {
  ocho.style.transform = "scale(1, 1)";
};

nueve.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "9";
};

nueve.onmousedown = function () {
  nueve.style.transform = "scale(0.9, 0.9)";
};

nueve.onmouseup = function () {
  nueve.style.transform = "scale(1, 1)";
};

cero.onclick = function () {
  if (pantalla.innerText == "0") {
    borrarPantalla();
  }
  limiteDigitos();
  pantalla.innerText = pantalla.innerText + "0";
};

cero.onmousedown = function () {
  cero.style.transform = "scale(0.9, 0.9)";
};

cero.onmouseup = function () {
  cero.style.transform = "scale(1, 1)";
};

punto.onclick = function () {
  if (pantalla.innerText == "0") {
    pantalla.innerText = "0" + ".";
  } else if (pantalla.innerText.indexOf(".") < 0) {
    pantalla.innerText = pantalla.innerText + ".";
  }
};

punto.onmousedown = function () {
  punto.style.transform = "scale(0.9, 0.9)";
};

punto.onmouseup = function () {
  punto.style.transform = "scale(1, 1)";
};

signo.onclick = function () {
  if (pantalla.innerText == 0) {
    pantalla.innerText = "-";
  } else if (pantalla.innerText.indexOf("-") < 0) {
    pantalla.innerText = "-" + pantalla.innerText;
  } else {
    pantalla.innerText = pantalla.innerText.slice(1);
  }
};

signo.onmousedown = function () {
  signo.style.transform = "scale(0.9, 0.9)";
};

signo.onmouseup = function () {
  signo.style.transform = "scale(1, 1)";
};

//Se definen las funciones suma, resta, multiplicación y división

suma.onclick = function () {
  if (operacionActual != "suma") {
    acumulado = parseFloat(pantalla.innerText);
    pantalla.innerText = "";
  } else {
    num1 = parseFloat(pantalla.innerText);
    acumulado += num1;
    pantalla.innerText = "";
  }
  operacionActual = "suma";
  limiteDigitos();
};

suma.onmousedown = function () {
  suma.style.transform = "scale(0.9, 0.9)";
};

suma.onmouseup = function () {
  suma.style.transform = "scale(1, 1)";
};

resta.onclick = function () {
  if (operacionActual != "resta") {
    acumulado = parseFloat(pantalla.innerText);
  } else {
    num1 = parseFloat(pantalla.innerText);
    num1 = -(num1);
    acumulado += num1;
  }
  pantalla.innerText = "";
  operacionActual = "resta";
  limiteDigitos();
};

resta.onmousedown = function () {
  resta.style.transform = "scale(0.9, 0.9)";
};

resta.onmouseup = function () {
  resta.style.transform = "scale(1, 1)";
};

multiplicar.onclick = function () {
  if (operacionActual != "multiplicar") {
    acumulado = parseFloat(pantalla.innerText);
  } else {
    num1 = parseFloat(pantalla.innerText);
    acumulado *= num1;
  }
  operacionActual = "multiplicar";
  pantalla.innerText = "";
  limiteDigitos();
};

multiplicar.onmousedown = function () {
  multiplicar.style.transform = "scale(0.9, 0.9)";
};

multiplicar.onmouseup = function () {
  multiplicar.style.transform = "scale(1, 1)";
};

dividir.onclick = function () {
  if (operacionActual != "dividir") {
    acumulado = parseFloat(pantalla.innerText);

  } else {
    num1 = parseFloat(pantalla.innerText);
    acumulado /= num1;
  }
  operacionActual = "dividir";
  pantalla.innerText = "";
  limiteDigitos();
};

dividir.onmousedown = function () {
  dividir.style.transform = "scale(0.9, 0.9)";
};

dividir.onmouseup = function () {
  dividir.style.transform = "scale(1, 1)";
};

//Se define una función especial para operar el igual que permite concatenar operaciones
igual.onclick = function () {
  switch (operacionActual) {

    case "suma":
        num2 = parseFloat(pantalla.innerText);
        pantalla.innerText = acumulado + num2;
        operacionActual = "sumaIgual";
        resultadoMax();
      break;

    case "sumaIgual":
        acumulado += num2;
        pantalla.innerText = acumulado;
        resultadoMax();
      break;

    case "resta":
        num2 = parseFloat(pantalla.innerText);
        pantalla.innerText = acumulado - num2;
        operacionActual = "restaIgual";
        resultadoMax();
      break;

      case "restaIgual":
          acumulado -= num2;
          pantalla.innerText = acumulado;
          resultadoMax();
        break;

      case "multiplicar":
          num2 = parseFloat(pantalla.innerText);
          pantalla.innerText = acumulado * num2;
          operacionActual = "multiplicarIgual";
          resultadoMax();
        break;

      case "multiplicarIgual":
          acumulado = parseFloat(pantalla.innerText);
          pantalla.innerText = acumulado * num2;
          resultadoMax();
        break;

      case "dividir":
          num2 = parseFloat(pantalla.innerText);
          pantalla.innerText = acumulado / num2;
          operacionActual = "dividirIgual";
          resultadoMax();
        break;

      case "dividirIgual":
          acumulado = parseFloat(pantalla.innerText);
          pantalla.innerText = acumulado / num2;
          resultadoMax();
        break;
  }
};

igual.onmousedown = function () {
  igual.style.transform = "scale(0.9, 0.9)";
};

igual.onmouseup = function () {
  igual.style.transform = "scale(1, 1)";
};
}
Calculadora();
