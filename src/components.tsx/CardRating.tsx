import { Rating } from "@mui/material";

export default function CardRating({
  score,
  reviewsCount,
}: {
  score: number;
  reviewsCount: number;
}) {
  return (
    <div className="flex flex-row items-center absolute bottom-2 text-black">
      <Rating value={score / 2} readOnly size="small" precision={0.2} />
      <span className="ml-1">{reviewsCount}</span>
    </div>
  );
}
