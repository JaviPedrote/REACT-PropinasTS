import { MenuItemI } from "../types/index";

type MenuItemProps = {
  item: MenuItemI;
  addItem: (item:MenuItemI) => void;  
};

export default function MenuItem({ item , addItem }: MenuItemProps) {

  return (

    <>
      <button onClick={()=>addItem(item)} className="border-1 rounded-xl border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
        <p>{item.name}</p>
        <p>{item.price}€</p>
      </button>
    </>
  );
}
