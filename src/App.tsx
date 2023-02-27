import {
  GridItem,
  GridLayout,
  Loader,
  SectionWrapper,
  SliderItem,
  SliderLayout,
} from "./components";
import api from "@/api/v1/data.json";

import { GlobalStyle } from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
    </div>
  );
}

export default App;
