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
let retiro;
let tarjeta=0;
let monto;
let balance;
let efectivo=0
let efe=0;
let totalVentasEfectivo=0;
let totalVentasTarjeta=0;
let totalEfectivoCaja=0;
let descuentoEfectivo=0;
    while(menu!=5){ //pide los precios de los prodcutos que vamos a llevar
        menu = parseInt(prompt("¿Que operacion desea realizar?\n1.Cobrar\n2.Retirar dinero de la caja\n3.Ver balance de caja\n4.Ver los montos totales de todas las operaciones realizadas\n5.Salir"));
       

          switch (menu) {
            case 1: // Cobrar
              do {
                      precio = parseInt(prompt("Ingrese el precio del producto, para finalizar ingrese 0"));
                      suma = suma + precio;
                      alert(`El total es igual a ${suma} pesos`);
              } while (precio != 0);

                  let abono = parseInt(prompt("¿Con qué desea abonar?\n1.efectivo\n2.tarjeta"));
                  if (abono===1) {
                      efectivo=suma;
                      totalEfectivoCaja = efectivo+totalEfectivoCaja;
                      totalVentasEfectivo=efectivo+totalVentasEfectivo;
                  }else if(abono===2){
                    tarjeta=suma;
                    
                  }
                  totalVentasTarjeta=totalVentasTarjeta + tarjeta;
                 
                  
                  if (abono === 1 && efectivo > 2000 && efectivo<=5000) {
                      descuento = efectivo * 0.05;
                      efectivo = efectivo - descuento;
                      alert(`El monto a pagar con descuento es de ${efectivo} pesos`);}
                    else if (abono === 1 && efectivo <=2000){
                      alert(`El monto a pagar en efectivo sin descuento es de ${efectivo}pesos`);
                    }
                  if (abono === 1 && efectivo > 5000) {
                      descuentoEfectivo = efectivo * 0.10;
                      efectivo = efectivo - descuentoEfectivo;
                      alert(`El monto con descuento incluido es ${efectivo}pesos`);
              }
                  else if ( abono === 2 && tarjeta > 5000){
                      descuento= tarjeta *0.10;
                      tarjeta= tarjeta-descuento;
                      alert(`El monto a pagar con tarjeta con descuento es de ${tarjeta}pesos`);
                    }else if ( abono === 2 && tarjeta < 5000) {
                      
                      alert(`El monto a pagar con tarjeta sin descuento es ${tarjeta}pesos`);
                    }
                  
                  if (abono === 1) {
                    pago = parseInt(prompt('¿Con cuánto quiere pagar?'));               
                    if (pago >= efectivo) {
                      vuelto = pago - efectivo;
                      alert('Su vuelto es: ' + vuelto);              
                }else{
                      alert('Su dinero No es sufiente');
                }
            
              }
                break;    
            case 2://retirar dinero de la caja
                retiro = parseInt(prompt('¿Cuánto dinero desea retirar?'));
              
               
                if (totalEfectivoCaja > retiro) {
                        retirocaja = totalEfectivoCaja - retiro ;
                        alert(`Usted retiro ${retiro} pesos y hora su saldo de caja es ${retirocaja} pesos`);
                }else {
                        alert(`Fondos insuficientes, usted quiso retirar ${retiro} y su fondo de caja es de ${totalEfectivoCaja} pesos`);
                }
              break; 
              
            case 3:// balance de caja
                balance = (parseInt(prompt("Ver con que se pago:\n1.Efectivo\n2.Tarjeta")));
                if (balance===1) {
                  alert(`Se pago con efectivo una suma de ${totalVentasEfectivo-descuentoEfectivo} pesos`);
                }else if(balance===2 && tarjeta!=0) {
                
                  alert(`se pago con tarjeta un monto de ${totalVentasTarjeta} pesos`)
                } else{
                  alert("Por el momento no hay compras con tarjetas")
                }
              break;
            case 4:// monto total de las operaciones
            
                  alert(`El monto total de las operaciones tanto de compras en efectivo y compras con tarjeta  es igual a ${totalVentasEfectivo+totalVentasTarjeta} pesos`);
              
                break;
            
              default:
                alert("Gracias por usar Nuestro sistema");
                break;
          }
            suma=0;
          
}