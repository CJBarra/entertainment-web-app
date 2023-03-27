import { ReactNode } from "react";
import styled from "styled-components/macro";

const StyledSection = styled.section`
  margin-block: 2rem;
  padding-inline: 1rem;
  
  &:first-of-type {
    margin-top: 0;
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    padding-inline: 2rem;
  }
`;

const StyledSectionHeading = styled.div`
  position: relative;
  padding-bottom: 2rem;
`;

type SectionProps = {
  title: string;
  children: ReactNode;
};

function SectionWrapper({ title, children }: SectionProps) {
  if (title !== "") {
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
  return (
    <StyledSection>
      <div className="section__inner">{children}</div>
    </StyledSection>
  );
}

export default SectionWrapper;
