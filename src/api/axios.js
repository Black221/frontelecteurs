import axios from "axios";

export default axios.create({
    baseURL: "https://apex.oracle.com/pls/apex",
    headers: {
        'Accept' : '*/*',
        'Access-Control-Allow-Origin' : '*'
    }
});