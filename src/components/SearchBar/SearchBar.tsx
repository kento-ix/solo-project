import classes from "../Header/Header.module.scss"

const SearchBar = () => {
    return (
        <main>
            <div className="main-head">
                <form>
                    <input 
                        type="search" 
                        placeholder="Search Anime..."
                        required
                        className={classes.search}
                    />
                </form>
            </div>
        </main>
    )
}

export default SearchBar;