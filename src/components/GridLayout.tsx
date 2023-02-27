import { ReactNode } from "react";
import { StyledGridLayout } from "@/styles";

type GridProps = { children: ReactNode };

function GridLayout({ children }: GridProps) {
  return <StyledGridLayout>{children}</StyledGridLayout>;
}

export default GridLayout;
