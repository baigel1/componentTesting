import {
  AppliedFilters,
  DirectAnswer,
  SearchBar,
 // UniversalResults,
  StandardCard,
  VerticalResults,
  //StandardSection,
} from "@yext/answers-react-components";
//import SectionHeader from './Components/SectionHeader'
import "./App.css";

import usePageSetupEffect from './Hooks/search';

function App() {
 
    usePageSetupEffect("help_articles");
  return (
    <div className="flex flex-col items-center">
      <div className="bg-amber-500 h-60 w-full flex justify-center items-center">
        <SearchBar customCssClasses={{
          container: "w-3/5"
        }}/>
      </div>
      {/* <UniversalResults verticalConfigMap={{
        'products': {
          CardComponent: ({result}) => 
            <StandardCard result={result}
              customCssClasses ={{container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-sm bg-rose-500", header: "text-lg" }}
          
            />,
            'label': "Our Food",
            // SectionComponent: ({ results }) =>
            //                 <StandardSection
            //                     results={results}
            //                     verticalKey="products"
            //                     CardComponent={({ result }) => <StandardCard
            //                         result={result}
            //                         customCssClasses={{ container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-sm bg-white", header: "text-lg" }}
          
            //                     />}
            //                      header={<SectionHeader label="Our Food"/>}
            //                 />
            
        },
        'locations': {
          CardComponent: ({result}) => 
          
            <StandardCard result={result}
              customCssClasses ={{container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-sm bg-indigo-500", header: "font-medium"}}
              
            />,
            'label': "Our Stores"
        },

      }} /> */}
      <AppliedFilters/>
      <DirectAnswer
        customCssClasses={{container: "w-4/5"}}
      />
      <VerticalResults 
      displayAllOnNoResults={false}
      customCssClasses={{ results: "text-left grid grid-cols-6 gap-6 mx-6"}}
      CardComponent={
          ({ result }) => {
              
          return (
          <StandardCard
              result={result}
              customCssClasses={{ container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer", header: "text-lg" }}
              
          />
          )
          }
      }
      />
    </div>
  );
}

export default App;
