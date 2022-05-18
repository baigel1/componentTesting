
import { VerticalResults, StandardCard, ResultsCount, AlternativeVerticals } from "@yext/answers-react-components";
import ProductCard from "../Cards/ProductCard";
import SearchHeader from "../Components/SearchHeader";
import usePageSetupEffect from '../Hooks/search';
import { useAnswersState } from '@yext/answers-headless-react'
import NoResults from '../Components/NoResults'

const Products = () => {
    usePageSetupEffect("products");
    const verticalResults = useAnswersState(state => state.vertical.results) || [""];
    console.log(verticalResults)
  return (
    <>
      <SearchHeader />
      {verticalResults.length === 0 ? 
      <>
      <AlternativeVerticals currentVerticalLabel="Products" verticalConfigMap={{
          locations: {label:"Locations"},
          help_articles:{label:"Help Articles"}

      }}
      customCssClasses={{
          container: "bg-slate-300 mb-0"
      }}/>
      <NoResults /> 
      
      </>
      : 
      <>
      <ResultsCount customCssClasses={{resultCountText: "mx-6 text-orange-700 text-lg"}}/>
      <VerticalResults
        displayAllOnNoResults={false}
        customCssClasses={{ results: "text-left grid grid-cols-6 gap-6 mx-6" }}
        CardComponent={({ result }) => {
          return (
            // <StandardCard
            //   result={result}
            //   customCssClasses={{
            //     container:
            //       "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer",
            //     header: "text-lg",
            //   }}
            // />
            <ProductCard result={result} fieldMappings={{
                title: {
                    apiName: "name",
                    mappingType: "FIELD"
                },
                description: {
                    apiName: "richTextDescription",
                    mappingType: "FIELD"
                },
                price: {
                    apiName: "price",
                    mappingType: "FIELD"
                },
                photoGallery: {
                    apiName: "photoGallery",
                    mappingType: "FIELD"
                }
            }}/>
          );
        }}
      />
      
    </>}
    </>
  );
};

export default Products;
