import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styled from "styled-components/macro";

const ErrorElement = styled.div`
  display: flex;
  height: calc(100vh - 200px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: normal;

  h1 {
    font-size: var(--heading-md);
  }

  @media (min-width: 56.25rem) {
    h1 {
      font-size: var(--heading-lg);
    }
  }
`;
const ErrorMessage = styled.p`
  i {
    color: var(--theme-accent);
  }
`;

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error instanceof Error);

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorElement id="error-page">
        <h1>Hmm...</h1>
        <ErrorMessage>Something went wrong here.</ErrorMessage>
        <ErrorMessage>
          <i>{error.statusText || error.data?.message}</i>
        </ErrorMessage>
      </ErrorElement>
    );
  } else {
    return <div>Well, something went wrong here.</div>;
  }
}
