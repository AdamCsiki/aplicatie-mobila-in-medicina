import AsyncStorage from '@react-native-async-storage/async-storage'

function AuthHeader() {
    return AsyncStorage.multiGet(['token', 'refresh']).then(
        ([[token_key, token], [refresh_key, refresh]]) => {
            if (!token || !refresh) {
                return {}
            }

            return {
                Authorization: 'Bearer ' + token,
                'Set-Cookie': `refresh=${refresh}; HttpOnly`,
            }
        }
    )
}

export default AuthHeader()
