import style from './SignInScreen.style'
import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinkButton from '../../components/LinkButton/LinkButton'
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components'
import { LoginModel } from '../../models/LoginModel'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'

function SignInScreen({ navigation }: { navigation: any }) {
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

        signIn(formData).then((res: any) => {
            if (res.error) {
                setCustomError(res.error)
                return
            }
            dispatch(res)
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
            persistentScrollbar={true}
            enableOnAndroid={true}
            scrollEnabled={true}
        >
            <Layout style={style.loginRegisterContainer}>
                <Button
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                >
                    <Text>SignUp</Text>
                </Button>
            </Layout>
            <Layout style={style.loginHeaderContainer}>
                <Text category="h2">SignIn</Text>
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
                    onSubmitEditing={submitLogin}
                />
                <LinkButton buttonStyle={style.loginInput}>
                    Can't sign in?
                </LinkButton>
                {customError && <Text category="danger">{customError}</Text>}
            </Layout>
            <Layout style={style.loginButtonContainer}>
                <Button onPress={submitLogin}>
                    <Text>SignIn</Text>
                </Button>
            </Layout>
        </KeyboardAwareScrollView>
    )
}

export default SignInScreen
