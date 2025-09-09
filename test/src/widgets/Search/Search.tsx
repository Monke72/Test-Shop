import "./Search.scss";

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = ({ value, setValue, setOpenSearch }: SearchProps) => {
  return (
    <div className="search">
      <div className={`search__input-wrapper ${value ? "use" : ""}`}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => setOpenSearch(true)}
          className={`search__input`}
          type="text"
          placeholder="Найти товар"
        />
      </div>
      {value !== "" && <button className="search__btn">Перейти</button>}
    </div>
  );
};

export default Search;
