import { ReactNode } from "react";
import styled from "styled-components/macro";

const StyledSection = styled.section`
  margin-block: 2rem;

  &:first-of-type {
    .section__inner {
      padding-top: 0;
    }
  }
`;

const StyledSectionHeading = styled.div`
  position: relative;
  padding-block: 2rem;
`


type SectionProps = {
  title: string;
  children: ReactNode;
};

function SectionWrapper({ title, children }: SectionProps) {
  return (
    <StyledSection>
      <div className="section__inner">
        <StyledSectionHeading>
          <h1 className="section__heading">{title}</h1>
        </StyledSectionHeading>
        {children}
      </div>
    </StyledSection>
  );
}

export default SectionWrapper;
