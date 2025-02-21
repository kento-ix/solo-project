
const SearchBar = () => {
    return (
        <main>
            <div className="main-head">
                <form className="search-box">
                    <input 
                        type="search" 
                        placeholder="Search Anime..."
                        required
                    />
                </form>
            </div>
        </main>
    )
}

export default SearchBar;