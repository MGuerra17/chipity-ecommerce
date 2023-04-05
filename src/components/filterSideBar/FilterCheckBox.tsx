import { useState } from "react";

type FilterCheckBoxProps = {
  title: string;
};

export default function FilterCheckBox({
  title,
}: FilterCheckBoxProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="mb-2">
      <input
        className=" accent-primary mr-2"
        type="checkbox"
        name={title}
        id={title}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={title}
        className={`text-neutral-400 pl-1 ${isChecked && "text-black"}`}
      >
        {title}
      </label>
    </div>
  );
}
