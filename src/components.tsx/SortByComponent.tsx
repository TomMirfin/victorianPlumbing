import Select from "react-select";

type SortOption = {
  label: string;
  value: string;
};

const options: SortOption[] = [
  { label: "Recommended", value: "1" },
  { label: "Price Low to High", value: "2" },
  { label: "Price High to Low", value: "3" },
  { label: "Largest Discount", value: "4" },
];

export default function SortByComponent({
  selectedOption,
  handleSelectChange,
}: {
  selectedOption: string;
  handleSelectChange: (selected: { value: string; label: string }) => void;
}) {
  return (
    <div className="w-64 text-black mb-12">
      <p className="text-black mb-2">Sort By:</p>
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
