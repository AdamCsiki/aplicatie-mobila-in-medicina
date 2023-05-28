import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import style from './CreateFoodScreen.style'
import SearchList from '../../components/SearchList/SearchList'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'
import Spacer from '../../components/Spacer/Spacer'
import { ScrollView } from 'react-native-virtualized-view'
import gstyle from '../../styles/global-style'
import { useEffect, useState } from 'react'
import { getAllFoods, searchFoods } from '../../redux/actions/searchActions'
import FoodModel from '../../models/FoodModel'
import { Image, TouchableOpacity } from 'react-native'
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker'
import axios from '../../api/axios'
import FoodService from '../../services/FoodService'
import Select from '../../components/Select/Select'

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

    const [ingredientsVisible, setIngredientsVisible] = useState(false)
    const [ingredientsList, setIngredientsList] = useState<FoodModel[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('')

    const [createdFood, setCreatedFood] = useState<FoodModel>({} as FoodModel)
    const [weight, setWeight] = useState(0)
    const [weightType, setWeightType] = useState('g')

    const [foodImageUri, setFoodImageUri] = useState<string | undefined>(
        undefined
    )

    const uploadImage = () => {
        if (!foodImageUri) {
            return
        }
        return FoodService.putFoodImage(foodImageUri, createdFood.id)
    }

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

    const onSearchIngredients = () => {
        if (!searchQuery.trim()) {
            return getAllFoods()
                .then((res) => setIngredientsList(res))
                .catch((err) => {
                    console.log(err.message)
                })
        }
        return searchFoods(searchQuery.trim())
            .then((res) => setIngredientsList(res))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const onSubmit = () => {
        afterSubmit?.()
        if (navigation) {
            navigation.goBack()
        }
    }

    if (ingredientsVisible) {
        return (
            <Layout style={style.CreateFoodScreen} level={'4'}>
                <Layout style={gstyle.Container}>
                    <Layout style={style.IngredientsContainer}>
                        <Layout style={style.Header}>
                            <Text>Ingredients</Text>
                        </Layout>
                        <Spacer />
                        <Layout style={style.Header}>
                            <Input style={{ width: '60%' }} />
                            <Button
                                onPress={() => {
                                    onSearchIngredients()
                                }}
                            >
                                Search
                            </Button>
                        </Layout>
                        <Spacer />
                        <SearchList
                            data={ingredientsList}
                            renderItem={({ item }) => {
                                return (
                                    <SearchFoodItem
                                        item={item}
                                        onPress={() => {}}
                                        onPressAdd={() => {}}
                                    />
                                )
                            }}
                        />
                    </Layout>
                    <Spacer />
                    <Layout
                        style={{
                            ...style.Header,
                            alignItems: 'flex-end',
                        }}
                    >
                        <Button
                            onPress={() => {
                                setIngredientsVisible(false)
                            }}
                        >
                            Back
                        </Button>
                        <Button
                            onPress={() => {
                                navigation.navig
                            }}
                        >
                            Next
                        </Button>
                    </Layout>
                </Layout>
            </Layout>
        )
    }

    return (
        <Layout style={style.CreateFoodScreen} level={'4'}>
            <Layout style={gstyle.Container}>
                <Layout style={style.Header}>
                    <Layout style={{ flex: 1, paddingRight: 16 }}>
                        <Text category={'h5'}>Create</Text>
                        <Spacer />
                        <Input placeholder={'Name'} />
                    </Layout>

                    <TouchableOpacity
                        style={{
                            ...style.ImageContainer,
                            backgroundColor: theme['background-basic-color-2'],
                        }}
                        onPress={onAddImage}
                    >
                        {foodImageUri != undefined && (
                            <Image
                                source={{ uri: foodImageUri }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'white',
                                }}
                            />
                        )}
                    </TouchableOpacity>
                </Layout>
                <Spacer />
                <Layout style={gstyle.BasicContainer}>
                    <Input placeholder={'Description'} multiline />
                </Layout>
                <Spacer />
                <Layout
                    style={{
                        ...gstyle.Header,
                        justifyContent: 'space-between',
                    }}
                >
                    <Input
                        placeholder={'Quantity'}
                        style={{
                            flexGrow: 1,
                        }}
                        keyboardType={'number-pad'}
                        defaultValue={weight.toFixed(2)}
                        onEndEditing={(e) => {
                            if (!e.nativeEvent.text) {
                                setWeight(0.0)
                                return
                            }

                            setWeight(Number.parseFloat(e.nativeEvent.text))
                        }}
                    />
                    <Select
                        data={['g', 'Kg']}
                        onSelect={(selectedItem, index) => {
                            setWeightType(selectedItem)
                        }}
                        defaultValueByIndex={0}
                    />
                </Layout>
                <Spacer />
                <Layout style={style.Container}>
                    <Layout style={gstyle.Header}>
                        <Text category={'h6'}>Macronutrients</Text>
                        <Button
                            onPress={() => {
                                setIngredientsVisible(true)
                            }}
                        >
                            Custom
                        </Button>
                    </Layout>
                    <Spacer />
                    <Input placeholder={'Calories'}></Input>
                    <Spacer />
                    <Input placeholder={'Carbohydrates'}></Input>
                    <Spacer />
                    <Input placeholder={'Fats'}></Input>
                    <Spacer />
                    <Input placeholder={'Proteins'}></Input>
                </Layout>
                <Spacer height={32} />
                <Layout
                    style={{
                        ...style.Header,
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
