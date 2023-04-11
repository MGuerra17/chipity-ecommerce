import { useArticleContext } from "@/contexts/articlesContext";
import { ChangeEvent, useState } from "react";

type FilterCheckBoxProps = {
  title: string;
};

export default function FilterCheckBox({
  title,
}: FilterCheckBoxProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const {state,setFilters} = useArticleContext()
  const handleToggleFilter = (e:ChangeEvent<HTMLInputElement>):void => {
    const newFiltersList = [...state.filters]
    const filterIndex = newFiltersList.findIndex(filter => filter === e.target.name)
    if(filterIndex > -1) {
      newFiltersList.splice(filterIndex,1)
    } else {
      newFiltersList.push(e.target.name)
    }
    setFilters(newFiltersList)
    setIsChecked(!isChecked)
  } 

  return (
    <div className="mb-2">
      <input
        className=" accent-primary mr-2"
        type="checkbox"
        name={title}
        id={title}
        checked={isChecked}
        onChange={handleToggleFilter}
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
