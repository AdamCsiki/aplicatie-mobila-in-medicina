import axios from 'axios'
import { CookieJar } from 'tough-cookie'
import * as SecureStore from 'expo-secure-store'

export const API = 'http://10.0.2.2:3000'
// export const API = 'http://192.168.0.192:3000' // from phone (local laptop ip)
const TIMEOUT = 3000

export const jar = new CookieJar()

export default axios.create({
    baseURL: API,
    timeout: TIMEOUT,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials': true,
    },
})
