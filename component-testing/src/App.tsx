import {
  SearchBar,
  UniversalResults,
  StandardCard,
  StandardSection,
} from "@yext/answers-react-components";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-amber-700 h-60">
        <SearchBar />
      </div>
      <UniversalResults verticalConfigMap={{
        'products': {
          CardComponent: ({result}) => 
            <StandardCard result={result}
              customCssClasses ={{container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-sm bg-rose-500", header: "font-large" }}
             
          
            />,
            'label': "Our Food"
        },
        'locations': {
          CardComponent: ({result}) => 
            <StandardCard result={result}
              customCssClasses ={{container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-sm bg-indigo-500", header: "font-medium"}}
          
            />,
            'label': "Our Stores"
        },

      }} />
    </>
  );
}

export default App;
