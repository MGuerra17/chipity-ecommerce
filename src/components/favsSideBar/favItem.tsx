import { useArticleContext } from "@/contexts/articlesContext";
import { article } from "@/types/articles";
import { formatterCOP } from "@/utils/cop-formatter";
import Image from "next/image";

interface favItemProps {
  data: article;
}

export default function FavItem({data}:favItemProps):JSX.Element {
  const {titulo, descripcion, imagen,precio, descuento} = data
  const { removeFromFavs } = useArticleContext()

  const handleRemoveFromFavs = ():void => {
    removeFromFavs(data)
  }

  return (
    <li
      className="flex bg-neutral-100 py-2 px-1 rounded-md items-center justify-between mb-1"
    >
      <div className="flex gap-x-2">
        <Image
          className="rounded-md aspect-square"
          src={imagen}
          alt={descripcion}
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          {titulo}
          {descuento ? (
            <span className="text-xs">
              {formatterCOP.format(((100 - descuento) / 100) * precio)}
            </span>
          ) : (
            <span className="text-xs">{formatterCOP.format(precio)}</span>
          )}
        </div>
      </div>
      <button onClick={handleRemoveFromFavs}>
        <svg
          className="w-6 h-6 text-red-400 justify-self-stretch"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
}
