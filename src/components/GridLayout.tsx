import { ReactNode } from "react";
import styled from "styled-components/macro";

const StyledGridLayout = styled.div`
  --gap: 1rem;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--gap);
  row-gap: var(--gap);


  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --gap: 2rem;
    
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    column-gap: var(--gap);
    row-gap: var(--gap);
  }

  /* Media - Desktop and up */
  // 1200px
  @media (min-width: 75rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


type GridProps = { children: ReactNode };

const GridLayout = ({ children }: GridProps) => {
  return <StyledGridLayout>{children}</StyledGridLayout>;
}

export default GridLayout;
