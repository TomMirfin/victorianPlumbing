export default function FilterComponent() {
  return (
    <div className="fixed top-0 left-0 p-4 bg-slate-500 w-80 h-screen ml-5">
      <h2 className="text-lg mb-4">Filter By Brand</h2>
      <label className="block mb-2">
        <input type="checkbox" value="Brand A" className="mr-2" /> Brand A
      </label>
      <label className="block mb-2">
        <input type="checkbox" value="Brand B" className="mr-2" /> Brand B
      </label>
      <label className="block mb-2">
        <input type="checkbox" value="Brand C" className="mr-2" /> Brand C
      </label>
    </div>
  );
}
