import AsyncStorage from '@react-native-async-storage/async-storage'

async function authHeader() {
    const response = await AsyncStorage.getItem('token').then((res) => {
        if (res) {
            return { Authorization: 'Bearer ' + res }
        }
        return {}
    })

    return response
}

export default authHeader()
