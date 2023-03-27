import styled from "styled-components/macro";

import { Navbar, SearchBar } from "@/components";
import { GlobalStyle } from "@/styles";
import { Outlet } from "react-router-dom";

// route imports
const AppLayout = styled.div `
position: relative;
width: var(--w-fill);
  
`
const Content = styled.div`
`;

/* always visible */
export function Dashboard() {
  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  );
}

function App() {
  return (
    <AppLayout className="App">
      <GlobalStyle />
      <Dashboard />
      {/* routes */}
      <Content>
        <Outlet />
      </Content>
    </AppLayout>
  );
}

export default App;
