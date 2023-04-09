import CategoryTag from "./CategoryTag";
import { formatterCOP } from "@/utils/cop-formatter";

export interface IDiscountInfoProps {
  price: number;
  discount: number;
}

export default function DiscountInfo ({price,discount}: IDiscountInfoProps):JSX.Element {
  return (
    <div className="absolute -top-3 -right-7 flex">
    <span className="text-xs text-neutral-500 line-through font-thin">{formatterCOP.format(price)}</span>
    <CategoryTag title={`-${discount}%`} />
  </div>
);
}
