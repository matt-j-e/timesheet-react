import React from "react";
import PropTypes from "prop-types";
import helpers from "../helpers/helpers"

import "../styles/EntriesTable.css";

const EntriesTable = ({ results }) => {
    // console.log(results);
    return (
        <section className="entries-table">
        <table>
            <thead>
            <tr>
                <th>Date</th><th>Client</th><th>Project</th><th>Work</th>
            </tr>
            </thead>
            <tbody>
                {
                    results.map((result, index) => {
                        return (   
                            <tr key={index}>
                                <td>{helpers.formatDate(result.date)}</td>
                                <td>{result.client}</td>
                                <td>{result.project}</td>
                                <td>{result.work}</td>
                            </tr> 
                        )
                    })
                }
            </tbody>
        </table>
        </section>
    );
}

EntriesTable.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        project: PropTypes.string,
        work: PropTypes.string.isRequired,
    })),
}

export default EntriesTable;