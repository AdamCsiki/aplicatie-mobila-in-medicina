import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './SetupBodyScreen.style'
import { useState } from 'react'
import { BodyModel } from '../../models/BodyModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Select from '../../components/Select/Select'
import Spacer from '../../components/Spacer/Spacer'
import { setBodyInfo, setCurrentBMR } from '../../redux/actions/bodyActions'
import {
    calculateBMR_harris,
    calculateBMR_mifflin,
} from '../../misc/MacroEquations'
import { BODY_TYPE_FEMALE, BODY_TYPE_MALE } from '../../misc/MacroTypes'
import gstyle from '../../styles/global-style'
import { HARRIS_EQUATION, MIFFLIN_EQUATION } from '../../redux/types/types'

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

    const bodyTypes = [BODY_TYPE_MALE, BODY_TYPE_FEMALE]
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
            maxCalsByBody:
                Math.ceil(
                    9.99 * userBody.weight +
                        6.25 * userBody.height +
                        4.92 * userBody.age +
                        (userBody.sex == BODY_TYPE_MALE ? 5 : -161)
                ) * 1.5,
            BMR_mifflin: Math.ceil(
                calculateBMR_mifflin(
                    userBody.weight,
                    userBody.height,
                    userBody.age,
                    userBody.sex
                )
            ),
            BMR_harris: Math.ceil(
                calculateBMR_harris(
                    userBody.weight,
                    userBody.height,
                    userBody.age,
                    userBody.sex
                )
            ),
        }

        setBodyInfo(updatedUserBody)
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                let bmr = 0

                switch (body.BMR_equation) {
                    case MIFFLIN_EQUATION: {
                        bmr = calculateBMR_mifflin(
                            body.weight,
                            body.height,
                            body.age,
                            body.sex
                        )
                        break
                    }
                    case HARRIS_EQUATION: {
                        bmr = calculateBMR_harris(
                            body.weight,
                            body.height,
                            body.age,
                            body.sex
                        )
                        break
                    }
                }

                return setCurrentBMR(body.BMR_equation, bmr)
                    .then((action) => {
                        dispatch(action)
                    })
                    .finally(() => {
                        afterSubmit?.()
                    })
            })
    }

    return (
        <Layout style={style.SetupBodyScreen}>
            <Layout style={gstyle.Header}>
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
            <Layout style={style.Container}>
                <Text category={'h6'}>Age</Text>
                <Spacer />
                <Input
                    defaultValue={`${body.age}`}
                    onChangeText={(text) =>
                        onChange('age', Number.parseFloat(text))
                    }
                />
            </Layout>
            <Spacer />
            <Layout style={style.Container}>
                <Text category={'h6'}>Height</Text>
                <Spacer />
                <Input
                    defaultValue={`${body.height}`}
                    onChangeText={(text) =>
                        onChange('height', Number.parseFloat(text))
                    }
                />
            </Layout>
            <Spacer />
            <Layout style={style.Container}>
                <Text category={'h6'}>Weight</Text>
                <Spacer />
                <Input
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
