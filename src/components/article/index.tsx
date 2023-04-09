import Image from "next/image";
import ArticleCategories from "./ArticleCategories";
import anilloImage from "../../../public/anillo.png";
import { formatterCOP } from "@/utils/cop-formatter";
import AddToCartButton from "./AddToCartButton";
import AddToFavsButton from "./AddToFavs";
import DiscountInfo from "./DiscountInfo";

export interface ArticleProps {
  title: string;
  price: number;
  discount: number;
  isInCart: boolean;
  isInFavs: boolean;
  categorie1: string;
  categorie2: string
}

export default function Article({
  title,
  price,
  discount,
  isInCart,
  isInFavs,
  categorie1,
  categorie2
}: ArticleProps): JSX.Element {
  return (
    <div className="h-72 w-40 md:w-56 md:h-80 bg-neutral-100 rounded-md shadow-lg relative">
      <AddToFavsButton active={isInFavs} />

      <div className="w-full aspect-square bg-red-300 rounded-t-md relative">
        <Image src={anilloImage} alt="anillo" fill className="aspect-square" priority />
      </div>
      <div className="flex flex-col p-2 relative h-24">
        <ArticleCategories categories={[categorie1, categorie2]} />
        <p className=" text-neutral-500 text-sm mt-1 mb-3">{title}</p>
        <div className="flex items-center justify-between">
          <div className="font-bold relative">
            <span>{formatterCOP.format(((100 - discount) / 100) * price)}</span>
            <DiscountInfo price={price} discount={discount} />
          </div>
          <AddToCartButton active={isInCart} />
        </div>
      </div>
    </div>
  );
}
