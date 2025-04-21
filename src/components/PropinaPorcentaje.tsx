interface Props {
  propina: number;
  setPropina: (value: number) => void;
}

const options = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
] as const;

export function PropinaPorcentaje({ propina, setPropina }: Props) {
  return (
    <fieldset className="mt-8">
      <legend className="mb-4 text-lg font-bold text-slate-900 dark:text-slate-100">Propina</legend>
      <div className="grid grid-cols-3 gap-3">
        {options.map((o) => (
          <label
            key={o.id}
            className={`flex cursor-pointer items-center justify-center rounded-xl border p-3 font-semibold transition ${
              propina === o.value
                ? "border-teal-600 bg-teal-50 dark:border-teal-500 dark:bg-teal-900/20"
                : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700"
            }`}
          >
            <input
              type="radio"
              className="sr-only"
              name="propina"
              value={o.value}
              checked={propina === o.value}
              onChange={() => setPropina(o.value)}
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
