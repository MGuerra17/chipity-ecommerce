import FilterMenuToggler from "@/components/filterSideBar/FilterMenuToggler";
import { useArticleContext } from "@/contexts/articlesContext";
import { FormEvent } from "react";

export interface ItemsControllerProps {
  search: string;
  articlesAmount: number;
  setShowFilterMenu(): void;
}

export default function ItemsController ({search,articlesAmount, setShowFilterMenu}: ItemsControllerProps):JSX.Element {
  const {setOrder} = useArticleContext()
  
  const handleSetOrder = (e:FormEvent<HTMLSelectElement>):void => {
    setOrder(e.currentTarget.value)
  }

  return (
    <div className="w-full flex justify-between items-center px-4 md:px-8 max-w-screen-2xl mx-auto mt-5">
      <h5 className="font-semibold text-lg hidden md:inline-block">{articlesAmount} articulos {search && `para '${search}'`}</h5>
      <div className="flex items-center justify-between text-xs w-full md:w-fit">
        <div className="flex items-center md:w-fit">
          <label htmlFor="orderBy" className=" text-neutral-500 mr-2">
            Ordenar por:
          </label>
          <select name="orderBy" id="orderBy" className="mr-4 bg-transparent focus:outline-none" onChange={handleSetOrder}>
            <option value="publicationDate">Fecha de publicacion</option>
            <option value="lowPrice">Menor precio</option>
            <option value="hightPrice">Mayor precio</option>
          </select>
        </div>

        <FilterMenuToggler setShow={setShowFilterMenu} />
      </div>
    </div>

  );
}
