import {
  Loader,
  GridItem,
  GridLayout,
  SectionWrapper,
  SliderLayout,
} from "@/components";
import api from "@/api/v1/data.json";

export default function Home() {
  return (
    <>
      <SectionWrapper title={"Trending"}>
        <SliderLayout>
          {api ? (
            api
              .filter((record) => (record.isTrending === true ? record : null))
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
              .filter((record) => (record.isTrending === false ? record : null))
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
    </>
  );
}
