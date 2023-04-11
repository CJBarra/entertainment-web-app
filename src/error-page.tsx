import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Heading } from './components';

import { GlobalStyle } from './styles';

const ErrorElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 200px);
  word-break: normal;

  h1 {
    font-size: var(--heading-md);
  }

  /* Media - Small Desktop and up */
  // 900px
  @media (min-width: 56.25rem) {
    h1 {
      font-size: var(--heading-lg);
    }
  }
`;

const StyledErrorMessage = styled.p`
  i {
    color: var(--theme-accent);
  }
`;

type MessageProps = {
  message: string;
};
const ErrorMessage = ({ message }: MessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

const ErrorPage = () => {
  const error = useRouteError();
  // console.error(error instanceof Error);

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorElement id="error-page">
        <GlobalStyle />

        <Heading title={'Hmm...'} />
        <ErrorMessage message={'Something went wrong here.'} />
        <ErrorMessage message={error.statusText || error.data?.message} />
      </ErrorElement>
    );
  } else {
    return (
      <ErrorElement>
        <ErrorMessage message={'Well, something went wrong here.'} />
      </ErrorElement>
    );
  }
};

export default ErrorPage;
