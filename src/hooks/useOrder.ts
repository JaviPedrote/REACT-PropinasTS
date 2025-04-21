import { useState } from "react";
import { MenuItemI, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [propina, setPropina] = useState(0.1);

  const addItem = (item: MenuItemI) =>
    setOrder((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...item, cantidad: 1 }];
    });

  const deleteItem = (id: MenuItemI["id"]) =>
    setOrder((prev) => prev.filter((i) => i.id !== id));

  const guardarOrden = () => {
    setOrder([]);
    setPropina(0.1);
  };

  return { order, propina, setPropina, addItem, deleteItem, guardarOrden };
};