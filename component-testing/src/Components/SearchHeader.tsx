
import { SearchBar } from "@yext/answers-react-components";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-amber-500 h-60 w-full flex flex-col justify-center items-center">
        <SearchBar
          placeholder="see what we've got to offer"
          customCssClasses={{
            container: "w-3/5",
          }}
        />
        <div className="w-3/5 space-x-2 text-lg">
          <Link to="/">All</Link>
          <Link to="/products">Products</Link>
          <Link to="/helpArticles">Help Articles</Link>
        </div>
      </div>
    </div>
  );
};
export default SearchHeader;
