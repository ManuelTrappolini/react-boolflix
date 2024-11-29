import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";
import { useState } from "react";


export default function SearchBar() {
    const [searchText, setSearchText] = useState('')
    const { searchQuery, updateSearchQuery } = useContext(GlobalContext);


    function handleSearchForm(e) {
        e.preventDefault()

        updateSearchQuery(searchText)



    }


    return (


        <div>

            <form className="navbar" onSubmit={handleSearchForm}>

                <label htmlFor="searchText" className="form-label"></label>
                <input
                    type="search"
                    className="form-control"
                    name="searchText"
                    id="searchText"
                    aria-describedby="helpId"
                    placeholder="🔍Search..."
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
            </form>
        </div>


    )


}