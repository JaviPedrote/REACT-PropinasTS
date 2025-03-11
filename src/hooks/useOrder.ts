import { useState } from "react";
import { MenuItemI, orderItem } from "../types";




export const useOrder = () => {

    const [order, setOrder] = useState<orderItem[]>([]);
    const [propina,setPropina] = useState(0.1)

    const addItem = (item: MenuItemI) => {

        const existItem = order.find((orderItem) => orderItem.id === item.id);

        if (!existItem) {
            const newItems = { ...item, cantidad: 1 };
            setOrder([...order, newItems]);
        } else {
            const updateOrder = order.map((orderItem) => {
                if (orderItem.id === item.id) {
                    return { ...orderItem, cantidad: orderItem.cantidad + 1 }; // Devuelvo el objeto actualizado
                } else {
                    return orderItem; // Devuelvo el objeto sin cambios
                }
            });
    
            setOrder(updateOrder); // No olvides actualizar el estado
        }
    }

    const deleteItem =(id:MenuItemI['id'])=>{
        setOrder(order.filter(item=> item.id!==id ))
    }

    const guardarOrden =()=>{
       setOrder([])
       setPropina(0.1)
    }
    return {
        order,
        propina,
        setPropina,
        addItem,
        deleteItem,
        guardarOrden
    }
}
