import classes from "./SideBar.module.scss";
import useTopAnime from "../../hooks/topAnime";

const SideBar = () => {
  const { topAnime, loading, error } = useTopAnime(10); // トップ10取得

  return (
    <aside className={classes.sidebar}>
      <div className={classes.list}>
        <h3>Recent Top 10 Anime</h3>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && topAnime.map((anime, index) => (
          <a key={index} href="#" target="_blank" rel="noreferrer">
            {index + 1}. {anime}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
