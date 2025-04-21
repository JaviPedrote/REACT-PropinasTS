import { MenuItemI } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  item: MenuItemI;
  addItem: (item: MenuItemI) => void;
}

export default function MenuItem({ item, addItem }: Props) {
  return (
    <button
      onClick={() => addItem(item)}
      className="flex w-full items-center justify-between rounded-2xl border border-teal-500 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-50 active:scale-95 dark:border-teal-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      <span className="font-medium">{item.name}</span>
      <span className="font-semibold">{formatCurrency(item.price)}</span>
    </button>
  );
}
