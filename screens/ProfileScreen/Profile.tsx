import { ScrollView } from 'react-native'
import { Layout, Text, useTheme, Button } from '@ui-kitten/components'
import style from './Profile.style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import HeadingAndContent from '../../components/HeadingAndContent/HeadingAndContent'
import Spacer from '../../components/Spacer/Spacer'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import SetupBodyScreen from '../SetupBodyScreen/SetupBodyScreen'
import { useEffect, useState } from 'react'
import { getBodyInfo, setCurrentBMR } from '../../redux/actions/bodyActions'
import { calculateCalories } from '../../misc/MacroEquations'
import {
    DAILY_EXERCISE,
    EXERCISE_ACTIVITY_TYPE,
    EXTREME_EXERCISE,
    EXTREME_WEIGHT_GAIN,
    EXTREME_WEIGHT_LOSS,
    INTENSE_EXERCISE,
    LIGHT_EXERCISE,
    MAINTAIN_WEIGHT,
    MILD_WEIGHT_GAIN,
    MILD_WEIGHT_LOSS,
    SEDENTARY,
    WEIGHT_GAIN,
    WEIGHT_LOSS,
} from '../../misc/MacroTypes'
import Select from '../../components/Select/Select'
import { HARRIS_EQUATION, MIFFLIN_EQUATION } from '../../redux/types/types'

function Profile({ navigation }: { navigation: any }) {
    const body = useSelector((state: RootState) => state.body)
    const dispatch = useDispatch()

    const [bodyEditVisible, setBodyEditVisible] = useState(false)
    const [bmr, setBmr] = useState(body.BMR_mifflin)

    const [activity, setActivity] = useState<EXERCISE_ACTIVITY_TYPE>(undefined)

    // ! Switching the current BMR if the state changes
    // ? This needs to be done because it doesn't update on the screen otherwise
    useEffect(() => {
        switch (body.current_BMR) {
            case MIFFLIN_EQUATION:
                return setBmr(body.BMR_mifflin)
            case HARRIS_EQUATION:
                return setBmr(body.BMR_harris)
        }
    }, [body])

    return (
        <Layout style={{ flex: 1 }} level={'4'}>
            <ScrollView
                contentContainerStyle={{
                    ...style.Profile,
                }}
                scrollEnabled
                showsVerticalScrollIndicator
            >
                <Layout style={style.StatContainer} level="1">
                    <Layout style={style.profileStatsHeader}>
                        <Text category={'h4'}>Stats</Text>
                        <Button onPress={() => setBodyEditVisible(true)}>
                            Edit
                        </Button>
                    </Layout>
                    <Spacer />
                    <Layout style={style.profileContainer}>
                        <HeadingAndContent title={'Sex'} content={body.sex} />
                        <Spacer />
                        <HeadingAndContent title={'Age'} content={body.age} />
                        <HeadingAndContent
                            title={'Height'}
                            content={body.height}
                        />
                        <HeadingAndContent
                            title={'Weight'}
                            content={body.weight}
                        />
                        <Spacer />
                        <Layout style={style.profileStatsHeader}>
                            <Text category={'h5'} style={{ textAlign: 'left' }}>
                                BMR:
                            </Text>
                            <Select
                                defaultValueByIndex={
                                    body.current_BMR == MIFFLIN_EQUATION ? 0 : 1
                                }
                                data={[MIFFLIN_EQUATION, HARRIS_EQUATION]}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem)
                                    setCurrentBMR(selectedItem).then(
                                        (action) => {
                                            dispatch(action)
                                        }
                                    )
                                }}
                            />
                        </Layout>
                        <Spacer />
                        <HeadingAndContent
                            title={'Current BMR'}
                            content={bmr + ' Cals./day'}
                        />
                        <Spacer />
                        <HeadingAndContent
                            title={'Mifflin-St.Jeor Eq.'}
                            content={body.BMR_mifflin + ' Cals./day'}
                        />
                        <HeadingAndContent
                            title={'Harris-Benedict Eq.'}
                            content={body.BMR_harris + ' Cals./day'}
                        />

                        <Spacer height={32} />
                        <Layout style={style.profileStatsHeader}>
                            <Text category={'h5'}>Activity:</Text>
                            <Select
                                defaultValueByIndex={0}
                                data={[
                                    'BMR',
                                    SEDENTARY,
                                    LIGHT_EXERCISE,
                                    DAILY_EXERCISE,
                                    INTENSE_EXERCISE,
                                    EXTREME_EXERCISE,
                                ]}
                                onSelect={(selectedItem, index) => {
                                    setActivity(selectedItem)
                                }}
                            />
                        </Layout>
                        <Spacer height={32} />
                        <HeadingAndContent
                            title={'Maintain Weight'}
                            category={'h5'}
                            content={
                                calculateCalories(
                                    bmr,
                                    activity,
                                    MAINTAIN_WEIGHT
                                ).toFixed(0) + ' Cals/day'
                            }
                        />
                        <Spacer height={32} />
                        <Layout style={style.profileStatsHeader}>
                            <Text category={'h5'}>Weight Loss</Text>
                        </Layout>

                        <Spacer />
                        <HeadingAndContent
                            title={'0.25 Kg/week'}
                            content={
                                calculateCalories(
                                    bmr,
                                    activity,
                                    MILD_WEIGHT_LOSS
                                ).toFixed(0) + ' Cals/day'
                            }
                        />
                        <HeadingAndContent
                            title={'0.50 Kg/week'}
                            content={
                                calculateCalories(
                                    bmr,
                                    activity,
                                    WEIGHT_LOSS
                                ).toFixed(0) + ' Cals/day'
                            }
                        />
                        <HeadingAndContent
                            title={'1.00 Kg/week'}
                            content={
                                calculateCalories(
                                    bmr,
                                    activity,
                                    EXTREME_WEIGHT_LOSS
                                ).toFixed(0) + ' Cals/day'
                            }
                        />
                        <Spacer />
                        <Layout style={style.profileStatsHeader}>
                            <Text category={'h5'}>Weight Gain</Text>
                        </Layout>
                        <Spacer />
                        <HeadingAndContent
                            title={'0.25 Kg/week'}
                            content={
                                calculateCalories(
                                    bmr,
                                    activity,
                                    MILD_WEIGHT_GAIN
                                ).toFixed(0) + ' Cals/day'
                            }
                        />
                        <HeadingAndContent
                            title={'0.50 Kg/week'}
                            content={
                                calculateCalories(
                                    bmr,
                                    activity,
                                    WEIGHT_GAIN
                                ).toFixed(0) + ' Cals/day'
                            }
                        />
                        <HeadingAndContent
                            title={'1.00 Kg/week'}
                            content={
                                calculateCalories(
                                    bmr,
                                    activity,
                                    EXTREME_WEIGHT_GAIN
                                ).toFixed(0) + ' Cals/day'
                            }
                        />
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
        </Layout>
    )
}

export default Profile
