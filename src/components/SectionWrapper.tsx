import styled from 'styled-components/macro';

const StyledSection = styled.section`
  margin-block: 2rem;

  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledSectionHeading = styled.div`
  position: relative;
  padding-bottom: 2rem;
`;

type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

const SectionWrapper = ({ title, children }: SectionProps) => {
  if (title !== '') {
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
};

export default SectionWrapper;
