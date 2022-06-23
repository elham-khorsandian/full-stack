import "./Search.scss";
import { useState } from "react";

const Search = (props) => {
  const { onChange } = props;
  const [coursesSearch, setCoursesSearch] = useState("");

  const changeHandler = (e) => {
    setCoursesSearch(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find a course here..."
        value={coursesSearch}
        onChange={changeHandler}
      ></input>
    </div>
  );
};

export default Search;
