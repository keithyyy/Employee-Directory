import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar"
import TableHead from "./TableHead"
import TableItems from "./TableItems"
import API from "../utils/API"

const Container = () => {

    // setting up our state for users. Initially it'll be an empty array
    const [employees, setEmployees] = useState([]);
    // const [searchedEmployee, setSearchedUser] = useState("");

    useEffect(() => {
        API.getUsers()
        .then((res) => {
            setEmployees(res.data.results)
        })
    })

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
                       {employees.map(employee => (
                           <TableItems 
                            key={employee.name.last}
                            picture={employee.picture.thumbnail}
                            name={`${employee.name.first} ${employee.name.last}`}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                           />
                       ))} 
                    
                    </tbody>
                </table>

            </div>

        </div>
    )

}

export default Container;