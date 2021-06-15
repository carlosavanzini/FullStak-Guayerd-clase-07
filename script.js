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
let caja = 2000;
let retiro;
let total;
let tarjeta=0;
let monto;
let balance;
    while(menu!=5){ //pide los precios de los prodcutos que vamos a llevar
        menu = parseInt(prompt("¿Que operacion desea realizar?\n1.Cobrar\n2.Retirar dinero de la caja\n3.Ver balance de caja\n4.Ver los montos totales de todas las operaciones realizadas\n5.Salir"));
  switch (menu) {
    case 1: // Cobrar
      do {
              precio = parseInt(prompt("Ingrese el precio del producto, para finalizar ingrese 0"));
              suma = suma + precio;
              alert(`El total es igual a ${suma} pesos`);
      } while (precio != 0);

          let abono = prompt("¿Con qué desea abonar? tarjeta o efectivo");
           if (abono === "efectivo" && suma > 2000) {
              descuento = suma * 0.05;
              suma = suma - descuento;
              alert(`El monto a pagar con descuento es de ${suma}`);}
            else{
              alert(`El monto a pagar sin descuento es de ${suma}`);
            }
          if (abono === "efectivo" && suma > 5000) {
              descuento = suma * 0.10;
              suma = suma - descuento;
              alert(`El monto con descuento incluido es ${suma}`);
      }
          else if ( abono === "tarjeta" && suma > 5000){
              descuento= suma *0.10;
              tarjeta= suma-descuento;
              alert(`El monto a pagar con descuento es ${tarjeta}`)
              
        }
           if (abono === "efectivo") {
            pago = parseInt(prompt('¿Con cuánto quiere pagar?'));               
            if (pago >= suma) {
              vuelto = pago - suma;
              alert('Su vuelto es: ' + vuelto);              
        }else{
              alert('Su dinero No es sufiente');
        }
     
      }
         break;    
    case 2://retirar dinero de la caja
        retiro = parseInt(prompt('¿Cuánto dinero desea retirar?'));
        totalEfectivoCaja = caja + suma;
        if (totalEfectivoCaja > retiro) {
                retirocaja = totalEfectivoCaja - retiro;
                alert(`Usted retiro${retiro} pesos y hora su saldo de caja es ${totalEfectivoCaja}`);
        }else{
                alert(`Fondos insuficientes, usted quiso retirar ${retiro} y su fondo de caja es de ${totalEfectivoCaja}`);
        }
      break; 
      
    case 3:// balance de caja
        balance = (parseInt(prompt("Ver con que se pago:\n1.Efectivo\n2.Tarjeta")));
        if (balance===1) {
          alert(`Se pago con efectivo una suma de ${suma} pesos`);
        }else if(balance===2 && tarjeta!=0) {
          alert(`se pago con tarjeta un monto de ${tarjeta}`)
        } else{
          alert("Por el momento no hay compras con tarjetas")
        }
      break;
    case 4:// monto total de las operaciones
      monto = (parseInt(prompt("¿Que total de monto de operaciones quiere ver?\n1.Efectivo\n2.Tarjeta")));
      if (balance===1) {
        alert(`Se pago con efectivo una suma de ${suma} pesos`);
      } else {
        alert(`se pago con tarjeta un monto de ${tarjeta}`)
      }
      break;
  
    default:
      alert("Gracias por usar Nuestro sistema");
      break;
  }
  
}