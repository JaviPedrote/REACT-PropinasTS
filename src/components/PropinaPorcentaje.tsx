const options = [
  { id: "tip-10", value: 0.1, label: " 10%" },
  { id: "tip-20", value: 0.2, label: " 20%" },
  { id: "tip-30", value: 0.5, label: " 50%" },
];

type PropinaPorcentajeProps = {
  setPropina: React.Dispatch<React.SetStateAction<number>>;
  propina:number
};

export const PropinaPorcentaje = ({ setPropina, propina }: PropinaPorcentajeProps) => {
  return (
    <>
      <h3 className="font-black text-xl md:text-2xl">Propina:</h3>

      <form action="submit" className="space-y-3">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-1">
            <label htmlFor={option.id}>{option.label}</label>
            <input
              id={option.id}
              type="radio"
              name="tip"
              value={option.value}
              onChange={e=>setPropina(+e.target.value)}
              checked={option.value===propina}
            />
          </div>
        ))}
      </form>
    </>
  );
};
