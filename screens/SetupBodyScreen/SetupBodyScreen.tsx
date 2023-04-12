import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './SetupBodyScreen.style'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { BodyModel } from '../../models/BodyModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Select from '../../components/Select/Select'
import Spacer from '../../components/Spacer/Spacer'
import { setBodyInfo } from '../../redux/actions/dietActions'

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

    const bodyTypes = ['Male', 'Female']
    const body = useSelector((state: RootState) => state.body)

    const [userBody, setUserBody] = useState<BodyModel>(body)

    const onChange = (
        type: 'bodyType' | 'age' | 'height' | 'weight',
        value: number
    ) => {
        setUserBody((old) => ({ ...old, [type]: value }))
    }

    const onSubmit = () => {
        setBodyInfo(userBody)
            .then((action) => {
                dispatch(action)
            })
            .finally(afterSubmit)
    }

    return (
        <Layout style={style.SetupBodyScreen}>
            <Layout style={style.Container}>
                <Text category={'h6'}>Body type</Text>
                <Spacer />
                <Select
                    data={bodyTypes}
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
                        Back
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
                    Next
                </Button>
            </Layout>
        </Layout>
    )
}

export default SetupBodyScreen
