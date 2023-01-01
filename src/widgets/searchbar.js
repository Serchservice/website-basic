import { Link } from 'react-router-dom';
import { useState } from "react";
import './css/searchbar.css';
import Icons from '../config/images/icons';

const SearchBar = ({ placeholder, data}) => {

    const [filteredData, setFilteredData] = useState([]);
    /*setEnteredWord(searchWord);
    const [enteredData, setEnteredData] = useState([]);*/

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.hint.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    /*const clear = () => {
        setFilteredData([]);
        setEnteredWord("");
    }*/

    return (
        <div className='search'>
            <div className="searchBox">
                <img alt="" src={ Icons.searchIcon } />
                {/*<div>
                    {filteredData.length === 0 ? SearchIcon : CloseIcon}
                </div>*/}
                <input type="Search" placeholder={ placeholder } onChange={ handleFilter } /*value={enteredData}*/ />
            </div>
            {
                filteredData.length !== 0 && (
                    <div className='searchOptions'>
                        {filteredData.slice(0, 5).map(value => {
                            return <Link to={ value.link } className="searchData" key={ value.id } >
                                <h4 className='searchHead'> { value.title } </h4>
                                <p> { value.anotherhint } </p>
                            </Link>
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default SearchBar;