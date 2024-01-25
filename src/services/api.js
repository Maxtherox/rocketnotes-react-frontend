import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocket-notes-application.onrender.com"
})
