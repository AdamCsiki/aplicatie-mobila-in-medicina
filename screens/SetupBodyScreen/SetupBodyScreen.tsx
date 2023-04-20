import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './SetupBodyScreen.style'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { BodyModel } from '../../models/BodyModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Select from '../../components/Select/Select'
import Spacer from '../../components/Spacer/Spacer'
import { setBodyInfo } from '../../redux/actions/bodyActions'
import {
    calculateBMR_harris,
    calculateBMR_mifflin,
} from '../../misc/MacroEquations'

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

    const bodyTypes = ['male', 'female']
    const body = useSelector((state: RootState) => state.body)

    const [userBody, setUserBody] = useState<BodyModel>(body)

    const onChange = (
        type: 'bodyType' | 'age' | 'height' | 'weight',
        value: number
    ) => {
        setUserBody((old) => ({ ...old, [type]: value }))
    }

    const onSubmit = () => {
        const updatedUserBody = {
            ...userBody,
            maxCalsByBody: Math.ceil(
                9.99 * userBody.weight +
                    6.25 * userBody.height +
                    4.92 * userBody.age +
                    (userBody.bodyType == 'male' ? 5 : -161)
            ),
            BMR_mifflin: Math.ceil(
                calculateBMR_mifflin(
                    userBody.weight,
                    userBody.height,
                    userBody.age,
                    userBody.bodyType
                )
            ),
            BMR_harris: Math.ceil(
                calculateBMR_harris(
                    userBody.weight,
                    userBody.height,
                    userBody.age,
                    userBody.bodyType
                )
            ),
        }

        setBodyInfo(updatedUserBody)
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                afterSubmit?.()
            })
    }

    return (
        <Layout style={style.SetupBodyScreen}>
            <Layout style={style.Container}>
                <Text category={'h6'}>Body type</Text>
                <Spacer />
                <Select
                    data={bodyTypes}
                    defaultValue={body.bodyType}
                    onSelect={(selectedItem, index) => {
                        setUserBody((old) => ({
                            ...old,
                            bodyType: selectedItem,
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
