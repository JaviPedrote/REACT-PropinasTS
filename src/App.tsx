import MenuItem from "./components/MenuItem";
import { OrderContens } from "./components/OrderContens";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";
import type { MenuItemI } from "./types";
import { OrderTotals } from './components/OrderTotals';
import { PropinaPorcentaje } from "./components/PropinaPorcentaje";

function App() {

  const { addItem, order, deleteItem,propina,setPropina,guardarOrden } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas
        </h1>
      </header>
      <main className="md:flex-row flex flex-col max-w-7xl mx-auto py-3 md:py-10 space-x-5 px-5 xl:px-0">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-2 mt-5 mb-5 md:mb-0">
           {menuItems.map((item:MenuItemI) => (
             <MenuItem key={item.id} item={item} addItem={addItem} />
            ))
          }
          </div>
        </div>
        <div className="md:w-1/2">
          <div className=" border-slate-300 md:pl-2 pr-5 md:pr-0 pb-5 rounded-lg ">
            <OrderContens order={order} deleteItem={deleteItem}  />

            {order.length > 0 ? (<PropinaPorcentaje setPropina={setPropina} propina={propina}/>):(<div></div>)}
            {order.length > 0 ? (<OrderTotals order={order} propina={propina} guardarOrden={guardarOrden}/>):(<div></div>)}
          
          </div>

        </div>
      </main>
    </>
  );
}

export default App;
