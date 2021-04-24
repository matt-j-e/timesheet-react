import axios from "axios";

const postEntries = async (values) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/entries/",
            {
                date: values.date,
                client: values.client,
                project: values.project,
                work: values.work
            }
        );
        console.log(response);
    } catch (error) {
        console.log(error.response);
    }
}

export default postEntries;