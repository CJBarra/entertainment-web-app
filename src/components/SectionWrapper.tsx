import { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  &:first-of-type {
    .section__inner {
      padding-top: 0;
    }
  }

  .section__top{
    padding-block: 2rem;
  }
`;

type SectionProps = {
  title: string;
  children: ReactNode;
};

function SectionWrapper({ title, children }: SectionProps) {
  return (
    <StyledSection>
      <div className="section__inner">
        <div className="section__top">
          <h1 className="section__heading">{title}</h1>
        </div>
        {children}
      </div>
    </StyledSection>
  );
}

export default SectionWrapper;
