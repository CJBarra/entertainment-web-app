import { ReactNode } from "react";

type GridProps = { children: ReactNode };

function GridLayout({ children }: GridProps) {
  return <div className={"grid img__grid"}>{children}</div>;
}

export default GridLayout;

