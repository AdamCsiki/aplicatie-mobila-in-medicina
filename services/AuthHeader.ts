import store, { RootState } from '../redux/store'
import { getItemAsync } from 'expo-secure-store'

function AuthHeader() {
    return getItemAsync('accessToken').then((accessToken) => {
        console.log(accessToken)
        return { Authorization: `Bearer ${accessToken}` }
    })
}

export default AuthHeader
