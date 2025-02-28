const array = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

const valorMaximo = Math.max(...array)
console.log(valorMaximo)
//contar donde se encuentra el numero

const listaDeMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const masConMayorVentas = array.indexOf(valorMaximo)
console.log(masConMayorVentas)

const mes = listaDeMeses[masConMayorVentas]
console.log(mes)