import CardNameAndPrice from "./CardNameAndPrice";
import CardRating from "./CardRating";
import { Price } from "../types";
export default function LcFooter({
  productName,
  price,
  score,
  cultureCode,
  reviewsCount,
  brandImage,
}: {
  productName: string;
  price: Price;
  score: number;
  cultureCode: string;
  reviewsCount: number;
  brandImage: string;
}) {
  return (
    <div className={`flex flex-row items-center text-xs relative`}>
      <CardNameAndPrice
        brandImage={brandImage}
        productName={productName}
        price={price}
        cultureCode={cultureCode}
      />

      {reviewsCount > 0 && (
        <div className="absolute bottom-0 left-2 ">
          <CardRating score={score} reviewsCount={reviewsCount} />
        </div>
      )}
    </div>
  );
}
