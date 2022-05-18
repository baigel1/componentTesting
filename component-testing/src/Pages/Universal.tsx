
import { UniversalResults, StandardCard, StandardSection } from "@yext/answers-react-components";
import { useAnswersState } from '@yext/answers-headless-react'
import NoResults from "../Components/NoResults";

const Universal = () => {
    const universalResults = useAnswersState(state => state.universal.verticals) || [""];
    console.log("results", universalResults)
  return (
      
    <div className="flex w-full justify-center items-center">
        {universalResults.length === 0 ? <NoResults /> :null}
      <UniversalResults
      customCssClasses={{container: "w-3/5"}}
        verticalConfigMap={{
          products: {
            CardComponent: ({ result }) => (
              <StandardCard
                result={result}
                customCssClasses={{
                  container:
                    "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-sm bg-rose-500",
                  header: "text-lg",
                }}
              />
            ),
            
            label: "Our Food",
            
          },
          locations: {
            CardComponent: ({ result }) => (
              <StandardCard
                result={result}
                customCssClasses={{
                  container:
                    "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-sm bg-indigo-500",
                  header: "text-lg",
                }}
              />
            ),
            label: "Our Stores",
          },
        }}
      />
    </div>
  );
};

export default Universal;
