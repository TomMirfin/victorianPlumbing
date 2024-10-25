import getCurrencySymbol from "../Helper";
import { Price } from "../types";

export default function CardNameAndPrice({
  productName,
  price,
  cultureCode,
}: {
  productName: string;
  price: Price;
  cultureCode: string;
}) {
  return (
    <div className=" text-red-white text-xs p-2 w-64 h-32 text-center opacity-100 font-bold flex flex-col bg-white -mt-1">
      <div className="text-black">{productName}</div>
      <div className="text-left text-lg text-red-500 absolute top-12">
        {getCurrencySymbol(cultureCode, price.currencyCode)} {price.priceIncTax}
        {price.isOnPromotion && (
          <p className="line-through text-red-500 font-md text-sm">
            Was {price.wasPriceIncTax}
          </p>
        )}
      </div>
    </div>
  );
}
