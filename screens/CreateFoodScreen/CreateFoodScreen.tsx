import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import style from './CreateFoodScreen.style'
import Spacer from '../../components/Spacer/Spacer'
import globalStyle from '../../styles/global-style'
import { useEffect, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { launchImageLibraryAsync } from 'expo-image-picker'
import Select from '../../components/Select/Select'
import {
    UnitOfMeasurement,
    unitOfMeasurementArray,
} from '../../models/MeasurmentModel'
import * as math from 'mathjs'
import { convertMacros, convertQuantity } from '../../misc/generateUnits'
import FoodModel from '../../models/FoodModel'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { putFood } from '../../redux/actions/foodActions'

interface foodForm {
    cals: number
    carbs: number
    fats: number
    proteins: number
}

function CreateFoodScreen({
    navigation,
    onBack,
    afterSubmit,
}: {
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
}) {
    const theme = useTheme()
    const auth = useSelector((state: RootState) => state.auth)

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const [foodForm, setFoodForm] = useState<foodForm>({
        cals: 0,
        carbs: 0,
        fats: 0,
        proteins: 0,
    })

    const [quantity, setQuantity] = useState<number>(100)
    const [baseQuantity, setBaseQuantity] = useState<number>(100)
    const [quantityType, setQuantityType] = useState<UnitOfMeasurement>('gram')

    const [foodImageUri, setFoodImageUri] = useState<string | undefined>(
        undefined
    )

    const onAddImage = () => {
        launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })
            .then((res) => {
                if (!res.assets) {
                    return
                }
                if (res.assets.length < 0) {
                    return
                }
                setFoodImageUri(res.assets[0].uri)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const updateForm = (name: string, text: string) => {
        setFoodForm((state) => ({
            ...state,
            [name]: Number.parseFloat(Number.parseFloat(text).toFixed(2)),
        }))
    }

    const createFood = () => {
        let { cals, carbs, fats, proteins } = convertMacros(
            baseQuantity,
            quantityType,
            foodForm.cals,
            foodForm.carbs,
            foodForm.fats,
            foodForm.proteins
        )

        let newFood: FoodModel = {
            id: 0,
            user_id: auth.user,
            image_path: '',
            name: name,
            calories: cals,
            empty_calories: 0,
            carbs: carbs,
            fats: fats,
            proteins: proteins,
        }

        return newFood
    }

    const onSubmit = () => {
        putFood(createFood())
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log('ERROR: ', err.message)
            })
            .finally(() => {
                afterSubmit?.()
                if (navigation) {
                    navigation.goBack()
                }
            })
    }

    useEffect(() => {
        if (quantityType && quantity) {
            setBaseQuantity(
                math.number(convertQuantity(quantity, quantityType))
            )
        }
    }, [quantity, quantityType])

    useEffect(() => {
        console.log(foodForm)
    }, [foodForm])

    return (
        <Layout style={style.CreateFoodScreen} level={'4'}>
            <Layout style={globalStyle.Container}>
                <Layout style={style.SpaceBetween}>
                    <Layout style={{ flex: 1, paddingRight: 16 }}>
                        <Text category={'h5'}>Create</Text>
                        <Spacer />
                        <Input
                            placeholder={'Name'}
                            onEndEditing={(e) => {
                                setName(e.nativeEvent.text)
                            }}
                        />
                    </Layout>

                    <TouchableOpacity
                        style={{
                            ...style.ImageContainer,
                            backgroundColor: theme['background-basic-color-2'],
                        }}
                        onPress={onAddImage}
                    >
                        {foodImageUri != undefined ? (
                            <Image
                                source={{ uri: foodImageUri }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'white',
                                }}
                            />
                        ) : (
                            <Text category={'h1'}>+</Text>
                        )}
                    </TouchableOpacity>
                </Layout>

                <Spacer />

                <Layout style={globalStyle.BasicContainer}>
                    <Input
                        placeholder={'Description'}
                        multiline
                        onEndEditing={(e) => {
                            setDescription(e.nativeEvent.text)
                        }}
                    />
                </Layout>

                <Spacer />

                <Layout style={globalStyle.SpaceBetween}>
                    <Input
                        size={'large'}
                        placeholder={'Quantity'}
                        style={{ flexGrow: 1 }}
                        keyboardType={'number-pad'}
                        defaultValue={quantity.toString()}
                        onEndEditing={(e) => {
                            if (!e.nativeEvent.text) {
                                setQuantity(0.0)
                                return
                            }

                            setQuantity(Number.parseFloat(e.nativeEvent.text))
                        }}
                    />
                    <Select
                        data={unitOfMeasurementArray}
                        defaultValue={quantityType}
                        onSelect={(selectedItem) => {
                            setQuantityType(selectedItem)
                        }}
                    />
                </Layout>
                <Spacer />
                <Layout style={style.Container}>
                    <Layout style={globalStyle.SpaceBetween}>
                        <Text category={'h6'}>Macronutrients</Text>
                    </Layout>
                    <Spacer />
                    <Input
                        placeholder={'Calories'}
                        keyboardType={'numeric'}
                        defaultValue={foodForm.cals.toFixed(2)}
                        onEndEditing={(e) => {
                            updateForm('cals', e.nativeEvent.text)
                        }}
                    ></Input>
                    <Spacer />
                    <Input
                        placeholder={'Carbohydrates'}
                        defaultValue={foodForm.carbs.toFixed(2)}
                        keyboardType={'numeric'}
                        onEndEditing={(e) => {
                            updateForm('carbs', e.nativeEvent.text)
                        }}
                    ></Input>
                    <Spacer />
                    <Input
                        placeholder={'Fats'}
                        defaultValue={foodForm.fats.toFixed(2)}
                        keyboardType={'numeric'}
                        onEndEditing={(e) => {
                            updateForm('fats', e.nativeEvent.text)
                        }}
                    ></Input>
                    <Spacer />
                    <Input
                        placeholder={'Proteins'}
                        defaultValue={foodForm.proteins.toFixed(2)}
                        keyboardType={'numeric'}
                        onEndEditing={(e) => {
                            updateForm('proteins', e.nativeEvent.text)
                        }}
                    ></Input>
                </Layout>
                <Spacer height={32} />
                <Layout
                    style={{
                        ...style.SpaceBetween,
                        alignItems: 'flex-end',
                    }}
                >
                    <Button
                        onPress={() => {
                            onBack?.()
                            if (navigation) {
                                navigation.goBack()
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onPress={() => {
                            onSubmit()
                        }}
                    >
                        Done
                    </Button>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default CreateFoodScreen
