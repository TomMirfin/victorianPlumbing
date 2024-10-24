import { ListingCardProps } from "../types";
import Rating from "@mui/material/Rating";

export default function ListingCard({
  productName,
  price,
  image,
  score,
  cultureCode,
  reviewsCount,
}: ListingCardProps) {
  const getCurrencySymbol = (locale: string, currency: string) =>
    (0)
      .toLocaleString(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\d/g, "")
      .trim();
  return (
    <div>
      <div
        className="w-64 h-64 bottom-2 p-5 relative  shadow-black shadow-md "
        style={{
          backgroundImage: `url(${image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        <div className="absolute inset-0 opacity-90 hover:bg-opacity-0 bg-black rounded-xl bg-opacity-35">
          <h3 className=" z-10 text-white text-sm h-20 p-2 text-center absolute bottom-0 bg-black left-0 w-full bg-opacity-50 rounded-xl">
            {productName}
          </h3>
        </div>
        <div className=" text-red-white text-sm p-2 w-full opacity-100 font-bold flex flex-col bg-black bg-opacity-35 rounded-tl-2xl rounded-tr-2xl ">
          {getCurrencySymbol(cultureCode, price.currencyCode)}{" "}
          {price.priceIncTax}
          {price.isOnPromotion && (
            <p className="line-through text-red-500">
              Was {price.wasPriceIncTax}
            </p>
          )}
          <div className="flex flex-row gap-2">
            {reviewsCount > 0 && (
              <>
                <Rating value={score} readOnly size="small" precision={0.2} />
                {reviewsCount}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
