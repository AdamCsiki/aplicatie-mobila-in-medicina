import {
    BaseQueryApi,
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { RootState } from '../store'
import axios from '../../api/axios'

interface signInResponse {
    token: string
}

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://10.0.2.2:8080',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})

const axiosBaseQuery =
    (): BaseQueryFn<{
        url: string
        method: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
        params?: AxiosRequestConfig['params']
    }> =>
    async ({ url, method, data, params }) => {
        return axios({
            url: url,
            method: method,
            data: data,
            params: params,
        })
            .then((res) => {
                return {
                    data: res.data,
                }
            })
            .catch((err) => {
                return { error: err }
            })
    }

const api = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (credentials) => ({
                url: '/auth/signin',
                method: 'post',
                data: credentials,
            }),
        }),
    }),
})
