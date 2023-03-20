import axios from "axios"

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export default axios.create({
    withCredentials : true,
    baseURL : "http://127.0.0.1:5000"
})

