import MenuItem from "./components/MenuItem";
import { OrderContents } from "./components/OrderContens";
import { PropinaPorcentaje } from "./components/PropinaPorcentaje";
import { OrderTotals } from "./components/OrderTotals";
import { useOrder } from "./hooks/useOrder";
import { menuItems } from "./data/db";
import type { MenuItemI } from "./types";

function App() {
  const { addItem, order, deleteItem, propina, setPropina, guardarOrden } =
    useOrder();

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 bg-gradient-to-b from-teal-100 to-white dark:from-slate-900 dark:to-slate-800">
      <header className="bg-gradient-to-r from-teal-500 to-teal-600 py-6 shadow-md dark:from-teal-700 dark:to-teal-800">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Calculadora de Propinas
        </h1>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2">
        <section>
          <h2 className="mb-6 text-2xl font-bold">Menú</h2>
          <div className="space-y-3">
            {menuItems.map((item: MenuItemI) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="mb-4 text-2xl font-bold">Tu Orden</h2>
          <OrderContents order={order} deleteItem={deleteItem} />

          {order.length > 0 && (
            <>
              <PropinaPorcentaje propina={propina} setPropina={setPropina} />
              <OrderTotals order={order} propina={propina} guardarOrden={guardarOrden} />
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
