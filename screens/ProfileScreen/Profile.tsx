import { ScrollView, TouchableOpacity, Image } from 'react-native'
import { Layout, Text, Button, Divider, useTheme } from '@ui-kitten/components'
import style, { backgroundAnimation } from './Profile.style'
import Container from '../../components/Container/Container'
import Animated from 'react-native-reanimated'
import useAxios from '../../hooks/useAxios'
import { useEffect, useState } from 'react'
import defaultUser from '../../models/defaultUser'
import { useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { signOut } from '../../redux/actions/authActions'
import { LOGOUT } from '../../redux/types/types'

function Profile({ navigation }: { navigation: any }) {
    const [user, setUser] = useState(defaultUser)

    const dispatch = useDispatch()

    const theme = useTheme()

    const { axios } = useAxios()

    return (
        <ScrollView
            contentContainerStyle={{
                ...style.Profile,
                backgroundColor: theme['color-basic-100'],
            }}
            pagingEnabled
        >
            <Animated.View
                style={{
                    ...style.profileBackground,
                }}
                entering={backgroundAnimation}
            >
                <TouchableOpacity
                    style={{
                        ...style.profileBackgroundButton,
                        backgroundColor: theme['color-primary-100'],
                    }}
                >
                    <Image style={style.profileBackgroundImage} />
                </TouchableOpacity>
            </Animated.View>

            <Layout style={style.profileUser}>
                <Layout style={style.profileUserBackground}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/horseprofile.jpeg')}
                            style={style.profileImage}
                        />
                    </TouchableOpacity>
                </Layout>
                <TouchableOpacity style={style.profileUsername}>
                    <Text category="h5">Csiki Adam Csaba</Text>
                </TouchableOpacity>
            </Layout>
            <Divider />
            <Layout style={style.profileMain} level="1">
                <Divider />
                <Text category="h5">Overview</Text>
                <Divider />
                <Container style={style.profileContainer} level="1">
                    <Button
                        onPress={() => {
                            dispatch({
                                type: LOGOUT,
                            })
                        }}
                    >
                        <Text>Axios</Text>
                    </Button>
                </Container>
            </Layout>
        </ScrollView>
    )
}

export default Profile
