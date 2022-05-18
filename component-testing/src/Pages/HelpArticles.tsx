
import {
  VerticalResults,
  StandardCard,
  AppliedFilters,
  DirectAnswer,
} from "@yext/answers-react-components";
import usePageSetupEffect from "../Hooks/search";
import SearchHeader from "../Components/SearchHeader";
import NoResults from "../Components/NoResults";
import { useAnswersState } from '@yext/answers-headless-react'

const HelpArticles = () => {
  usePageSetupEffect("help_articles");
  const verticalResults = useAnswersState(state => state.vertical.results) || [""];
  return (
    <>
      <SearchHeader/>
      {verticalResults.length === 0 ? <NoResults /> :null}
      <AppliedFilters />
      <DirectAnswer customCssClasses={{ container: "w-4/5" }} />
      <VerticalResults
        displayAllOnNoResults={false}
        customCssClasses={{ results: "text-left grid grid-cols-6 gap-6 mx-6" }}
        CardComponent={({ result }) => {
          return (
            <StandardCard
              result={result}
              customCssClasses={{
                container:
                  "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer",
                header: "text-lg",
              }}
            />
          );
        }}
      />
    </>
  );
};

export default HelpArticles;
