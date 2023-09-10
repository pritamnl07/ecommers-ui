import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDQ1NTc4MTY2Yjk4MWFjNDE0M2FlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDE2OTY4MywiZXhwIjoxNjk0MjU2MDgzfQ.3vlneXsyy4VfEPSIwNZrblDAoKVtUHlvh3PMiqLxe5E";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});