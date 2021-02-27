import Reach from "react";
import SearchBar from "./Searchbar"

const Container = () => {
    return (
        <div className="container mt-4">
            <p className="text-center">Search through your employee database!</p>

            <div className="row">
                <SearchBar />
            </div>


        </div>
    )





}

export default Container;