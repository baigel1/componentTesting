
import { DropdownItem, SearchBar, RenderEntityPreviews } from "@yext/answers-react-components";
import { Link, useResolvedPath, useMatch, LinkProps } from "react-router-dom";


const CustomLink = ({children, to, ...props}: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const activeStyle = {
    "color": "blue",
    "fontWeight": 700,
    "textDecoration": "underline"
  }

  return (
    <Link to={to}
      style={match ? activeStyle:undefined}
      {...props}
    >
      {children}
    </Link>
  )
}


const SearchHeader = () => {
  
const renderEntityPreview = () => {

}

  return (
    <div className="flex flex-col items-center">
      <div className="bg-rose-400 h-60 w-full flex flex-col justify-center items-center">
        <SearchBar
          placeholder="see what we've got to offer"
          customCssClasses={{
            container: "w-3/5",
          }}
          // visualAutocompleteConfig={renderEntityPreviews=renderEntityPreview}
        />
        <div className="w-3/5 space-x-2 text-lg">
          <CustomLink to="/">All</CustomLink>
          <CustomLink to="/products">Products</CustomLink>
          <CustomLink to="/helpArticles">Help Articles</CustomLink>
        </div>
        {/* <DropdownItem value={"raspberries"} className={"bg-red-500 text-green-500"}/>
          
        <DropdownItem value ={"cherries"}/> */}
        
      </div>
    </div>
  );
};


export default SearchHeader;
