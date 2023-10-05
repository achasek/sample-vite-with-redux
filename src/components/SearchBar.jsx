import { useDispatch } from "react-redux";
import { setSearchBar } from "../reducers/searchBarReducer/searchBarReducer";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(setSearchBar(event.target.value));
  };

  return (
    <div>
      Search <input onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
