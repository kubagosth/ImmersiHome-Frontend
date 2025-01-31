const BASE_URL = "base_url_here"; 

const API = {
    GET_ALL_HOMES: `${BASE_URL}/homes`,
    GET_HOME_DETAILS: (id) => `${BASE_URL}/homes/${id}`,
    GET_NEARBY_SCHOOLS: (id) => `${BASE_URL}/homes/${id}/schools`,
    GET_PRICE_HISTORY: (id) => `${BASE_URL}/homes/${id}/price-history`,
};

export default API;
