import axios from '../api/axios'
import { useEffect, useState } from 'react'
import httpStatus from '../misc/httpStatus'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

function useAxios() {
    const auth = useSelector((state: RootState) => state.auth)

    return { axios }
}

export default useAxios
