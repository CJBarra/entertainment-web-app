import styled, { keyframes } from "styled-components/macro";

const dance = keyframes`
  from {
    height: 1rem;
  } to {
    height: 100%;
  }
`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: var(--w-fill);
`;

const StyledBarBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 36px;
  width: 100px;
  min-width: 100px;

  margin: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

interface BarProps {
  delay: any;
}

const StyledBar = styled.div<BarProps>`
  background-color: var(--theme-accent);
  width: 0.8rem;
  height: 0.5rem;
  margin-inline: 2px;
  margin-block: 0;

  /* animation */
  animation-name: ${dance};
  animation-duration: 400ms;
  animation-play-state: running;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => props.delay || "0ms"};
`;

export default function Loader() {
  return (
    <StyledLoader>
      <StyledBarBlock className="bar__block">
        <StyledBar delay="715ms" />
        <StyledBar delay="25ms" />
        <StyledBar delay="190ms" />
        <StyledBar delay="315ms" />
        <StyledBar delay="125ms" />
        <StyledBar delay="82ms" />
      </StyledBarBlock>
    </StyledLoader>
  );
}
