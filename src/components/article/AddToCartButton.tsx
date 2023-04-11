import { useArticleContext } from "@/contexts/articlesContext";
import { article } from "@/types/articles";

export interface IAddToCartProps {
  active: boolean;
  data: article;
}

export default function AddToCartButton({
  active,
  data
}: IAddToCartProps): JSX.Element {
  const {addToCart, removeFromCart} = useArticleContext()
  const handleAddToCart = ():void => {
    console
    addToCart(data)
  }

  const handleRemoveFromCart = ():void => {
    removeFromCart(data)
  }
  return (
    <button 
      className={`border ${active ? 'border-black text-black' : 'border-neutral-500 text-neutral-500'} hover:border-black hover:text-black rounded-full aspect-square md:aspect-auto md:rounded-lg p-2 md:px-2 flex gap-x-1 py-0.5 items-center relative`}
      onClick={active ? handleRemoveFromCart : handleAddToCart }
      >
      <span className="absolute -top-0.5 right-1.5 font-bold md:hidden inline-block">
        +
      </span>
      <svg
        className="w-5 h-5 mr-0.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={active ? '0.8' : '0'}
          d="M4.50938 10.4343C4.7433 8.79689 4.86026 7.97818 5.42419 7.48909C5.98812 7 6.81514 7 8.46918 7H9H15H15.5308C17.1849 7 18.0119 7 18.5758 7.48909C19.1397 7.97818 19.2567 8.79689 19.4906 10.4343L20.3478 16.4343C20.6512 18.5586 20.803 19.6208 20.2049 20.3104C19.6068 21 18.5339 21 16.388 21H16H8H7.61204C5.46614 21 4.3932 21 3.79511 20.3104C3.19703 19.6208 3.34877 18.5586 3.65224 16.4343L4.50938 10.4343Z"
          fill="#FFA9C9"
        />
        <path
          d="M4.50938 10.4343C4.7433 8.79689 4.86026 7.97818 5.42419 7.48909C5.98812 7 6.81514 7 8.46918 7H9H15H15.5308C17.1849 7 18.0119 7 18.5758 7.48909C19.1397 7.97818 19.2567 8.79689 19.4906 10.4343L20.3478 16.4343C20.6512 18.5586 20.803 19.6208 20.2049 20.3104C19.6068 21 18.5339 21 16.388 21H16H8H7.61204C5.46614 21 4.3932 21 3.79511 20.3104C3.19703 19.6208 3.34877 18.5586 3.65224 16.4343L4.50938 10.4343Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 11V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="hidden md:inline">{active ? 'Agregado' : 'Agregar'}</span>
    </button>
  );
}
