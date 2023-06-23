import gstyle from '../../styles/global-style'
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import Spacer from '../../components/Spacer/Spacer'
import Select from '../../components/Select/Select'
import {
    ACTIVE,
    EXERCISE_ACTIVITY_TYPE,
    LIGHTLY_ACTIVE,
    MODERATELY_ACTIVE,
    SEDENTARY,
    VERY_ACTIVE,
} from '../../misc/MacroTypes'
import {
    getBodyInfo,
    setCurrentActivity,
    setCurrentWeightPlan,
    setRecommendedMacros,
} from '../../redux/actions/bodyActions'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
    MAINTAIN_WEIGHT,
    WEIGHT_GAIN,
    WEIGHT_LOSS,
    WEIGHT_PLAN_TYPES,
} from '../../redux/types/types'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

function SetupPlanScreen({
    navigation,
    onBack,
    afterSubmit,
}: {
    navigation?: NavigationProp<ParamListBase>
    onBack?: () => void
    afterSubmit?: () => void
}) {
    const body = useSelector((state: RootState) => state.body)
    const dispatch = useDispatch()

    const [activity, setActivity] = useState<EXERCISE_ACTIVITY_TYPE>(
        body.activity
    )
    const [weightPlan, setWeightPlan] = useState<WEIGHT_PLAN_TYPES>(
        body.weightPlanType
    )
    const [weightAmount, setWeightAmount] = useState<number>(
        body.weightPlanValue
    )

    const onSubmit = () => {
        return setCurrentWeightPlan(weightPlan, weightAmount)
            .then((action) => dispatch(action))
            .finally(() => {
                setCurrentActivity(activity)
                    .then((action) => {
                        dispatch(action)
                    })
                    .finally(() => {
                        setRecommendedMacros().then((action) => {
                            dispatch(action)
                        })
                        afterSubmit?.()
                    })
            })
    }

    useEffect(() => {
        getBodyInfo().then((action) => {
            dispatch(action)
        })
    }, [])

    return (
        <Layout style={{ ...gstyle.Container, flexGrow: 1 }}>
            <Layout style={gstyle.SpaceBetween}>
                <Text category={'h6'}>Activity: </Text>
                <Select
                    defaultValue={body.activity}
                    data={[
                        SEDENTARY,
                        LIGHTLY_ACTIVE,
                        MODERATELY_ACTIVE,
                        ACTIVE,
                        VERY_ACTIVE,
                    ]}
                    onSelect={(selectedItem) => {
                        setActivity(selectedItem)
                    }}
                />
            </Layout>

            <Spacer />

            <Layout style={gstyle.SpaceBetween}>
                <Text category={'h6'}>Plan:</Text>
                <Select
                    defaultValue={body.weightPlanType}
                    data={[WEIGHT_LOSS, MAINTAIN_WEIGHT, WEIGHT_GAIN]}
                    onSelect={(selectedItem) => {
                        setWeightPlan(selectedItem)
                    }}
                />
            </Layout>

            {weightPlan != MAINTAIN_WEIGHT && (
                <>
                    <Spacer />
                    <Layout style={gstyle.SpaceBetween}>
                        <Layout>
                            <Text category={'h6'}>
                                {(weightPlan == WEIGHT_GAIN ? 'Gain' : 'Loss') +
                                    ' Amount:'}
                            </Text>
                            <Text category={'c2'}>Kg / Week</Text>
                        </Layout>
                        <Input
                            style={{ ...gstyle.Input }}
                            defaultValue={`${body.weightPlanValue}`}
                            keyboardType={'numeric'}
                            onChangeText={(text) => {
                                setWeightAmount(Number.parseFloat(text) || 0)
                            }}
                        />
                    </Layout>
                </>
            )}

            <Spacer height={32} />

            <Layout style={gstyle.SpaceBetween}>
                <Button
                    onPress={() => {
                        onBack?.()
                        if (navigation) {
                            navigation.navigate('SetupBody')
                        }
                    }}
                >
                    {navigation ? 'Back' : 'Cancel'}
                </Button>
                <Button
                    onPress={() => {
                        onSubmit()
                            .then(() => {
                                if (navigation) {
                                    navigation.navigate('SetupMacro')
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }}
                >
                    {navigation ? 'Next' : 'Done'}
                </Button>
            </Layout>
        </Layout>
    )
}

export default SetupPlanScreen
