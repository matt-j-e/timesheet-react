import React, { useState } from "react";
import postEntries from "../requests/postEntries";
import PropTypes from "prop-types";

const NewEntryForm = ({setResults, results}) => {

    const [values, setValues] = useState({
        date: "",
        client: "",
        project: "",
        work: "",
    });

    const handleDateInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            date: event.target.value,
        }));
    };

    const handleClientInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            client: event.target.value,
        }));
    };

    const handleProjectInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            project: event.target.value,
        }));
    };

    const handleWorkInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            work: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postEntries(values);
        const newResults =[...results, values];
        setResults(newResults);
    }

    return (
        <section className="new-entry-form">
            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="date"
                        name="date"
                        className="new-entry-form-field"
                        id="date"
                        placeholder="date"
                        value={values.date}
                        onChange={handleDateInputChange}
                    />
                </p>

                <p>
                    <input
                        type="text"
                        name="client"
                        className="new-entry-form-field"
                        id="client"
                        placeholder="client"
                        value={values.client}
                        onChange={handleClientInputChange}
                    />
                </p>

                <p>
                    <input
                        type="text"
                        name="project"
                        className="new-entry-form-field"
                        id="project"
                        placeholder="project"
                        value={values.project}
                        onChange={handleProjectInputChange}
                    />
                </p>

                <textarea
                    name="work"
                    className="new-entry-form-textarea"
                    id="work"
                    placeholder="work details"
                    value={values.work}
                    cols="60"
                    rows="10"
                    onChange={handleWorkInputChange}
                />

                <p>
                <input
                        type="submit"
                        name="submit"
                        className="new-entry-form-submit"
                        id="addEntry"
                        value="Save"
                    />
                </p>
            </form>
        </section>
    )

}

export default NewEntryForm;