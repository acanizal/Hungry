import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:3001/api/v1/restaurants"
});