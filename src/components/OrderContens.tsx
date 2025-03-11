import { orderItem } from "../types";
import { MenuItemI } from '../types/index';

type orderProps = {
  order: orderItem[];
  deleteItem: (id: MenuItemI['id']) => void;
};

export const OrderContens = ({ order , deleteItem }: orderProps) => {
  return (
    <>
      <div className="text-4xl font-black">Ticket</div>
      <div className="space-y-2 mt-5">
        {order.length === 0 ? (
          <p className="text-center">No hay productos en el ticket</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-t-2 border-gray-200 p-2 last-of-type:border-b-2"
            >
              <div>
                <p className="lg:text-lg">
                  {item.name} - {item.price}€
                </p>
                <p className="font-bold">
                  Cantidad: {item.cantidad} - {item.cantidad * item.price}€
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => deleteItem(item.id)}
                  className="flex justify-center items-center bg-red-400 h-6 w-6 rounded-full"
                >
                  <p className="text-xs font-semibold text-white">X</p>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
