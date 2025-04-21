import { OrderItem } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  order: OrderItem[];
  propina: number;
  guardarOrden: () => void;
}

export function OrderTotals({ order, propina, guardarOrden }: Props) {
  const subtotal = order.reduce(
    (acc, item) => acc + item.cantidad * item.price,
    0
  );
  const tipAmount = subtotal * propina;
  const total = subtotal + tipAmount;

  return (
    <div className="space-y-4 pt-8">
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Totales</h2>
      <p>
        Subtotal: <span className="font-semibold">{formatCurrency(subtotal)}</span>
      </p>
      <p>
        Propina: <span className="font-semibold">{formatCurrency(tipAmount)}</span>
      </p>
      <p className="text-xl">
        Total: <span className="font-bold">{formatCurrency(total)}</span>
      </p>

      <button
        className="w-full rounded-xl bg-teal-600 py-3 font-bold text-white shadow transition hover:bg-teal-700 disabled:opacity-40 dark:bg-teal-500 dark:hover:bg-teal-600"
        onClick={guardarOrden}
        disabled={order.length === 0}
      >
        Guardar Orden
      </button>
    </div>
  );
}