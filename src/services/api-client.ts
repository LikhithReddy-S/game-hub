import axios from "axios";


export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key:'a99d08812daa4e49ad5c4b5f32bc1ea0',
    }
})