
import classes from "./SideBar.module.scss";

const SideBar = () => {

  return (
    <>
        <aside className={classes.sidebar}>
            <div className={classes.list}>
            <h3>Recent Top10 Anime</h3>
            <a href="#" target="_blank" rel="noreferrer">One Piece</a>
            <a href="#" target="_blank" rel="noreferrer">Dragon Ball</a>
            <a href="#" target="_blank" rel="noreferrer">Naruto</a>
            <a href="#" target="_blank" rel="noreferrer">One Piece</a>
            <a href="#" target="_blank" rel="noreferrer">Dragon Ball</a>
            <a href="#" target="_blank" rel="noreferrer">Naruto</a>
            <a href="#" target="_blank" rel="noreferrer">One Piece</a>
            <a href="#" target="_blank" rel="noreferrer">Dragon Ball</a>
            <a href="#" target="_blank" rel="noreferrer">Naruto</a>
            <a href="#" target="_blank" rel="noreferrer">Naruto</a>
            </div>
        </aside>
    </>
  );
};

export default SideBar;
