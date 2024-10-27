import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ExpandableView({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const styles = useSpring({
    opacity: isExpanded ? 1 : 0,
    height: isExpanded ? "auto" : 0,
    overflow: "hidden",
    config: { duration: 500 },
  });

  return (
    <div className="border-b border-gray-300 mb-2  bg-white p-2 w-52">
      <div className="flex  justify-evenly">
        <span className="font-semibold text-lg text-black border-b-2 w-full">
          {title}
        </span>
        <IconButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </div>
      <animated.div style={styles}>
        <div className="mt-2">{children}</div>
      </animated.div>
    </div>
  );
}
