
export default {
    generateTableData,
    generateModalData
}

// Small service to format the data from the api,
// so that we can get the properties that we want

function generateTableData(phoneBookData) {
    return phoneBookData.map(data => {
        const { name,phone,address,id } = data
        return {
            id,
            name,
            phone,
            address: _formatAddress(address)
        };
    })
}

function generateModalData(phoneBookObject) {
    const { username,email,website,company } = phoneBookObject;
    return {
        username,
        email,
        website,
        company
    };
}

function _formatAddress(address) {
    const { street,city } = address;
    return `${street}, ${city}`;
}
