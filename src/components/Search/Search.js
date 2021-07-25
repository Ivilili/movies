import "./Search.scss";

const Search = (props) => {
  const { setSearch } = props;

  return (
    <div className="Search">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="Search__input"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;
