import { SectionWrapper, GridLayout, GridItem, Loader } from "@/components";
import api from "../api/v1/data.json";

export default function Bookmarked() {
  return (
    <>
      <SectionWrapper title={"Bookmarked"}>
        <GridLayout>
          {api ? (
            api
              .filter((record) => (record.isBookmarked === true ? record : null))
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
