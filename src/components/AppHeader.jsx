import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"


export default function AppHeader() {


    return (
        <>
            <header>
                < img src='/images/boolflix.png' alt="" />
                <SearchBar />

            </header>
        </>
    )
}