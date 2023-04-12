import Image from "next/image";
import ArticleCategories from "./ArticleCategories";
import { formatterCOP } from "@/utils/cop-formatter";
import AddToCartButton from "./AddToCartButton";
import AddToFavsButton from "./AddToFavs";
import DiscountInfo from "./DiscountInfo";
import { article } from "@/types/articles";

export interface ArticleProps {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: number;
  isInCart: boolean;
  isInFavs: boolean;
  categorie1: string;
  categorie2: string;
  articleSetter(data:article): void; 
  data: article;
}

export default function 
Article({
  id,
  title,
  image,
  price,
  discount,
  isInCart,
  isInFavs,
  categorie1,
  categorie2,
  articleSetter,
  data
}: ArticleProps): JSX.Element {
  return (
    <div className="w-40 md:w-56 bg-neutral-100 rounded-md shadow-lg relative hover:scale-105 transition-all">
      <AddToFavsButton active={isInFavs} data={data} />

      <button data-modal-target="articleModal" data-modal-toggle="articleModal" type="button" className="w-full aspect-square bg-slate-200 rounded-t-md relative" onClick={() => articleSetter(data)}>
        <Image src={image} alt="anillo" fill className="aspect-square rounded-t-md" placeholder="blur" blurDataURL={image} sizes="100%"/>
      </button>
      <div className="flex flex-col p-2 pb-3 relative justify-between">
        <div className="w-full">
          <ArticleCategories categories={[categorie1, categorie2]} id={id} />
          <p className=" text-neutral-500 text-sm mt-1 mb-3">{title}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold relative">
            {discount ? (
              <>
                <span>{formatterCOP.format(((100 - discount) / 100) * price)}</span>
                <DiscountInfo price={price} discount={discount} />
              </>
            ) : <span>{formatterCOP.format(price)}</span> }
          </div>
          <AddToCartButton active={isInCart} data={data} />
        </div>
      </div>
    </div>
  );
}
