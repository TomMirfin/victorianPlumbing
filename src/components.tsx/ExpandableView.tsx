import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronDownIcon from "@mui/icons-material/ChevronDown";
import { IconButton } from "@mui/material";

export default function ExpandableView({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {options.map((option) => (
          <li>{option}</li>
        ))}
      </ul>
    </div>
  );
}
