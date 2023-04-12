import { ScrollView, TouchableOpacity, Image } from 'react-native'
import {
    Layout,
    Text,
    Divider,
    useTheme,
    Avatar,
    Button,
} from '@ui-kitten/components'
import style, { backgroundAnimation } from './Profile.style'
import Animated from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import HeadingAndContent from '../../components/HeadingAndContent/HeadingAndContent'
import Spacer from '../../components/Spacer/Spacer'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import SetupBodyScreen from '../SetupBodyScreen/SetupBodyScreen'
import { useState } from 'react'

function Profile({ navigation }: { navigation: any }) {
    const body = useSelector((state: RootState) => state.body)

    const theme = useTheme()

    const [bodyEditVisible, setBodyEditVisible] = useState(false)

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
                    <Button onPress={() => setBodyEditVisible(true)}>
                        Edit
                    </Button>
                </Layout>
                <Spacer />
                <Layout style={style.profileContainer}>
                    <HeadingAndContent
                        title={'BodyType'}
                        content={body.bodyType}
                    />
                    <HeadingAndContent title={'Age'} content={body.age} />
                    <HeadingAndContent title={'Height'} content={body.height} />
                    <HeadingAndContent title={'Weight'} content={body.weight} />
                </Layout>
            </Layout>
            <FullScreenModal
                visible={bodyEditVisible}
                onBackdropPress={() => setBodyEditVisible(false)}
            >
                <SetupBodyScreen
                    onBack={() => setBodyEditVisible(false)}
                    afterSubmit={() => setBodyEditVisible(false)}
                />
            </FullScreenModal>
        </ScrollView>
    )
}

export default Profile
