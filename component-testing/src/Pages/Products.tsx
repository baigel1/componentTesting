
import { VerticalResults, StandardCard, ResultsCount, AlternativeVerticals, VerticalLink, UniversalLink, FilterSearch, StandardFacets, ApplyFiltersButton, DirectAnswer, NumericalFacets } from "@yext/answers-react-components";
import ProductCard from "../Cards/ProductCard";
import SearchHeader from "../Components/SearchHeader";
import usePageSetupEffect from '../Hooks/search';
import { useAnswersState, SearchParameterField } from '@yext/answers-headless-react'
import NoResults from '../Components/NoResults'

const Products = () => {
    usePageSetupEffect("products");
    const verticalResults = useAnswersState(state => state.vertical.results) || [""];
    console.log(verticalResults)

    function determineIfVerticalOrUniversal(toBeDetermined: VerticalLink|UniversalLink): toBeDetermined is VerticalLink {
      if((toBeDetermined as VerticalLink).verticalKey){
        return true
      }
      return false
    }

    const handleReroute = (data:VerticalLink|UniversalLink) => {
      console.log("data ios", data)
      let newRoute = ""
      //this could easily just be an if statement, but for future if there are multiple mappings that need to happen this is how you'd do it
      const mappedFields:any = {
        help_articles: "helpArticles"
      }

      if(determineIfVerticalOrUniversal(data)){
        
        const vertical = mappedFields[data.verticalKey] ? mappedFields[data.verticalKey] : data.verticalKey
        newRoute = `/${vertical}`

      }
      else {
        //handle universal case
      }

      return newRoute
    }

  return (
    <>
      <SearchHeader />
      {/* <FilterSearch searchFields={[
        {
          fieldApiName: "name",
          entityType: "product"
          
        }]} 
        label="fruit filter"
        // searchOnSelect={true}
        
        />
        <ApplyFiltersButton /> */}
        <StandardFacets/>
        <NumericalFacets
          inputPrefix={<p>$</p>}
        />


      {verticalResults.length === 0 ? 
      <>
      <AlternativeVerticals currentVerticalLabel="Products" verticalConfigMap={{
          locations: {label:"Locations"},
          help_articles:{label:"Help Articles"}

      }}
      customCssClasses={{
          container: "bg-slate-300 mb-0"
      }}
      getSuggestionUrl={handleReroute}
      />
      <NoResults /> 
      
      </>
      : 
      <>
      <ResultsCount customCssClasses={{resultCountText: "mx-6 text-orange-700 text-lg"}}/>
      <NumericalFacets/>
      <DirectAnswer customCssClasses={{ container: "w-4/5" }} />
      <VerticalResults
        displayAllOnNoResults={false}
        customCssClasses={{ results: "text-left grid grid-cols-6 gap-6 mx-6" }}
        CardComponent={({ result }) => {
          return (
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
