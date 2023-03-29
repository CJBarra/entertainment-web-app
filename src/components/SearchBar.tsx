import styled from "styled-components/macro";

import SearchSvg from "../assets/icon-search.svg";

const StyledSearch = styled.div`
  margin-block: 1rem;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-block: 0.5rem;
`;

const StyledIcon = styled.img`
  --img-sizing: 1.5rem;

  height: var(--img-sizing);
  width: var(--img-sizing);
`;

const StyledSearchInput = styled.input.attrs((props) => ({
  type: "search",
}))`
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  width: var(--w-fill);
  margin-inline: 0.5rem 0;
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

  /* Media - Tablet and up */
  // 900px
  @media (min-width: 56.25rem) {
    width: 50%;
    margin-inline: 1rem;
    font-size: var(--heading-md);
    font-weight: var(--fw-300);
  }
`;

export default function Search() {
  return (
    <StyledSearch>
      <form>
        <StyledInputContainer>
          <StyledIcon src={SearchSvg} alt="search" />
          <StyledSearchInput placeholder="Search for Movies or TV Series" />
        </StyledInputContainer>
      </form>
    </StyledSearch>
  );
}
