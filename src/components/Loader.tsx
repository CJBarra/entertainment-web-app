import styled, { keyframes } from 'styled-components/macro';

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
  --width: 6.25rem;

  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 2rem;
  min-width: var(--width);
  width: var(--width);

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
  margin-block: 0;
  margin-inline: 0.125rem;

  /* animation */
  animation-name: ${dance};
  animation-delay: ${(props) => props.delay || '0ms'};
  animation-direction: alternate;
  animation-duration: 400ms;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: linear;
`;

const Loader = () => {
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
};

export default Loader;
