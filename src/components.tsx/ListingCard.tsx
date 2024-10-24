import { ListingCardProps } from "../types";

export default function ListingCard({
  productName,
  price,
  image,
  score,
}: ListingCardProps) {
  const getCurrencySymbol = (locale, currency) =>
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
    <div
      className="w-64 h-64 bottom-2 p-5 relative shadow-lg shadow-black "
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

        <div className=" text-red-500 text-sm absolute top-2 left-2 w-full opacity-100 font-bold">
          {getCurrencySymbol("en-UK", price.currencyCode)} {price.priceIncTax}
          {price.isOnPromotion && (
            <p className="line-through text-black">
              Was {price.wasPriceIncTax}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
