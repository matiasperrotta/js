
alert("ingrese la opcion del productor que desea llevar, para salir ingrese 0")
let seleccionarProductos = number(prompt("1- mause $2500 2- teclado $1500 3- placas de video 12000"))
let seleccionarCantidad;
let total = 0




const cantidad = () => {
    return cant * precio 
}




while (seleccionarProductos != "ESC") {
    switch (seleccionarProductos) {
    case 1:
        seleccionarCantidad = number(prompt("el producto seleccionado es mause, indique la cantidad "))
        total += cantidad(seleccionarCantidad, 2500)

        break;
    case 2:
        seleccionarCantidad = number(prompt("el producto seleccionado es teclado , indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)

        break;
    case 3:
    seleccionarCantidad = number(prompt("el producto seleccionado es placa de video , indique la cantidad"))
        total += cantidad(seleccionarCantidad, 6500)

        break

        default:
            break;
    }
    let seleccionarProductos = number(prompt("1- mause $2500 2- teclado $1500 3- placas de video 12000"))
}

alert("el total de la compra es de " + total )
console.log(arrayProductos);

    const envio = () =>{
        if (total >= 10000) {
            alert("el envio es gratuito")
        }else{
            total += 10000
            alert("el costo de envio es de 1000, el total es:"+total )
        }
    }

    envio()


