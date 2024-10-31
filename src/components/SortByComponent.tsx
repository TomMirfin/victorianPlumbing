import { useSearchParams } from "react-router-dom";
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
  handleSelectChange,
}: {
  selectedOption: string;
  handleSelectChange: (selected: { value: string; label: string }) => void;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentlySelected = searchParams.get("sort");

  const selected = options.find((option) => option.value === currentlySelected);

  console.log(selected, "selected");

  return (
    <div className="w-64 text-black mb-12">
      <p className="text-black mb-2">Sort By:</p>
      <Select
        id="sortBy"
        value={selected}
        options={options}
        onChange={(selected) =>
          handleSelectChange(selected as { value: string; label: string })
        }
        placeholder="Select an option"
      />
    </div>
  );
}
