import axios from "axios";

const getEntries = async (setResults) => {
    const response = await axios.get(
        "http://localhost:4000/entries/"
    );
    setResults(response.data);
}

export default getEntries;