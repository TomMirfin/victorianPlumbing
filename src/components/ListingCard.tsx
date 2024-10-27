import { ListingCardProps } from "../types";

import LcImage from "./LcImage";
import LcFooter from "./LcFooter";

export default function ListingCard({
  productName,
  price,
  image,
  score,
  cultureCode,
  reviewsCount,
  isBestSeller,
  brandImage,
}: ListingCardProps) {
  return (
    <div>
      <LcImage image={image} isBestSeller={isBestSeller} />
      <LcFooter
        productName={productName}
        price={price}
        score={score}
        cultureCode={cultureCode}
        reviewsCount={reviewsCount}
        brandImage={brandImage}
      />
    </div>
  );
}
