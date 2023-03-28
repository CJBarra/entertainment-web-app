import { SectionWrapper, GridLayout, GridItem, Loader } from "@/components";
import api from "../api/v1/data.json";

export default function TvSeries() {
  return (
    <>
      <SectionWrapper title={"TV Series"}>
        <GridLayout>
          {api ? (
            api
              .filter((record) =>
                record.category.toLowerCase() === "tv series" ? record : null
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
    </>
  );
}
