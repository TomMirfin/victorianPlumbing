import Select from "react-select";

enum SortByOptions {
  Recommended = "1",
  PriceLowToHigh = "2",
  PriceHighToLow = "3",
  LargestDiscount = "4",
}

const options = Object.entries(SortByOptions).map(([label, value]) => ({
  label,
  value,
}));

export default function SortByComponent({
  selectedOption,
  handleSelectChange,
}: {
  selectedOption: string;
  handleSelectChange: (e: { value: string; label: string }) => void;
}) {
  return (
    <div className="w-64 text-black ">
      <label htmlFor="sortBy">Sort By:</label>
      <Select
        id="sortBy"
        value={options.find((option) => option.value === selectedOption)}
        options={options}
        onChange={(selected) =>
          handleSelectChange(selected as { value: string; label: string })
        }
        placeholder="Select an option"
      />
    </div>
  );
}
