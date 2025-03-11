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
      <div className=" mt-5 ">
        {order.length === 0 ? (
          <p className="text-center">No hay productos en el ticket</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex py-3 justify-between border-t-2 border-gray-200 p-2 last-of-type:border-b-2"
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
                  className="flex justify-center items-center text-red-600 w-6 h-6 font-black cursor-pointer"
                >
                    X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
