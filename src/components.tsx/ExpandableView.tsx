import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { duration, IconButton } from "@mui/material";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function ExpandableView({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const styles = useSpring({
    opacity: isExpanded ? 1 : 0,
    height: isExpanded ? "auto" : 0,
    overflow: "hidden",
    config: { duration: 500 },
  });

  return (
    <div className="border-b border-gray-300 ">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-lg">{title}</span>
        <IconButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
        </IconButton>
      </div>
      <animated.div style={styles}>
        <div className="mt-2">{children}</div>
      </animated.div>
    </div>
  );
}
