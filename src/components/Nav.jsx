import SearchBar from "./SearchBar";
import {Link} from "react-router-dom"



const Nav = function ({onSearch}){
    return ( 
    <div>
        <SearchBar onSearch={onSearch}/>
        <Link to="/about">
            <h3>About</h3>
        </Link>
        <Link to="/home">
            <h3>Home</h3>
        </Link>
    </div>
    );
}

export default Nav;