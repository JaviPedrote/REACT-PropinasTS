import { orderItem } from "../types";

type orderTotalsProps = {
    order: orderItem[];
    propina:number
    guardarOrden:() => void
    };

export const OrderTotals = ({order,propina,guardarOrden}:orderTotalsProps) => {

    const subtotal = order.reduce((total, item) => total + (item.price * item.cantidad), 0);
    const formatPropina = subtotal*propina
    const total = subtotal+formatPropina


  return (
    <>
        <div className="space-y-3"> 
            <h2 className="font-black text-xl md:text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: <span className="font-bold"> {subtotal}€</span></p>
                <p>Propina: <span className="font-bold"> {formatPropina}€</span></p>
                <p>Total a pagar: <span className="font-bold"> {total}€</span></p>
                
        </div>

        <button className="cursor-pointer w-full text-white bg-black p-3 uppercase font-bold mt-10 disabled:opacity-10 disabled:cursor-default"
        disabled={total<=0} onClick={guardarOrden}>Guardar orden</button>
    </>
  )
}
