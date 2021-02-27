import React from "react";
import TableHead from "./TableHead";

const TableItems = (props) => {
    return (
        <tr>
            <td>
                <img alt={props.name} src={props.picture}/>
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.phone}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.dob}
            </td>
        </tr>
    )
}

export default TableItems;