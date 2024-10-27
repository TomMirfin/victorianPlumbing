export default function LcImage({
  image,
  isBestSeller,
}: {
  image: { url: string };
  isBestSeller: boolean;
}) {
  return (
    <div
      className="w-64 h-64  relative  shadow-md opacity-80 hover:opacity-100 "
      style={{
        backgroundImage: `url(${image.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isBestSeller && (
        <div className=" z-10 absolute bottom-0 left-0 bg-blue-600 opacity-85 text-white text-xs p-1 rounded w-full text-center">
          Best Seller
        </div>
      )}
    </div>
  );
}
