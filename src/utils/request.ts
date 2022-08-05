import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type method = 'get'|'post'

const request = axios.create({
    timeout: 5000
})

request.interceptors.request.use(config => {
    return config
}, error => Promise.reject(error))

request.interceptors.response.use(res => {
    return res.data
}, error => Promise.reject(error))

export default (url: string, method: method, requestDate:any) => {
    return request({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: requestDate
    })
}