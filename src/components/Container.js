import React from "react";
import SearchBar from "./Searchbar"
import TableHead from "./TableHead"
import TableItems from "./TableItems"

const Container = () => {
    return (
        <div className="container mt-4">
            <p className="text-center">Search through your employee database!</p>

            <div className="row">
                <SearchBar />
            </div>

            <div className="table-responsive">
                <table className="table">
                    <TableHead />
                    <tbody>
                    <TableItems />
                    </tbody>
                </table>

            </div>

        </div>
    )





}

export default Container;