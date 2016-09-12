var numeroA = parseInt(prompt('Vamos a probar las operaciones matematicas, primero ingresa un numero'));
var numeroB = parseInt(prompt('ahora ingresa un segundo numero'));
var operacion = prompt('A continuacion podes elegir la operacion','sumar - restar - multiplicar - dividir');
operacion = operacion.toUpperCase();

// SOLUCION 1

// switch (operacion) {
// 	case operacion = '+':
// 	case operacion = 'sumar': 
// 		alert(numeroA + numeroB); 
// 		break; 
// 	case operacion = 'restar':
// 		alert(numeroA - numeroB);
// 		break;
// 	case operacion = 'multiplicar':
// 		alert(numeroA * numeroB);
// 		break;
// 	case operacion = 'dividir':
// 		alert(numeroA / numeroB);
// 		break;
// 	default: 
// 		alert('La operacion no existe');
// }

// SOLUCION 2

function calculadora(valor1,valor2,valor3){
	var resultadoFinal;
	if (valor3 === 'SUMAR'){
		resultadoFinal = valor1 + valor2;
		alert('el resultado de la operacion seleccionada es : ' + resultadoFinal);
	} else if (valor3 === 'RESTAR'){
		resultadoFinal = valor1 - valor2;
		alert('el resultado de la operacion seleccionada es : ' + resultadoFinal);
	} else if (valor3 === 'MULTIPLICAR'){
		resultadoFinal = valor1 * valor2;
		alert('el resultado de la operacion seleccionada es : ' + resultadoFinal);
	} else if (valor3 === 'DIVIDIR'){
		resultadoFinal = valor1 / valor2;
		alert('el resultado de la operacion seleccionada es : ' + resultadoFinal);
	}
	
}

calculadora(numeroA,numeroB,operacion);





