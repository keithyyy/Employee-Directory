import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar"
import TableHead from "./TableHead"
import TableItems from "./TableItems"
import API from "../utils/API"
import useDebounce from "../utils/Debounce"

const Container = () => {

    // setting up our state for users. Initially it'll be an empty array
    const [employees, setEmployees] = useState([]);
    const [searchedEmployee, setSearchedEmployee] = useState("");

    function populateEmployees() {
        API.getUsers()
        .then((res) => {
            setEmployees(res.data.results)
        }).catch(err => console.log(err))
    }


    const debouncedInput = useDebounce(searchedEmployee, 300)

    useEffect(() => {

        if(debouncedInput) {
            filterList()
        } else {
            populateEmployees()
        }
        
    }, [debouncedInput])

    function filterList() {
        API.getUsers()
        .then(res => {
            const response = res.data.results;


            const employee = response.filter(emp => {
                const first = emp.name.first.toLocaleLowerCase()
                const last = emp.name.last.toLocaleLowerCase()
                const lowercaseSearchedEmployee = searchedEmployee.toLocaleLowerCase()
                const full = `${first} ${last}`
                const originalName = `${emp.name.first} ${emp.name.last}`

                if (full.includes(lowercaseSearchedEmployee)) {
                    return true
                } else if (originalName.includes(searchedEmployee)) {
                    return true
                }
            });

            setEmployees(employee)
        })
    }    
    


    // getting value from search bar
    const handleInputChange = event => {
        const value = event.target.value;
        setSearchedEmployee(value)
        console.log(value)
    }

    return (
        <div className="container mt-4">
            <p className="text-center">Search through your employee database!</p>

            <div className="row">
                <SearchBar 
                handleInputChange={handleInputChange}
                value={searchedEmployee}/>
            </div>

            <div className="table-responsive">
                <table className="table">
                    <TableHead />
                    <tbody>
                       {employees.map(employee => (
                           <TableItems 
                            key={employee.id.value}
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