import { createContext, useContext, useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import * as SecureStore from 'expo-secure-store'
import store from '../redux/store'

import { LoginModel } from '../models/LoginModel'
import getHttpOnlyToken from '../misc/getHttpOnlyToken'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider } from 'react-redux'

function AuthProvider({ children }: { children: any }) {
    const [error, setError] = useState<string>('')

    const signIn = (loginForm: LoginModel) => {}
    const signOut = () => {}

    return <Provider store={store}>{children}</Provider>
}

export default AuthProvider
