import React from 'react';
import SearchStyle from '../../styles/nav/SearchStyle';
import SearchIcon from '../../assets/images/icons/search-icon.svg';

const Search = () => {
    return (
        <SearchStyle>
            <form>
                <input type="text" name="search" placeholder="Buscas algo en especial?" />
                <SearchIcon />
            </form>

        </SearchStyle>
    )
};


export default Search;