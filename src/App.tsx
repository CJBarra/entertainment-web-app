import styled from "styled-components/macro";

import {
  Loader,
  GridItem,
  GridLayout,
  SectionWrapper,
  SliderLayout,
  SearchBar,
} from "@/components";
import { GlobalStyle } from "@/styles";
import api from "@/api/v1/data.json";

const Content = styled.div`
  position: relative;
  padding-inline: 1rem;
  width: 100%;

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    padding-inline: 2rem;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Content>
        <SectionWrapper title={""}>
          <SearchBar />
        </SectionWrapper>

        <SectionWrapper title={"Trending"}>
          <SliderLayout>
            {api ? (
              api
                .filter((record) =>
                  record.isTrending === true ? record : null
                )
                .map((record) => (
                  <GridItem
                    path={record}
                    thumbType={"trending"}
                    key={record.year + "_" + record.title}
                  />
                ))
            ) : (
              <Loader />
            )}
          </SliderLayout>
        </SectionWrapper>

        {/* <Loader /> */}

        <SectionWrapper title={"Recommended for you"}>
          <GridLayout>
            {api ? (
              api
                .filter((record) =>
                  record.isTrending === false ? record : null
                )
                .map((record) => (
                  <GridItem
                    path={record}
                    thumbType={"regular"}
                    key={record.year + "_" + record.title}
                  />
                ))
            ) : (
              <Loader />
            )}
          </GridLayout>
        </SectionWrapper>
      </Content>
    </div>
  );
}

export default App;
