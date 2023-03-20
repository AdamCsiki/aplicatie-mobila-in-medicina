import { Input, Layout, Text, Button } from '@ui-kitten/components'
import style from './RegisterScreen.style'
import React, { useState } from 'react'
import debounce from '../../misc/debouncer'
import axios from '../../api/axios'
import { SignUpModel } from '../../models/SignUpModel'
import { ParamListBase, NavigationProp } from '@react-navigation/native'
import { signIn } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

function RegisterScreen({
    navigation,
}: {
    navigation: NavigationProp<ParamListBase>
}) {
    const [formData, setFormData] = useState<SignUpModel>({
        username: '',
        email: '',
        password: '',
        dateOfBirth: new Date(),
    })

    const dispatch = useDispatch()

    const handleChange = debounce((name, value) => {
        console.log(name, value)
        setFormData((old) => ({ ...old, [name]: value }))
    }, 500)

    const submitSignUp = debounce(() => {
        console.log('Trying signup.')
        axios.post('/auth/signup', formData).then((res) => {
            signIn({ email: formData.email, password: formData.password }).then(
                (action) => {
                    dispatch(action)
                }
            )
        })
    }, 1000)

    return (
        <Layout style={style.RegisterScreen}>
            <Layout style={style.RegisterHeader}>
                <Text category="h2">SignUp</Text>
            </Layout>

            <Layout style={style.RegisterInputContainer}>
                <Input
                    placeholder={'username'}
                    onChangeText={(text) => {
                        handleChange('username', text)
                    }}
                ></Input>
                <Input
                    placeholder={'cope@seeth.jack'}
                    onChangeText={(text) => {
                        handleChange('email', text)
                    }}
                ></Input>
                <Input
                    placeholder={'password'}
                    onChangeText={(text) => {
                        handleChange('password', text)
                    }}
                ></Input>
            </Layout>
            <Layout style={style.RegisterFooter}>
                <Button
                    onPress={() => {
                        submitSignUp()
                    }}
                >
                    <Text category="h2">Next</Text>
                </Button>
            </Layout>
        </Layout>
    )
}

export default RegisterScreen
