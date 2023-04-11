import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

import { GlobalStyle } from '@/styles';
import { Navbar, SearchBar } from '@/components';

const AppLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: var(--w-fill);

  @media (min-width: 56.25rem) {
    flex-direction: row;
  }
`;

const ContentContainer = styled.div`
  padding-inline: 1rem;

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    padding-inline: 1.5rem;
  }

  /* Media - Small Desktop and up */
  // 900px
  @media (min-width: 56.25rem) {
    width: calc(100% - 7.5rem);
    padding-block: 2rem 0;
    padding-inline: 2rem;
  }
`;

const App = () => {
  return (
    <AppLayout>
      <GlobalStyle />
      {/* always visibile nav && search bar */}
      <Navbar />
      <ContentContainer>
        <SearchBar />

        {/* routes */}
        <Outlet />
      </ContentContainer>
    </AppLayout>
  );
}

export default App;
