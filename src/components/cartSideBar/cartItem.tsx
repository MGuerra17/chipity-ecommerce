import { useArticleContext } from "@/contexts/articlesContext";
import { cartArticle } from "@/types/articles";
import { formatterCOP } from "@/utils/cop-formatter";
import Image from "next/image";

interface favItemProps {
  data: cartArticle;
}

export default function CartItem({data}:favItemProps):JSX.Element {
  const {titulo, descripcion, imagen,precio, descuento, amount} = data
  const { addToCart, removeFromCart, decreaseCartAmount } = useArticleContext()

  const handleAddToCart = ():void => {
    addToCart(data)
  }

  const handleDecreaseCartAmount = ():void => {
    decreaseCartAmount(data)
  }

  const handleRemoveFromCart = ():void => {
    removeFromCart(data)
  }

  return (
    <li
      className="flex bg-neutral-50 py-2 px-1 rounded-md items-center justify-between mb-1 shadow-md"
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
          <span className="text-sm">{titulo}</span>
          {descuento ? (
            <span className="text-xs">
              {formatterCOP.format(((100 - descuento) / 100) * precio * amount)}
            </span>
          ) : (
            <span className="text-xs">{formatterCOP.format(precio * amount)}</span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="flex flex-col items-center justify-center">
            <button className='text-xs bg-secondary aspect-square rounded-full w-5 disabled:bg-slate-300' disabled={data.amount === 10} onClick={handleAddToCart}>+</button>
            <span className="text-xs my-1">{data.amount}</span>
            <button className='text-xs bg-secondary aspect-square rounded-full w-5 disabled:bg-slate-300' disabled={data.amount === 1} onClick={handleDecreaseCartAmount}>-</button>
        </div>
        <button onClick={handleRemoveFromCart}>
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
      </div>
    </li>
  );
}
