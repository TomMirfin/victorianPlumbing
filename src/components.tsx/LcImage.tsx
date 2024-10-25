export default function LcImage({
  image,
  isBestSeller,
}: {
  image: { url: string };
  isBestSeller: boolean;
}) {
  return (
    <div
      className="w-64 h-64 bottom-2 relative  shadow-black shadow-md opacity-80 hover:opacity-100 "
      style={{
        backgroundImage: `url(${image.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      {isBestSeller && (
        <div className=" z-10 absolute bottom-0 left-0 bg-blue-600 text-white text-xs p-1 rounded">
          Best Seller
        </div>
      )}
    </div>
  );
}
