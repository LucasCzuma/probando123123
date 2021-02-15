//3 CHICOS DE 23 AÑOS ENTRAN A UNA HELADERIA A COMPRAR UN HELADO PERO HAY
// UN PROBLEMA: LOS PRECIOS NO ESTAN AL LADO DE CADA ESTANTE CON SU 
// RESPECTIVO HELADO. ELLOS QUIEREN COMPRAR EL HELADO MAS CARO QUE PUEDAN COMPRAR
// CON LA PLATA QUE TIENEN, ASI QUE .... VEAMOS COMO PODEMOS AYUDARLOS.

// ROBERT TIENE $1.5 USD
// PEDRO TIENE $ 1.7 USD
// COFLA TIENE $3 USD

// LOS PRECIOS DE LOS HELADO SON LOS SIGUIENTES
// PALITO DE HELADO DE AGUA:          $0.6 USD
// PALITO DE HELADO DE CREMA:         $ 1 USD
// BOMBON HELADO DE MARCA HELADIX:    $1.6 USD
// BOMBON HELADO DE MARCA HELADOVICH: $ 1.7 USD
// BOMBON HELADO DE MARCA HELARDO:    $1.8 USD
// BOTECITO DE HELADO CON CONFITES:   $2.9 USD


// CREAR SOLUCIONES
// PEDIRLES QUE INGRESEN EL MONTO QUE TIENEN Y MOSTRARLES EL HELADO
// MAS CARO QUE PUEDEN COMPRAR, SI HAY 2 O MAS CON EL MISMO PRECIO
// MOSTRAR TODOS.

// COFLA QUIERE SABER CUANTO ES EL VUELTO


dineroCofla = prompt('cuanto dinero tienes cofla?')
dineroRobert = prompt('cuanto dinero tienes robert')
dineroPedro = prompt('cuanto dinero tienes robert')




	if (dinero < 1 && dinero >= 0.6) {
		console.log('puedes comprar un helado palito de agua')
	}
	else if (dinero >= 1 && dinero <= 1.6) {
		console.log('puedes comprar un helado palito de crema')
	}
	else if (dinero >= 1.6 && dinero < 1.7) {
		console.log('puedes comprar un helado de marca heladix')
	}

	else if (dinero >= 1.7 && dinero < 1.8) {
		console.log('puedes comprar un helado marca heladovich')
	}
	else if (dinero >= 1.8 && dinero < 2.9) {
		console.log('puedes comprar un helado marca helardo')
	}
	else if (dinero >= 3) {
		console.log('puedes comprar un helado con confites su vuelto es de $0.1usd')
	}
	else {
		alert('No tienes dinero suficiente')
	}


