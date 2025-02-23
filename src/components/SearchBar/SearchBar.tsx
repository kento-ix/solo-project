import { useState } from "react";
import { useAtom } from "jotai";
import { searchAtom } from "../../store";
import { IconSearch } from "@tabler/icons-react";
import classes from "../Header/Header.module.scss";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSearch] = useAtom(searchAtom);  // jotai の atom に書き込み

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchQuery); // グローバル状態に保存
  };

  return (
    <form onSubmit={handleSubmit} className={classes.searchForm}>
      <input
        type="search"
        placeholder="Search Anime..."
        required
        className={classes.search}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className={classes.searchButton}>
        <IconSearch size={20} stroke={1.5} />
      </button>
    </form>
  );
};

export default SearchBar;
