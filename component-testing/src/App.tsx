import "./App.css";
import SearchHeader from "./Components/SearchHeader";
import Universal from "./Pages/Universal";
import usePageSetupEffect from './Hooks/search';
import {DirectAnswer} from '@yext/answers-react-components'



function App() {    
  usePageSetupEffect();
  
  return (
    <>
      <SearchHeader/>
      
      <DirectAnswer customCssClasses={{ container: "w-4/5" }} />
      <Universal/>
    </>
    
  );
}

export default App;
