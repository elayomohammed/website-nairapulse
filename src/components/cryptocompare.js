const axios = require('axios');

const fetchPrice = async() => {
    const response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=NGN&api_key=7f58cbbaebfa89d1eaaac83f6b578db29e3c6e75b44cee25f4da07d1823b0174');
    if(response.data) {
        console.log(response.data)
    }
}

fetchPrice();