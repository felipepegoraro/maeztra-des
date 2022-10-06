import '../styles/css/SearchBar.css';

const SearchBar = (props) => {
    return (
        <input className="search-bar-style" 
            type="text" placeholder={props.placeholder}></input>
    )
}
export default SearchBar;