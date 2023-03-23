import styled from "styled-components/macro";

import SearchSvg from "../assets/icon-search.svg";

export default function Search() {
  return (
    <form>
      <StyledInputContainer>
        <StyledIcon src={SearchSvg} alt="search" />
        <StyledSearchInput placeholder="Search for Movies or TV Series" />
      </StyledInputContainer>
    </form>
  );
}

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  
  padding-block: 0.5rem;
`;

const StyledSearchInput = styled.input.attrs((props) => ({
  type: "search",
}))`
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  margin-inline: 1rem;
  width: 100%;

  color: var(--text-primary);

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--text-primary);
    opacity: 0.5; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--text-primary);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--text-primary);
  }

  @media (min-width: 56.25rem) {
    width: 50%;
    font-size: var(--heading-md);
    font-weight: var(--fw-300);
  }
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;
