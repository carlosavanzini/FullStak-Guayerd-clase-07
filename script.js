// Diseñar un sistema para una tienda donde el menú ofrezca las siguientes opciones:
// Cobrar
// Retirar dinero de la caja
// Ver balance de caja
// Ver los montos totales de todas las operaciones realizadas
// (Ej: 2500,120,340). etc. 
// Salir

// 1): Debemos ingresar los precios de cada uno de los objetos que el cliente fue comprando, uno por uno hasta que se avise que finalizó la carga. Preguntar si abona con tarjeta o efectivo. Si la compra supera los $2000 y paga en efectivo, realizar un descuento del 5%. Si la compra supera los $5000, realizar un descuento del 10% con ambos medios de pago. Mostrar el total de la cuenta. Si paga en efectivo, consultar con cuánto paga y avisar cuál es el vuelto que se le debe otorgar.
// 2) Si el monto que se solicita retirar es menor al monto que hay disponible en caja (pagos en efectivo), realizar la operación.
// 3) Ver cuánto se pagó en tarjeta y cuánto se pagó en efectivo.
// 4) Mostrar todos los montos de las operaciones (DE COMPRA, no retiros), tanto en tarjeta como en efectivo.
// 5) Finaliza el programa.
let suma=0;
let precio;
let menu;
let pago;
let vuelto;
let tarjeta=0;
let monto;
let balance;
let efectivo=0;
let totalVentasEfectivo=0;
let totalVentasTarjeta=0;
let totalEfectivoCaja=0;
let descuentoEfectivo=0;
let retiro=0;
let compras=[];
let ver;

    alert("BIENVENIDOS!!!")
    while(menu!=5){ //pide los precios de los productos que vamos a llevar
        menu = parseInt(prompt("¿Que operacion desea realizar?\n1.Cobrar\n2.Retirar dinero de la caja\n3.Ver balance de caja\n4.Montos de las operaciones de compras\n5.Salir"));
       

          switch (menu) {
            case 1: // Cobrar
              do {    //ingreso los precios del producto, hasta que el cajero ingrese 0
                      precio = parseInt(prompt("Ingrese el precio del producto, PARA FINALIZAR INGRESE 0 "));
                      if (precio!=0) {
                        compras.push(precio);
                      }
                      suma = suma + precio;
                      alert(`El total es igual a ${suma} pesos`);
              } while (precio != 0);
                      let abono = parseInt(prompt("¿Con qué desea abonar?\n1.efectivo\n2.tarjeta"));
                      if (abono===1) {
                          efectivo=suma;   //asigno suma a efectivo para despues descriminar las ventas
                      }else if(abono===2){
                        tarjeta=suma;     // asigno suma a tarjeta para despues descriminar las ventas
                      }
                 
                  if (abono === 1 && efectivo > 2000 && efectivo<=5000) {
                      descuento = efectivo * 0.05;
                      efectivo = efectivo - descuento;
                      totalVentasEfectivo=efectivo+totalVentasEfectivo;// voy sumando las ventas en efectivo
                      totalEfectivoCaja = efectivo+totalEfectivoCaja;// voy sumando para mi caja
                      alert(`El monto a pagar con descuento es de ${efectivo} pesos`);}
                  else if (abono === 1 && efectivo <=2000){
                      totalVentasEfectivo=efectivo+totalVentasEfectivo;// voy sumando las ventas en efectivo
                      totalEfectivoCaja = efectivo+totalEfectivoCaja;// voy sumando mi caja
                      alert(`El monto a pagar en efectivo sin descuento es de ${efectivo} pesos`);
                    }
                  else if (abono === 1 && efectivo > 5000) {
                      descuentoEfectivo = efectivo * 0.10;
                      efectivo = efectivo - descuentoEfectivo;
                      totalVentasEfectivo=efectivo+totalVentasEfectivo; //voy sumando las ventas en efectivo
                      totalEfectivoCaja = efectivo+totalEfectivoCaja;//voy sumando mi caja
                      alert(`El monto con descuento incluido es ${efectivo} pesos`);
                     }
                  if ( abono === 2 && tarjeta > 5000){
                      descuento= tarjeta *0.10;
                      tarjeta= tarjeta-descuento;
                      totalVentasTarjeta=totalVentasTarjeta + tarjeta;// voy sumando las ventas en tarjeta, segun condicion
                      alert(`El monto a pagar con tarjeta con descuento es de ${tarjeta}pesos`);
                     }
                  else if ( abono === 2 && tarjeta < 5000) {
                      totalVentasTarjeta=totalVentasTarjeta + tarjeta;// voy sumando las ventas en tarjeta 
                      alert(`El monto a pagar con tarjeta sin descuento es ${tarjeta}pesos`);
                    }
                  // nos pregunta con cuanto pagamos y devolvemos si corresponde
                  if (abono === 1) {
                    pago = parseInt(prompt('¿Con cuánto quiere pagar?'));               
                  if (pago >= efectivo) {
                      vuelto = pago - efectivo;
                      alert('Su vuelto es: ' + vuelto);              
                  } 
                  else{
                      alert('Su dinero No es sufiente');
                }
            
              }
                break;    
            case 2://retirar dinero de la caja
                  retiro = parseInt(prompt('¿Cuánto dinero desea retirar?'));
                   if (totalEfectivoCaja >= retiro) {
                      retirocaja = totalEfectivoCaja - retiro  ;
                      totalEfectivoCaja=retirocaja
                      alert(`Usted retiro ${retiro} pesos y hora su saldo de caja es ${retirocaja} pesos`);
                      }
                   else {
                      alert(`Fondos insuficientes, usted quiso retirar ${retiro} y su fondo de caja es de ${totalEfectivoCaja} pesos`);
                      }
               break; 
              
            case 3:// balance de caja
                  balance = (parseInt(prompt("Ver total con que se pago:\n1.Efectivo\n2.Tarjeta")));
                  if (balance===1) {
                      alert(`Se pago con efectivo una suma de ${totalVentasEfectivo} pesos`);
                  }
                  else if(balance===2 && tarjeta!=0) {
                      alert(`se pago con tarjeta un monto de ${totalVentasTarjeta} pesos`)
                  } 
                  else{
                      alert("Por el momento no hay compras con tarjetas")
                  }
              break;
            case 4:// monto total de las operaciones 
                   ver = parseInt(prompt("Que desea Ver?\n1.Montos de las compras\n2.Montos totales de las compras efectivo mas tarjeta"));
                  if (ver===1) {
                    alert(`Las compras hasta el momentos son: ${compras}$`);
                  }
                 else{
                  alert(`El monto total de las operaciones tanto de compras en efectivo y compras con tarjeta  es igual a ${totalVentasEfectivo+totalVentasTarjeta} pesos`);
                 } 
               break;
            
              default:
                alert("Gracias por usar Nuestro sistema");
                break;
          }
            suma=0;// esto lo que hace que cada vez que entre a la seccion cobrar me reinicie la suma.
          
}