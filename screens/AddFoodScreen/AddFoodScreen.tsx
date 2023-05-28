import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { ScrollView } from 'react-native-virtualized-view'
import style from './AddFoodScreen.style'
import gstyle from '../../styles/global-style'
import { Image, TouchableOpacity } from 'react-native'
import FoodModel from '../../models/FoodModel'
import Spacer from '../../components/Spacer/Spacer'
import Select from '../../components/Select/Select'
import { SpinnerComponent } from 'react-native-ui-kitten/ui/spinner/spinner.component'
import { useEffect, useState } from 'react'

function AddFoodScreen({
    foodItem,
    navigation,
    onBack,
    afterSubmit,
}: {
    foodItem?: FoodModel
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
}) {
    const [quantity, setQuantity] = useState<number>(0)
    const [quantityType, setQuantityType] = useState('g')

    useEffect(() => {
        console.log(quantity)
    }, [quantity])

    return (
        <Layout style={gstyle.ScrollContainerParent}>
            <ScrollView style={gstyle.ScrollContainer}>
                <Layout style={gstyle.Header}>
                    <Text category={'h5'}>Add Food</Text>
                    <Text>{foodItem?.name}</Text>
                </Layout>
                <Spacer height={32} />
                <Layout style={gstyle.Header}>
                    <Input
                        placeholder={'Quantity'}
                        style={{ flexGrow: 1 }}
                        keyboardType={'number-pad'}
                        defaultValue={quantity.toFixed(2)}
                        onEndEditing={(e) => {
                            if (!e.nativeEvent.text) {
                                setQuantity(0.0)
                                return
                            }

                            setQuantity(Number.parseFloat(e.nativeEvent.text))
                        }}
                    />
                    <Select
                        data={['g', 'Kg']}
                        onSelect={() => {}}
                        defaultValueByIndex={0}
                    />
                </Layout>
                <Spacer height={32} />
                <Layout style={gstyle.Header}>
                    <Button
                        onPress={() => {
                            onBack?.()
                        }}
                    >
                        <Text>Cancel</Text>
                    </Button>
                    <Button
                        onPress={() => {
                            afterSubmit?.()
                        }}
                    >
                        <Text>Done</Text>
                    </Button>
                </Layout>
            </ScrollView>
        </Layout>
    )
}

export default AddFoodScreen
