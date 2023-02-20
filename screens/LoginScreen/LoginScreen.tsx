import style from './LoginScreen.style'
import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinkButton from '../../components/LinkButton/LinkButton'
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components'
import { LoginModel } from '../../models/LoginModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { signIn } from '../../redux/actions/authActions'
import AuthService from '../../services/AuthService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGIN_SUCCESS } from '../../redux/types/types'

function LoginScreen({ navigation }: { navigation: any }) {
    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const theme = useTheme()

    const [customError, setCustomError] = useState('')

    const [formData, setFormData] = useState<LoginModel>({
        email: '',
        password: '',
    })

    const submitLogin = () => {
        setCustomError('')

        if (
            formData.email.trim().length == 0 ||
            formData.password.trim().length == 0
        ) {
            setCustomError('Email or password missing!')
            return
        }

        AuthService.signIn(formData).then((res) => {
            AsyncStorage.multiGet(['token', 'refresh']).then((data) => {
                const token = data[0][1]
                const refresh = data[1][1]

                dispatch({ type: LOGIN_SUCCESS, payload: { token, refresh } })
            })
        })
    }

    return (
        <KeyboardAwareScrollView
            style={{
                ...style.Login,
                backgroundColor: theme['color-basic-100'],
            }}
            contentContainerStyle={{
                ...style.LoginContainer,
                backgroundColor: theme['color-basic-100'],
            }}
        >
            <Layout style={style.loginHeaderContainer}>
                <Text category="h2">Login</Text>
            </Layout>

            <Layout style={style.loginInputContainer}>
                <Input
                    style={style.loginInput}
                    placeholder="email"
                    onChangeText={(text) => {
                        setFormData({ ...formData, email: text })
                    }}
                />
                <Input
                    style={style.loginInput}
                    placeholder="password"
                    onChangeText={(text) => {
                        setFormData({ ...formData, password: text })
                    }}
                />
                <LinkButton buttonStyle={style.loginInput}>
                    Can't sign in?
                </LinkButton>
                {customError && <Text category="danger">{customError}</Text>}
            </Layout>
            <Layout style={style.loginButtonContainer}>
                <Button onPress={submitLogin}>
                    <Text>Button</Text>
                </Button>
            </Layout>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen
