const axios = require('axios');

const _URL = "https://jsonplaceholder.typicode.com/users";

export default {
    getPhoneBookData,
}

async function getPhoneBookData() {
    const { data } = await axios.get(_URL);
    return data;
}

