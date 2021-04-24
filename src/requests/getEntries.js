import axios from "axios";

const getEntries = async (setResults) => {
    try {
        const response = await axios.get(
            "http://localhost:4000/entries/"
        );
        // console.log(response.data);
        setResults(response.data);
    } catch (error) {
        console.log(error.response);
    }
}

export default getEntries;