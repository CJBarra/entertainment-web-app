import styled from "styled-components/macro";

import api from "@/api/v1/data.json";
import {
  Loader,
  GridItem,
  GridLayout,
  SectionWrapper,
  SliderItem,
  SliderLayout,
} from "@/components";
import { GlobalStyle } from "@/styles";

const Container = styled.div`
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
      <Container className="app__container">
        <SectionWrapper title={"Trending"}>
          <SliderLayout>
            {api ? (
              api
                .filter((record) => (record.isTrending === true ? record : ""))
                .map((record) => (
                  <SliderItem
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
                .filter((record) => (record.isTrending === false ? record : ""))
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
      </Container>
    </div>
  );
}

export default App;
