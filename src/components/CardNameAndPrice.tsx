import getCurrencySymbol from "../Helper";
import { Price } from "../types";

export default function CardNameAndPrice({
  productName,
  price,
  cultureCode,
  brandImage,
}: {
  productName: string;
  price: Price;
  cultureCode: string;
  brandImage: string;
}) {
  return (
    <div className=" text-red-white text-xs p-2 w-64 h-36 text-center opacity-100 font-bold flex flex-col bg-white -mt-1">
      <img src={brandImage} alt="brand" className="absolute top-0 left-2 h-6" />
      <div className="text-black absolute top-8 left-2  text-xs font-medium text-left">
        {productName}
      </div>

      <div className="text-left text-lg text-red-500 absolute flex flex-row gap-2 top-16 mt-2  items-center">
        {getCurrencySymbol(cultureCode, price.currencyCode)} {price.priceIncTax}
        {price.isOnPromotion && (
          <p className="line-through text-black font-light font-md text-xs ">
            Was {price.wasPriceIncTax}
          </p>
        )}
      </div>
    </div>
  );
}
