import { 
    Group 
} from '@mantine/core';
import classes from "./SideBar.module.scss";

const SideBar = () => {

  return (
    <>
        <aside className={classes.sidebar}>
            <div className={classes.list}>
            <h3>Top Anime</h3>
            <a href="#" target="_blank" rel="noreferrer">One Piece</a>
            <a href="#" target="_blank" rel="noreferrer">Dragon Ball</a>
            <a href="#" target="_blank" rel="noreferrer">Naruto</a>
            </div>
        </aside>
    </>
  );
};

export default SideBar;
