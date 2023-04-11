import { ScrollView, TouchableOpacity, Image } from 'react-native'
import {
    Layout,
    Text,
    Button,
    Divider,
    useTheme,
    Avatar,
    Card,
} from '@ui-kitten/components'
import style, { backgroundAnimation } from './Profile.style'
import Animated from 'react-native-reanimated'
import { useEffect, useState } from 'react'
import defaultUser from '../../models/defaultUser'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { signOut } from '../../redux/actions/authActions'
import HeadingAndContent from '../../components/HeadingAndContent/HeadingAndContent'
import bodyReducer from '../../redux/reducers/bodyReducer'
import Spacer from '../../components/Spacer/Spacer'

function Profile({ navigation }: { navigation: any }) {
    const body = useSelector((state: RootState) => state.body)
    const [user, setUser] = useState(defaultUser)

    const theme = useTheme()

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
                        <Avatar
                            source={require('../../assets/horseprofile.jpeg')}
                            style={style.profileImage}
                        />
                    </TouchableOpacity>
                </Layout>
            </Layout>
            <Divider />
            <Layout style={style.profileMain} level="1">
                <Layout style={style.profileStatsHeader}>
                    <Text category={'h5'}>Stats</Text>
                </Layout>

                <Spacer />
                <Layout style={style.profileContainer}>
                    <HeadingAndContent title={'Age'} content={body.age} />
                    <HeadingAndContent title={'Height'} content={body.height} />
                    <HeadingAndContent title={'Weight'} content={body.weight} />
                </Layout>
            </Layout>
        </ScrollView>
    )
}

export default Profile
