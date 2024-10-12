import { useClickAway } from "react-use";
import { useRef } from "react";

export default function DropDownList({ show, closeSelf, items, onSelect }) {
  const ref = useRef(null);

  useClickAway(ref, () => {
    closeSelf();
  });

  if (!show) return;

  return (
    <div
      ref={ref}
      className="overflow-y-scroll w-full max-w-[200px] custom-scrollbar max-h-[300px] absolute z-30 top-0 left-0 min-w-[90%] rounded  py-2 shadow-lg shadow-black/20 bg-white "
    >
      {items.map((v, i) => {
        const Icon = v.icon;
        return (
          <div
            onClick={() => onSelect(v)}
            key={i}
            className="text-[#6D7D93] text-sm cursor-pointer px-4 border-b border-primary/10 py-2 hover:bg-black/5   flex flex-row justify-start space-x-4"
          >
            {v.icon && <Icon className="text-xl " />}

            <span> {v.name} </span>
          </div>
        );
      })}
    </div>
  );
}
