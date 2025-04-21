import { OrderItem } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  order: OrderItem[];
  deleteItem: (id: OrderItem["id"]) => void;
}

export function OrderContents({ order, deleteItem }: Props) {
  if (order.length === 0) {
    return <p className="text-center italic">Aún no has añadido productos.</p>;
  }

  return (
    <ul className="space-y-3">
      {order.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-700"
        >
          <div>
            <p className="font-medium">
              {item.name} — {formatCurrency(item.price)}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Cantidad: {item.cantidad} · {formatCurrency(item.cantidad * item.price)}
            </p>
          </div>
          <button
            aria-label={`Eliminar ${item.name}`}
            onClick={() => deleteItem(item.id)}
            className="grid h-7 w-7 place-content-center rounded-full border border-red-400 text-xs font-bold text-red-600 transition hover:bg-red-50 dark:border-red-600 dark:hover:bg-red-900/20"
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}