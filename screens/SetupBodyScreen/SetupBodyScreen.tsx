import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './SetupBodyScreen.style'
import { useState } from 'react'
import { BodyModel } from '../../models/BodyModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Select from '../../components/Select/Select'
import Spacer from '../../components/Spacer/Spacer'
import {
    setBodyInfo,
    setCurrentBMR,
    setCurrentRMR,
} from '../../redux/actions/bodyActions'
import { calculateBMR, calculateRMR } from '../../misc/Equations'
import { SEX_TYPE_FEMALE, SEX_TYPE_MALE } from '../../misc/MacroTypes'
import gstyle from '../../styles/global-style'
import globalStyle from '../../styles/global-style'

function SetupBodyScreen({
    navigation,
    onBack,
    afterSubmit,
}: {
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
}) {
    const dispatch = useDispatch()

    const bodyTypes = [SEX_TYPE_MALE, SEX_TYPE_FEMALE]
    const body = useSelector((state: RootState) => state.body)

    const [userBody, setUserBody] = useState<BodyModel>(body)

    const onChange = (
        type: 'sex' | 'age' | 'height' | 'weight',
        value: number
    ) => {
        setUserBody((old) => ({ ...old, [type]: value }))
    }

    const onSubmit = () => {
        const updatedUserBody = {
            ...userBody,
        }

        setBodyInfo(updatedUserBody)
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                let bmr = calculateBMR(
                    updatedUserBody.BMR_equation,
                    updatedUserBody.weight,
                    updatedUserBody.height,
                    updatedUserBody.age,
                    updatedUserBody.sex
                )
                let rmr = calculateRMR(
                    updatedUserBody.RMR_equation,
                    updatedUserBody.weight,
                    updatedUserBody.height,
                    updatedUserBody.age,
                    updatedUserBody.sex
                )

                updatedUserBody.BMR = bmr

                return setCurrentRMR(updatedUserBody.RMR_equation, rmr)
                    .then((action) => {
                        dispatch(action)
                    })
                    .finally(() => {
                        return setCurrentBMR(updatedUserBody.BMR_equation, bmr)
                            .then((action) => {
                                dispatch(action)
                            })
                            .finally(() => {
                                afterSubmit?.()
                            })
                    })
            })
    }

    return (
        <Layout style={style.SetupBodyScreen}>
            <Layout style={gstyle.SpaceBetween}>
                <Text category={'h6'}>Sex</Text>
                <Select
                    data={bodyTypes}
                    defaultValue={body.sex}
                    onSelect={(selectedItem, index) => {
                        setUserBody((old) => ({
                            ...old,
                            sex: selectedItem,
                        }))
                    }}
                />
            </Layout>
            <Spacer />
            <Layout style={globalStyle.SpaceBetween}>
                <Text category={'h6'}>Age</Text>
                <Input
                    style={style.Input}
                    defaultValue={`${body.age}`}
                    onChangeText={(text) =>
                        onChange('age', Number.parseFloat(text))
                    }
                />
            </Layout>
            <Spacer />
            <Layout style={globalStyle.SpaceBetween}>
                <Text category={'h6'}>Height (cm) </Text>
                <Input
                    style={style.Input}
                    defaultValue={`${body.height}`}
                    onChangeText={(text) =>
                        onChange('height', Number.parseFloat(text))
                    }
                />
            </Layout>
            <Spacer />
            <Layout style={globalStyle.SpaceBetween}>
                <Text category={'h6'}>Weight (kilograms)</Text>
                <Input
                    style={style.Input}
                    defaultValue={`${body.weight}`}
                    onChangeText={(text) =>
                        onChange('weight', Number.parseFloat(text))
                    }
                />
            </Layout>
            <Spacer height={32} />
            <Layout style={style.ContainerHeader}>
                {!navigation && (
                    <Button
                        onPress={() => {
                            onBack?.()
                        }}
                    >
                        Cancel
                    </Button>
                )}
                <Button
                    onPress={() => {
                        if (navigation) {
                            navigation.navigate('SetupMacro')
                        }
                        onSubmit()
                    }}
                >
                    {navigation ? 'Next' : 'Done'}
                </Button>
            </Layout>
        </Layout>
    )
}

export default SetupBodyScreen
