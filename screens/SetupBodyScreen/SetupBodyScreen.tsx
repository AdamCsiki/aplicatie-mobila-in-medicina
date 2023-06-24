import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './SetupBodyScreen.style'
import { useEffect, useState } from 'react'
import { BodyModel } from '../../models/BodyModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Select from '../../components/Select/Select'
import Spacer from '../../components/Spacer/Spacer'
import { getBodyInfo, setBodyInfo } from '../../redux/actions/bodyActions'
import { SEX_TYPE_FEMALE, SEX_TYPE_MALE } from '../../misc/MacroTypes'
import gstyle from '../../styles/global-style'
import globalStyle from '../../styles/global-style'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

function SetupBodyScreen({
    navigation,
    onBack,
    afterSubmit,
}: {
    navigation?: NavigationProp<ParamListBase>
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

        return setBodyInfo(updatedUserBody)
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                afterSubmit?.()
            })
    }

    useEffect(() => {
        getBodyInfo().then((action) => {
            dispatch(action)
        })
    }, [])

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
                        onSubmit().then(() => {
                            if (navigation) {
                                navigation.navigate('SetupPlan')
                            }
                        })
                    }}
                >
                    {navigation ? 'Next' : 'Done'}
                </Button>
            </Layout>
        </Layout>
    )
}

export default SetupBodyScreen
